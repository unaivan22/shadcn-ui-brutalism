"use client"
 
import React, { useState } from 'react';

import Layout from '../../Layout'
import { ArrowUpRight, CalendarCheck, Minus, MinusCircle, Plus, PlusCircle} from "lucide-react"
import DrawerCodeCustomSnippet from './DrawerCodeCustomSnippet';
import DrawerCodeUsageSnippet from './DrawerCodeUsageSnippet';
import { Bar, BarChart, ResponsiveContainer } from "recharts"
 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export default function DrawerSection() {
  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border-2 border-black bg-lime-200 w-full'>
              <div className="flex items-center space-x-2">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(-10)}
                            disabled={goal <= 200}
                          >
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Decrease</span>
                          </Button>
                          <div className="flex-1 text-center">
                            <div className="text-7xl font-bold tracking-tighter">
                              {goal}
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                              Calories/day
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(10)}
                            disabled={goal >= 400}
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Increase</span>
                          </Button>
                        </div>
                        <div className="mt-3 h-[120px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                              <Bar
                                dataKey="goal"
                                style={
                                  {
                                    fill: "hsl(var(--foreground))",
                                    opacity: 0.9,
                                  }
                                }
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/drawer.jsx or .tsx and replace with this code </p>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <DrawerCodeCustomSnippet />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/drawer' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
            <div className='flex items-center justify-center h-full border-2 border-black w-full'>
              <DrawerCodeUsageSnippet />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
