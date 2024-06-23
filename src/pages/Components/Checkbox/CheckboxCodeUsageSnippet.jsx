import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const CheckboxCodeUsageSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import { Checkbox } from "@/components/ui/checkbox"

  export function CheckboxDemo() {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    )
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

export default CheckboxCodeUsageSnippet;
