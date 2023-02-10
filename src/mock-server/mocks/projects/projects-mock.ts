import {
  ProjectMaintenanceStatusResponsePayload,
  ProjectResponsePayload,
  ProjectStatusResponsePayload,
  ProjectTypeResponsePayload,
  ServerListResponse,
} from 'typings/services'

const allProjectsSuccess: ServerListResponse<ProjectResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        id: 1,
        slug: 'AWS Clone',
        name: 'aws-clone',
        type: ProjectTypeResponsePayload.PROJECT,
        status: ProjectStatusResponsePayload.PUBLISHED,
        maintenanceStatus: ProjectMaintenanceStatusResponsePayload.ACTIVE,
        isPinned: false,
        shortDescription: 'A clone of aws of amazon',
        websiteUrl: 'https://aws-clone.projects.yonycalsin.com',
        repositoryUrl: null,
        packageUrl: null,
        techStack: [
          {
            color: 'red',
            name: 'Golang',
          },
          {
            color: 'peru',
            name: 'Kubernetes',
          },
          {
            color: 'blue',
            name: 'Python',
          },
        ],
        startedAt: '2021-05-16T00:18:26.490Z',
      },
    ],
    meta: {
      hasPrevPage: false,
      hasNextPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
}

const pinnedProjectsSuccess: ServerListResponse<ProjectResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        id: 1,
        slug: 'React Hook Form',
        name: 'react-hook-form',
        type: ProjectTypeResponsePayload.CONTRIBUTION,
        status: ProjectStatusResponsePayload.PUBLISHED,
        maintenanceStatus: ProjectMaintenanceStatusResponsePayload.ACTIVE,
        isPinned: true,
        shortDescription: 'A library to handle form validations with react hooks',
        websiteUrl: null,
        repositoryUrl: 'https://github.com/react-hook-form/react-hook-form',
        packageUrl: null,
        techStack: [
          {
            color: 'peru',
            name: 'Typescript',
          },
          {
            color: 'blue',
            name: 'Cypress',
          },
          {
            color: 'red',
            name: 'React',
          },
        ],
        startedAt: '2016-06-10T00:21:25.035Z',
      },
    ],
    meta: {
      hasPrevPage: false,
      hasNextPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
}

export { allProjectsSuccess, pinnedProjectsSuccess }
