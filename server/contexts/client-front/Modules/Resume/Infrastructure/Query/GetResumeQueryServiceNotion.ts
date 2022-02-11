import debug from 'debug'
import _ from 'lodash'

import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetResumeDto from '../../Application/Get/GetResumeDto'
import type GetResumeQueryService from '../../Application/Get/GetResumeQueryService'

const logger = debug('api:contexts:client-front:modules:resume:infrastructure:query:get-resume-query-service-notion')

class GetResumeQueryServiceNotion implements GetResumeQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(id: string): Promise<GetResumeDto> {
    const client = this.sdkClientNotion.getClient()

    const resume = await client.pages.retrieve({
      page_id: id,
    })

    const resumeLanguagesRelations = _.get(resume, 'properties["Languages"].relation')

    const techProfileNotionPage = (await client.pages.retrieve({
      page_id: _.get(resume, "properties.['Tech Profile'].relation[0].id"),
    })) as any

    const languages = await Promise.all(
      _.map(resumeLanguagesRelations, async relation => {
        const page = (await client.pages.retrieve({
          page_id: relation.id,
        })) as any

        return {
          name: _.get(page, 'properties.Name.title[0].plain_text'),
          score: _.get(page, 'properties.Score.number'),
          proficiencyLevel: _.get(page, 'properties.["Proficiency level"].select.name'),
        }
      }),
    )

    return GetResumeDto.create({
      id: resume.id,
      jobTitle: _.get(techProfileNotionPage, 'properties["Job Title"].title[0].plain_text'),
      fullName: _.get(techProfileNotionPage, 'properties["Full Name"].rich_text[0].plain_text'),
      introduction: _.get(techProfileNotionPage, 'properties["Introduction"].rich_text[0].plain_text'),
      location: _.get(techProfileNotionPage, 'properties["Location"].select.name'),
      website: _.get(techProfileNotionPage, 'properties.Website.url'),
      contact: {
        email: _.get(techProfileNotionPage, 'properties["Contact Email"].email'),
        phone: _.get(techProfileNotionPage, 'properties["Contact Phone"].phone_number'),
      },
      socials: {
        github: _.get(techProfileNotionPage, 'properties["Github Profile"].url'),
        linkedin: _.get(techProfileNotionPage, 'properties["Linkedin Profile"].url'),
        twitter: _.get(techProfileNotionPage, 'properties["Twitter Profile"].url'),
      },
      languages,
    })
  }
}

export default GetResumeQueryServiceNotion
