import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const RadioGroupCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
  import { Circle } from "lucide-react"

  import { cn } from "@/lib/utils"

  const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (<RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />);
  })
  RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

  const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return (
      (<RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-6 w-6 rounded-full border-2 border-black text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-[2px_2px_0px_rgba(0,0,0,1)]",
          className
        )}
        {...props}>
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-4 w-4 fill-primary text-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>)
    );
  })
  RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

  export { RadioGroup, RadioGroupItem }


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

export default RadioGroupCodeCustomSnippet;
