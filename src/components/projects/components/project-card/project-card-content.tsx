import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import type { IProject } from '~/module-types/api-rest/projects'

export interface ProjectCardContentProps {
  isOpen: boolean
  project: IProject
}

export function ProjectCardContent(props: ProjectCardContentProps) {
  const { isOpen, project } = props

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full">
          <div className="flex flex-col py-4 px-5 space-y-4">
            <p className="flex-1">{project.shortDescription}</p>
            <div>
              <a
                href={(project.repositoryUrl ?? project.packageUrl ?? project.websiteUrl) as string}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center py-2 px-6 space-x-2 text-white no-underline bg-primary-700 dark:bg-white/10 rounded-full transition-transform duration-500 hover:scale-95 select-none"
              >
                <span>Ver proyecto</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
