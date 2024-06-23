import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const InputCodeUsageSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import { Input } from "@/components/ui/input"

  export function InputDemo() {
    return <Input type="email" placeholder="Email" />
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

export default InputCodeUsageSnippet;
