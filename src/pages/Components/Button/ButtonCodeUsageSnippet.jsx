import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const ButtonCodeUsageSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import { Button } from "@/components/ui/button"

  export function ButtonDemo() {
    return(
    <div className='flex flex-wrap gap-4 p-6'>
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="rounded">Rounded</Button>
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

export default ButtonCodeUsageSnippet;
