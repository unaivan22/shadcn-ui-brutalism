import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const BadgeCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import * as React from "react"
  import { cva } from "class-variance-authority";

  import { cn } from "@/lib/utils"

  const badgeVariants = cva(
    "inline-flex items-center rounded-full border-2 border-black px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

  function Badge({
    className,
    variant,
    ...props
  }) {
    return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
  }

  export { Badge, badgeVariants }

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

export default BadgeCodeCustomSnippet;
