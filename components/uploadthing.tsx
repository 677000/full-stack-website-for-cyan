import React from "react"
;('"use client')

import { useUploadThing } from "@uploadthing/react"
import { uploadRouter } from "@/lib/uploadthing"
import { Button } from "@/components/ui/button"

interface UploadButtonProps {
  endpoint: keyof typeof uploadRouter
  onClientUploadComplete?: (files: any[]) => void
  onUploadError?: (error: Error) => void
  children?: React.ReactNode
}

export const UploadButton = ({ endpoint, onClientUploadComplete, onUploadError, children }: UploadButtonProps) => {
  const { startUpload, files, uploadErrors } = useUploadThing(uploadRouter, {
    onClientUploadComplete,
    onUploadError,
  })

  React.useEffect(() => {
    if (uploadErrors.length > 0) {
      console.error("Upload errors:", uploadErrors)
    }
  }, [uploadErrors])

  return <Button onClick={() => startUpload(endpoint)}>{children}</Button>
}

