import React from 'react'
import Layout from '../../Layout'
import { ArrowUpRight, Rocket } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import SliderCodeCustomSnippet from './SliderCodeCustomSnippet'
import SliderCodeUsageSnippet from './SliderCodeUsageSnippet'

export default function SliderSection() {

  return (
    <div>
      <Layout>
      <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full px-12'>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn("w-[60%]")}
                // {...props}
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/slider.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <SliderCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/slider' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /></a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <SliderCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
