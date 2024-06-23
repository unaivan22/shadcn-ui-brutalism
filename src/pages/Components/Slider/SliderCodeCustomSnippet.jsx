import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const SliderCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as SliderPrimitive from "@radix-ui/react-slider"

  import { cn } from "@/lib/utils"

  const Slider = React.forwardRef(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center border-2 border-black", className)}
      {...props}>
      <SliderPrimitive.Track
        className="relative h-2 w-full grow overflow-hidden bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-black bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  ))
  Slider.displayName = SliderPrimitive.Root.displayName

  export { Slider }

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

export default SliderCodeCustomSnippet;
