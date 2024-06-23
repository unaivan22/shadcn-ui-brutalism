"use client"
import React, { useState } from 'react';
import Layout from '../../Layout'
import { ArrowUpRight } from 'lucide-react'
import CalendarCodeCustomSnippet from './CalendarCodeCustomSnippet'
import CalendarCodeUsageSnippet from './CalendarCodeUsageSnippet'
import { Calendar } from '@/components/ui/calendar'

export default function CalendarSection() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border-2 border-black"
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/calendar.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CalendarCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/calendar' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CalendarCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
