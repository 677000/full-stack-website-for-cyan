"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Tiptap from "@/components/editor/tiptap"
import { UploadButton } from "@/components/uploadthing"
import Image from "next/image"

const formSchema = z.object({
  title: z.object({
    zh: z.string().min(2, "标题至少2个字符"),
    en: z.string().min(2, "Title must be at least 2 characters"),
  }),
  content: z.object({
    zh: z.string().min(10, "内容至少10个字符"),
    en: z.string().min(10, "Content must be at least 10 characters"),
  }),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export default function NewNewsPage() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("zh")
  const [imageUrl, setImageUrl] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { zh: "", en: "" },
      content: { zh: "", en: "" },
      category: "",
      published: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/admin/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("提交失败")
      }

      router.push("/admin/news")
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">新建新闻</h1>
        <Button onClick={() => router.back()} variant="outline">
          返回
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="zh">中文</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                </TabsList>
                <div className="space-y-6 pt-6">
                  <TabsContent value="zh">
                    <FormField
                      control={form.control}
                      name="title.zh"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>标题</FormLabel>
                          <FormControl>
                            <Input placeholder="请输入新闻标题" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content.zh"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>内容</FormLabel>
                          <FormControl>
                            <Tiptap content={field.value} onChange={field.onChange} placeholder="请输入新闻内容..." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  <TabsContent value="en">
                    <FormField
                      control={form.control}
                      name="title.en"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter news title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content.en"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Tiptap
                              content={field.value}
                              onChange={field.onChange}
                              placeholder="Enter news content..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>分类</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择新闻分类" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="company">公司新闻</SelectItem>
                          <SelectItem value="industry">行业动态</SelectItem>
                          <SelectItem value="product">产品更新</SelectItem>
                          <SelectItem value="event">活动资讯</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">发布状态</FormLabel>
                        <div className="text-sm text-muted-foreground">是否立即发布这篇新闻？</div>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>封面图片</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            if (res?.[0]) {
                              setImageUrl(res[0].url)
                              field.onChange(res[0].url)
                            }
                          }}
                          onUploadError={(error: Error) => {
                            console.error(error)
                          }}
                        />
                        {imageUrl && (
                          <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-lg border">
                            <Image
                              src={imageUrl || "/placeholder.svg"}
                              alt="Upload preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              保存新闻
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

