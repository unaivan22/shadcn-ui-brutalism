import React from 'react'
import Layout from '../../Layout'
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpRight } from 'lucide-react'
import CheckboxCodeCustomSnippet from './CheckboxCodeCustomSnippet'
import CheckboxCodeUsageSnippet from './CheckboxCodeUsageSnippet'
  

export default function CheckboxlSection() {
  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/checkbox.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CheckboxCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/checkbox' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CheckboxCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
