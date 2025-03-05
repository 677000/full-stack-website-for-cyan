"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import { extensions } from "./extensions"
import { Toolbar } from "./toolbar"
import "./styles.css"

interface TiptapProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export default function Tiptap({ content, onChange, placeholder }: TiptapProps) {
  const editor = useEditor({
    extensions: extensions,
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className="border rounded-lg">
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

