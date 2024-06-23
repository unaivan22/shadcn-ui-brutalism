import React from 'react'
import Layout from '../../Layout'
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Rocket } from 'lucide-react'
import ProgressCodeCustomSnippet from './ProgressCodeCustomSnippet'
import ProgressCodeUsageSnippet from './ProgressCodeUsageSnippet'

export default function ProgressSection() {
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <Layout>
      <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full px-12'>
              <Progress value={progress} className="w-[60%]" />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/progress.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <ProgressCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/progress' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /></a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <ProgressCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
