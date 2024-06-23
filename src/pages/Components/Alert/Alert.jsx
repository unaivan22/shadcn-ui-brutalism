import React from 'react'
import Layout from '../../Layout'
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { ArrowUpRight, Rocket } from 'lucide-react'
import AlertCodeCustomSnippet from './AlertCodeCustomSnippet'
import AlertCodeUsageSnippet from './AlertCodeUsageSnippet'

export default function AlertSection() {
  return (
    <div>
      <Layout>
      <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full px-12'>
            <Alert>
              <Rocket className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/accordion.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <AlertCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/alert' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /></a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <AlertCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
