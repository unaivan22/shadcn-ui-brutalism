import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const ProgressCodeUsageSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"

  import { Progress } from "@/components/ui/progress"

  export function ProgressDemo() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
  }

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

export default ProgressCodeUsageSnippet;
