import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const ProgressCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as ProgressPrimitive from "@radix-ui/react-progress"

  import { cn } from "@/lib/utils"

  const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]", className)}
      {...props}>
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary border-r-2 border-black transition-all"
        
    </ProgressPrimitive.Root>
  ))
  Progress.displayName = ProgressPrimitive.Root.displayName

  export { Progress }

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

export default ProgressCodeCustomSnippet;
