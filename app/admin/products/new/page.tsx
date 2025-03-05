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
  description: z.object({
    zh: z.string().min(10, "描述至少10个字符"),
    en: z.string().min(10, "Description must be at least 10 characters"),
  }),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export default function NewProductPage() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("zh")
  const [imageUrl, setImageUrl] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { zh: "", en: "" },
      description: { zh: "", en: "" },
      category: "",
      published: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("提交失败")
      }

      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">新建产品</h1>
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
                          <FormLabel>产品名称</FormLabel>
                          <FormControl>
                            <Input placeholder="请输入产品名称" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description.zh"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>产品描述</FormLabel>
                          <FormControl>
                            <Tiptap content={field.value} onChange={field.onChange} placeholder="请输入产品描述..." />
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
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description.en"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>Product Description</FormLabel>
                          <FormControl>
                            <Tiptap
                              content={field.value}
                              onChange={field.onChange}
                              placeholder="Enter product description..."
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
                            <SelectValue placeholder="选择产品分类" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="software">软件解决方案</SelectItem>
                          <SelectItem value="hardware">硬件产品</SelectItem>
                          <SelectItem value="service">服务项目</SelectItem>
                          <SelectItem value="training">培训课程</SelectItem>
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
                        <div className="text-sm text-muted-foreground">是否立即发布此产品？</div>
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
                    <FormLabel>产品图片</FormLabel>
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
              保存产品
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

