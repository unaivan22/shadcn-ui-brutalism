import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const InputCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import * as React from "react"

  import { cn } from "@/lib/utils"

  const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
      (<input
        type={type}
        className={cn(
          "flex h-10 w-full border-2 border-black bg-background px-3 py-2 focus:bg-primary text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
          className
        )}
        ref={ref}
        {...props} />)
    );
  })
  Input.displayName = "Input"

  export { Input }

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

export default InputCodeCustomSnippet;
