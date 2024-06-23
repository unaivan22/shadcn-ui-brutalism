import React from 'react'
import { Button } from "@/components/ui/button"
import Layout from '../../Layout'
import ButtonCodeCustomSnippet from './ButtonCodeCustomSnippet'
import ButtonCodeUsageSnippet from './ButtonCodeUsageSnippet'
import { ArrowUpRight, ChevronRight, Mail, RotateCcw } from 'lucide-react'
import {Link} from 'react-router-dom'

export default function ButtonSection() {
  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <div className='flex flex-wrap gap-4 p-6'>
                <Button>Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button disabled>
                  <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                <Button asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="rounded">Rounded</Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/button.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <ButtonCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/button' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <ButtonCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
