import * as React from 'react'
import { motion } from 'framer-motion'

import type { IProject } from '~/module-types/api-rest/projects'

export interface ProjectCardButtonProps {
  isOpen: boolean
  onToggle: () => void
  project: IProject
}

export function ProjectCardButton(props: ProjectCardButtonProps) {
  const { isOpen, onToggle, project } = props

  return (
    <button
      type="button"
      className="flex items-center py-4 px-5 space-x-2 md:text-lg font-bold border-b dark:border-white/10 focus:outline-none cursor-pointer select-none"
      onClick={onToggle}
      title={project.name}
    >
      <div className="flex flex-1 items-center space-x-2 text-left">
        <p className="truncate">{project.slug}</p>
        <span className="flex items-center space-x-3 text-xs">
          <span className="space-x-1">
            <span>⭐</span>
            <span>-</span>
          </span>
          <span className="space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>-</span>
          </span>
        </span>
      </div>
      <div>
        <motion.div className="p-1 bg-white/0 hover:bg-white/10 rounded-full" animate={{ rotate: isOpen ? 90 : 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>
    </button>
  )
}
