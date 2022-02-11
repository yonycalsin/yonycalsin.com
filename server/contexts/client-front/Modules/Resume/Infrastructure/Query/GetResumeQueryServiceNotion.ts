import debug from 'debug'
import _ from 'lodash'

import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetResumeDto, { GetResumeDtoProps } from '../../Application/Get/GetResumeDto'
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

    const resumeWorkExperiencesRelations = _.get(resume, 'properties["Work Experiencies"].relation')

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

    const workExperiences = await Promise.all(
      _.map(resumeWorkExperiencesRelations, async (relation): Promise<GetResumeDtoProps['workExperiences'][number]> => {
        const page = (await client.pages.retrieve({
          page_id: relation.id,
        })) as any

        return {
          jobTitle: _.get(page, 'properties["Job Title"].title[0].plain_text'),
          employmentType: _.get(page, 'properties["Employment type"].select.name'),
          country: _.get(page, 'properties.Country.select.name'),
          city: _.get(page, 'properties.City.select.name'),
          isRemote: _.get(page, 'properties["Was this job remote position?"].checkbox'),
          technologiesUsed: _.map(_.get(page, 'properties["Technologies used"].multi_select'), 'name'),
          startedAt: new Date(_.get(page, 'properties["Started At"].date.start')),
          endAt: _.get(page, 'properties["End At"].date.start')
            ? new Date(_.get(page, 'properties["End At"].date.start'))
            : undefined,
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
      workExperiences: _.orderBy(workExperiences, 'startedAt', ['desc']),
      languages,
    })
  }
}

export default GetResumeQueryServiceNotion
