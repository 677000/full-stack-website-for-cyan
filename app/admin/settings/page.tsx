"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  siteTitle: z.object({
    zh: z.string().min(2, "网站标题至少2个字符"),
    en: z.string().min(2, "Site title must be at least 2 characters"),
  }),
  siteDescription: z.object({
    zh: z.string().min(10, "网站描述至少10个字符"),
    en: z.string().min(10, "Site description must be at least 10 characters"),
  }),
  contactEmail: z.string().email("请输入有效的邮箱地址"),
  contactPhone: z.string().min(5, "请输入有效的电话号码"),
  contactAddress: z.object({
    zh: z.string().min(5, "地址至少5个字符"),
    en: z.string().min(5, "Address must be at least 5 characters"),
  }),
})

export default function SettingsPage() {
  const [selectedTab, setSelectedTab] = useState("zh")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      siteTitle: { zh: "", en: "" },
      siteDescription: { zh: "", en: "" },
      contactEmail: "",
      contactPhone: "",
      contactAddress: { zh: "", en: "" },
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("保存失败")
      }

      setSuccess(true)
      setError(null)

      // 3秒后隐藏成功提示
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      setError("保存设置失败，请重试")
      setSuccess(false)
      console.error(error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">系统设置</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>基本信息</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="zh">中文</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                </TabsList>
                <div className="space-y-6 pt-6">
                  <TabsContent value="zh">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="siteTitle.zh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>网站标题</FormLabel>
                            <FormControl>
                              <Input placeholder="请输入网站标题" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="siteDescription.zh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>网站描述</FormLabel>
                            <FormControl>
                              <Textarea placeholder="请输入网站描述" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactAddress.zh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>联系地址</FormLabel>
                            <FormControl>
                              <Input placeholder="请输入联系地址" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="en">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="siteTitle.en"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Site Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter site title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="siteDescription.en"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Site Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter site description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactAddress.en"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>联系方式</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>联系邮箱</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="请输入联系邮箱" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>联系电话</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入联系电话" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {success && (
            <Alert>
              <AlertDescription>设置保存成功！</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              保存设置
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

