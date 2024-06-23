import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const InputOTPCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import { OTPInput, OTPInputContext } from "input-otp"
  import { Dot } from "lucide-react"

  import { cn } from "@/lib/utils"

  const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props} />
  ))
  InputOTP.displayName = "InputOTP"

  const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
  ))
  InputOTPGroup.displayName = "InputOTPGroup"

  const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
      (<div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center border-2 border-black text-sm transition-all bg-primary shadow-[2px_2px_0px_rgba(0,0,0,1)]",
          isActive && "z-10 ring-2 ring-ring ring-offset-background",
          className
        )}
        {...props}>
        {char}
        {hasFakeCaret && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>)
    );
  })
  InputOTPSlot.displayName = "InputOTPSlot"

  const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ))
  InputOTPSeparator.displayName = "InputOTPSeparator"

  export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

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

export default InputOTPCodeCustomSnippet;
