"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const formSchema = z.object({
  title: z.object({
    zh: z.string().min(2, "标题至少2个字符"),
    en: z.string().min(2, "Title must be at least 2 characters"),
  }),
  description: z.object({
    zh: z.string().min(10, "描述至少10个字符"),
    en: z.string().min(10, "Description must be at least 10 characters"),
  }),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export default function EditProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("zh")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [loading, setLoading] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { zh: "", en: "" },
      description: { zh: "", en: "" },
      category: "",
      published: false,
    },
  })

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/admin/products/${params.id}`)
        const data = await response.json()

        form.reset({
          title: data.title,
          description: data.description,
          category: data.category,
          image: data.image,
          published: data.published,
        })

        if (data.image) {
          setImageUrl(data.image)
        }

        setLoading(false)
      } catch (error) {
        console.error(error)
        router.push("/admin/products")
      }
    }

    fetchProduct()
  }, [params.id, form, router])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`/api/admin/products/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("更新失败")
      }

      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  async function onDelete() {
    try {
      const response = await fetch(`/api/admin/products/${params.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("删除失败")
      }

      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">编辑产品</h1>
        <div className="flex items-center gap-4">
          <Button onClick={() => router.back()} variant="outline">
            返回
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">删除产品</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确认删除</AlertDialogTitle>
                <AlertDialogDescription>此操作将永久删除该产品，且无法恢复。确定要继续吗？</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>确认删除</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Form content same as new product page */}
          {/* ... */}
        </form>
      </Form>
    </div>
  )
}

