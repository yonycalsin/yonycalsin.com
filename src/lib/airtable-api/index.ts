import Airtable from 'airtable'

/**
 * to avoid validation "(An API key is required to connect to Airtable)"
 * we should not create an instance of a database
 *
 * @link https://git.io/JSCy2
 */
const db = process.env.AIRTABLE_BASE_ID
  ? Airtable.base(process.env.AIRTABLE_BASE_ID as string)
  : (null as unknown as any)

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
    (item: any): WorkProject => ({
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
