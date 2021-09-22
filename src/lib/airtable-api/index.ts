import Airtable from 'airtable'

const db = Airtable.base(process.env.AIRTABLE_BASE_ID as string)

export interface WorkProject {
  id: string
  name: string
  description: string
  webUrl?: string
  repositoryUrl?: string
  packageUrl?: string
  technologies?: string[]
  startedAt: string
  finishedAt: string
}

export async function getWorkProjects(): Promise<WorkProject[]> {
  const records = await db('Work Projects')
    .select({
      sort: [
        {
          field: 'Started At',
          direction: 'desc',
        },
        {
          field: 'Finished At',
          direction: 'desc',
        },
      ],
    })
    .all()

  return records.map(
    (item): WorkProject => ({
      id: item.id,
      name: item.get('Name') as string,
      description: item.get('Description') as string,
      webUrl: (item.get('Web URL') as string) ?? null,
      repositoryUrl: (item.get('Repository URL') as string) ?? null,
      packageUrl: (item.get('Package URL') as string) ?? null,
      technologies: item.get('Technologies') as string[],
      startedAt: item.get('Started At') as string,
      finishedAt: (item.get('Finished At') as string) ?? null,
    }),
  )
}
