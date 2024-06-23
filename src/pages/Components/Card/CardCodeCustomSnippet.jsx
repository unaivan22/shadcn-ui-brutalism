import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const CardCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import * as React from "react"

  import { cn } from "@/lib/utils"

  const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-sm border-2 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] border-black bg-card text-card-foreground", className)}
      {...props} />
  ))
  Card.displayName = "Card"

  const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props} />
  ))
  CardHeader.displayName = "CardHeader"

  const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-bold leading-none tracking-tight", className)}
      {...props} />
  ))
  CardTitle.displayName = "CardTitle"

  const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />
  ))
  CardDescription.displayName = "CardDescription"

  const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ))
  CardContent.displayName = "CardContent"

  const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props} />
  ))
  CardFooter.displayName = "CardFooter"

  export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


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

export default CardCodeCustomSnippet;
