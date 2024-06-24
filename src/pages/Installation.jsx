import React from 'react'
import Layout from './Layout'

export default function Installation() {
  return (
    <div>
        <Layout>
        <div className='h-screen relative bg-[#eaf207] container py-12'>
            <h1 className='text-[3rem] md:text-[5rem] font-bold'>Installation</h1>
            <h1 className='text-xl md:text-4xl font-semibold'>Go to official shadcn/ui <span><a href='https://ui.shadcn.com/docs/installation' className='cursor-pointer underline' target='_blank'>Installation</a> </span></h1>
            
            <div className='my-12'>
                <p className='font-semibold text-xl'>Changelog</p>
                <div className='mt-6'>
                    <span className="font-medium text-sm font-mono mb-3">Version 1.0 <span className='text-xs'>(24 Juni 2024)</span></span>
                    <ul className="list-disc list-inside text-slate-900 dark:text-slate-200">
                    <li>First release</li>
                    <li>28 components available</li>
                    <li>Not yet available in dark mode</li>
                    </ul>
                </div>
            </div>
        </div>
        </Layout>
    </div>
  )
}
