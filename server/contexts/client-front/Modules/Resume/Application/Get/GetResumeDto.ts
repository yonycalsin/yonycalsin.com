import _ from 'lodash'

import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface GetResumeJsonDto {
  id: string
  jobTitle: string
  fullName: string
  introduction: string
  location: string
  website: string
  contact: {
    email: string
    phone: string | null
  }
  socials: {
    github: string | null
    linkedin: string | null
    twitter: string | null
  }
  workExperiences: {
    jobTitle: string
    employmentType: string
    country: string
    city: string | null
    isRemote: boolean
    technologiesUsed: string[]
    startedAt: string
    endAt: string | null
  }[]
  languages: {
    name: string
    score: number
    proficiencyLevel: string
  }[]
}

interface GetResumeDtoProps {
  id: string
  jobTitle: string
  fullName: string
  introduction: string
  location: string
  website: string
  contact: {
    email: string
    phone?: string
  }
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
  }
  workExperiences: {
    jobTitle: string
    employmentType: string
    country: string
    city?: string
    isRemote: boolean
    technologiesUsed: string[]
    startedAt: Date
    endAt?: Date
  }[]
  languages: {
    name: string
    score: number
    proficiencyLevel: string
  }[]
}

class GetResumeDto implements JsonSerializable<GetResumeJsonDto> {
  private readonly id: string

  private readonly jobTitle: string

  private readonly fullName: string

  private readonly introduction: string

  private readonly location: string

  private readonly website: string

  private readonly contact: GetResumeDtoProps['contact']

  private readonly socials: GetResumeDtoProps['socials']

  private readonly workExperiences: GetResumeDtoProps['workExperiences']

  private readonly languages: GetResumeDtoProps['languages']

  public constructor(props: GetResumeDtoProps) {
    this.id = props.id

    this.jobTitle = props.jobTitle

    this.fullName = props.fullName

    this.introduction = props.introduction

    this.location = props.location

    this.website = props.website

    this.contact = props.contact

    this.socials = props.socials

    this.workExperiences = props.workExperiences

    this.languages = props.languages
  }

  public static create(props: GetResumeDtoProps) {
    return new GetResumeDto(props)
  }

  public toJSON(): GetResumeJsonDto {
    return {
      id: this.id,
      jobTitle: this.jobTitle,
      fullName: this.fullName,
      introduction: this.introduction,
      location: this.location,
      website: this.website,
      contact: {
        email: this.contact.email,
        phone: this.contact.phone ?? null,
      },
      socials: {
        github: this.socials.github ?? null,
        linkedin: this.socials.linkedin ?? null,
        twitter: this.socials.twitter ?? null,
      },
      workExperiences: _.map(this.workExperiences, workExperience => ({
        jobTitle: workExperience.jobTitle,
        employmentType: workExperience.employmentType,
        country: workExperience.country,
        city: workExperience.city ?? null,
        isRemote: workExperience.isRemote,
        technologiesUsed: workExperience.technologiesUsed,
        startedAt: workExperience.startedAt.toISOString(),
        endAt: workExperience.endAt?.toISOString() ?? null,
      })),
      languages: this.languages,
    }
  }
}

export type { GetResumeDtoProps }

export default GetResumeDto
