import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import CodeBlock from "@tiptap/extension-code-block"
import Underline from "@tiptap/extension-underline"

export const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Image.configure({
    allowBase64: true,
    HTMLAttributes: {
      class: "rounded-lg border",
    },
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-primary underline underline-offset-4 hover:text-primary/80",
    },
  }),
  Placeholder.configure({
    placeholder: "开始编写内容...",
  }),
  Table.configure({
    resizable: true,
    HTMLAttributes: {
      class: "border-collapse table-auto w-full",
    },
  }),
  TableRow.configure({
    HTMLAttributes: {
      class: "border-b border-muted",
    },
  }),
  TableCell.configure({
    HTMLAttributes: {
      class: "border border-muted p-2",
    },
  }),
  TableHeader.configure({
    HTMLAttributes: {
      class: "border border-muted bg-muted p-2",
    },
  }),
  CodeBlock.configure({
    HTMLAttributes: {
      class: "rounded-lg bg-muted p-4 font-mono",
    },
  }),
  Underline,
]

