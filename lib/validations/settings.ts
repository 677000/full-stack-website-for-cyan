import * as z from "zod"

export const settingsSchema = z.object({
  siteTitle: z.object({
    zh: z.string().min(2, "网站标题至少2个字符").max(50, "网站标题不能超过50个字符"),
    en: z.string().min(2, "Site title must be at least 2 characters").max(50, "Site title cannot exceed 50 characters"),
  }),
  siteDescription: z.object({
    zh: z.string().min(10, "网站描述至少10个字符").max(200, "网站描述不能超过200个字符"),
    en: z
      .string()
      .min(10, "Site description must be at least 10 characters")
      .max(200, "Site description cannot exceed 200 characters"),
  }),
  contactEmail: z.string().min(1, "联系邮箱不能为空").email("请输入有效的邮箱地址"),
  contactPhone: z
    .string()
    .min(5, "联系电话至少5个字符")
    .max(20, "联系电话不能超过20个字符")
    .regex(/^[0-9+\-\s()]*$/, "请输入有效的电话号码"),
  contactAddress: z.object({
    zh: z.string().min(5, "地址至少5个字符").max(200, "地址不能超过200个字符"),
    en: z.string().min(5, "Address must be at least 5 characters").max(200, "Address cannot exceed 200 characters"),
  }),
})

