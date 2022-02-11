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
      languages: this.languages,
    }
  }
}

export default GetResumeDto
