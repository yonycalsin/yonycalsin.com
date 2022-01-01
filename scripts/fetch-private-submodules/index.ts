import { exec } from 'child_process'
import _ from 'lodash'
import { promisify } from 'util'

import privateSubmodules from './private-submodules.json'

interface Submodule {
  commitHash: string
  commit: string
  config: {
    PATH: string
    GITHUB_URL: string
  }
}

const execCommand = promisify(exec)

const NEWLINES_MATCH = /\r\n|\n|\r/

const START_AND_END_WHITE_SPACE_MATCH = /^\s+|\s+$/g

const HEAD_COMMIT_MATCH = /(\(([\w\d\/]+)\))/g

async function fetchSubmodule(submodule: Submodule) {
  const { config } = submodule

  const tempFolder = `temp/${config.PATH}`

  const command = `
    rm -rf ${tempFolder} || true &&

    mkdir -p ${tempFolder} &&

    cd ${tempFolder} && 

    git init &&

    git remote add origin https://${process.env.GITHUB_ACCESS_TOKEN}@${config.GITHUB_URL} &&

    git fetch --depth=1 origin ${submodule.commitHash} &&

    git checkout ${submodule.commitHash} &&

    cd ../../.. &&

    rm -rf ${tempFolder}/.git &&

    mv ${tempFolder}/* ${submodule.config.PATH} &&

    rm -rf ${tempFolder}
    `

  const output = await execCommand(command)

  // eslint-disable-next-line no-console
  console.log(output)
}

async function bootstrap() {
  const { stdout: submoduleCommits } = await execCommand('git submodule status --recursive')

  const submodules = submoduleCommits
    .toString()
    .trim()
    .split(NEWLINES_MATCH)
    .map((submoduleCommit): Submodule => {
      const sanitized = submoduleCommit
        .replace(START_AND_END_WHITE_SPACE_MATCH, '')
        .replace(HEAD_COMMIT_MATCH, '')
        .replace(START_AND_END_WHITE_SPACE_MATCH, '')
        .replace(/^(\-)/, '')

      const [commitHash, path] = sanitized.split(' ')

      const config = _.find(privateSubmodules, { PATH: path }) as Submodule['config']

      return { commitHash, commit: sanitized, config }
    })
    .filter(submodule => !!submodule.config)

  await Promise.all(submodules.map(fetchSubmodule))
}

bootstrap()
