import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const CheckboxCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
  import { Check } from "lucide-react"

  import { cn } from "@/lib/utils"

  const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-5 w-5 shrink-0 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
        <Check className="h-5 w-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ))
  Checkbox.displayName = CheckboxPrimitive.Root.displayName

  export { Checkbox }

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

export default CheckboxCodeCustomSnippet;
