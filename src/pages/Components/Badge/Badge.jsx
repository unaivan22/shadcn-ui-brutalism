import React from 'react'
import Layout from '../../Layout'
import { ArrowUpRight, ChevronRight, Mail, RotateCcw } from 'lucide-react'
import {Link} from 'react-router-dom'
import { Badge } from "@/components/ui/badge"
import BadgeCodeCustomSnippet from './BadgeCodeCustomSnippet'
import BadgeCodeUsageSnippet from './BadgeCodeUsageSnippet'

export default function BadgeSection() {
  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <div className='flex flex-wrap gap-4 p-6'>
                <Badge>Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/badge.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <BadgeCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/badge' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <BadgeCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
