import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const SliderCodeUsageSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  import { cn } from "@/lib/utils"
  import { Slider } from "@/components/ui/slider"

  type SliderProps = React.ComponentProps<typeof Slider>

  export function SliderDemo({ className, ...props }: SliderProps) {
    return (
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
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

export default SliderCodeUsageSnippet;
