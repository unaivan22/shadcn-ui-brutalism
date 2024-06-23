"use client"
 
import * as React from "react"
import Layout from '../../Layout'
 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import CommandCodeCustomSnippet from "./CommandCodeCustomSnippet"
import CommandCodeUsageSnippet from "./CommandCodeUsageSnippet"
import { ArrowUpRight, Calendar, Mail, PersonStanding, Rocket, ScanFaceIcon, Settings } from "lucide-react"

export default function CommandSection() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <div className="flex items-center space-x-2">
                <Command className="rounded border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <ScanFaceIcon className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <Rocket className="mr-2 h-4 w-4" />
                        <span>Launch</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>
                        <PersonStanding className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Mail</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/command.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CommandCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/command' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <CommandCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
