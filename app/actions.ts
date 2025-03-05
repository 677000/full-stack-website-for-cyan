"use server"

import { redirect } from "next/navigation"

export async function sendMessage(formData: FormData) {
  // 在实际应用中，这里会处理表单提交，例如发送电子邮件或保存到数据库
  // 这里只是模拟处理过程

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  console.log("收到联系表单提交:", { name, email, message })

  // 模拟处理延迟
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // 重定向到感谢页面或首页
  redirect("/?message=success")
}

