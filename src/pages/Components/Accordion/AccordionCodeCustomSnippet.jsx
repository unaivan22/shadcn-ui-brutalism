import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const AccordionCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as AccordionPrimitive from "@radix-ui/react-accordion"
  import { ChevronDown } from "lucide-react"

  import { cn } from "@/lib/utils"

  const Accordion = AccordionPrimitive.Root

  const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black px-4", className)} {...props} />
  ))
  AccordionItem.displayName = "AccordionItem"

  const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-bold text-lg transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}>
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ))
  AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

  const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="border-t-2 border-black pl-4 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}>
      <div className={cn("pb-4 pt-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  ))

  AccordionContent.displayName = AccordionPrimitive.Content.displayName

  export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }


  `;

  return (
    <div className="p-2 bg-gray-100 w-full text-xs">
      <pre className="whitespace-pre-wrap bg-yellow-200 p-4 rounded-lg border border-gray-300">
        {code}
      </pre>
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <Button className="mt-2">
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default AccordionCodeCustomSnippet;
