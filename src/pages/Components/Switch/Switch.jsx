import React from 'react'
import Layout from '../../Layout'
import { ArrowUpRight, Rocket } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import SwitchCodeCustomSnippet from './SwitchCodeCustomSnippet'
import SwitchCodeUsageSnippet from './SwitchCodeUsageSnippet'

export default function SwitchSection() {

  return (
    <div>
      <Layout>
      <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full px-12'>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/switch.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <SwitchCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/switch' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /></a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <SwitchCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
