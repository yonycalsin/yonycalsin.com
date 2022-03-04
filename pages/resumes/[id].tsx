import dynamic from 'next/dynamic'

const Resume = dynamic(() => import('~/components/resume'), {
  ssr: false,
})

function ResumePage() {
  return <Resume />
}

export default ResumePage
