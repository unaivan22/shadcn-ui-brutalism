import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const TabsCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as SwitchPrimitives from "@radix-ui/react-switch"

  import { cn } from "@/lib/utils"

  const Switch = React.forwardRef(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:shadow-[2px_2px_0px_rgba(0,0,0,1)] data-[state=unchecked]:bg-stone-400 border-2 border-black px-1",
        className
      )}
      {...props}
      ref={ref}>
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] "
        )} />
    </SwitchPrimitives.Root>
  ))
  Switch.displayName = SwitchPrimitives.Root.displayName

  export { Switch }

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

export default TabsCodeCustomSnippet;
