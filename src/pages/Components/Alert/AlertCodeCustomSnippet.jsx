import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const AlertCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import * as React from "react"
  import { cva } from "class-variance-authority";

  import { cn } from "@/lib/utils"

  const alertVariants = cva(
    "relative w-full rounded-lg border border-2 shadow-[6px_6px_0px_rgba(0,0,0,1)] border-black p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive:
            "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

  const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props} />
  ))
  Alert.displayName = "Alert"

  const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-bold text-xl leading-none tracking-tight", className)}
      {...props} />
  ))
  AlertTitle.displayName = "AlertTitle"

  const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props} />
  ))
  AlertDescription.displayName = "AlertDescription"

  export { Alert, AlertTitle, AlertDescription }

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

export default AlertCodeCustomSnippet;
