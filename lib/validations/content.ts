import * as z from "zod"

const multiLangString = z.object({
  zh: z.string().min(1, "中文内容不能为空"),
  en: z.string().min(1, "English content is required"),
})

export const newsSchema = z.object({
  title: multiLangString.extend({
    zh: z.string().min(2, "标题至少2个字符").max(100, "标题不能超过100个字符"),
    en: z.string().min(2, "Title must be at least 2 characters").max(100, "Title cannot exceed 100 characters"),
  }),
  content: multiLangString.extend({
    zh: z.string().min(10, "内容至少10个字符"),
    en: z.string().min(10, "Content must be at least 10 characters"),
  }),
  category: z.string({
    required_error: "请选择新闻分类",
  }),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export const productSchema = z.object({
  title: multiLangString.extend({
    zh: z.string().min(2, "产品名称至少2个字符").max(100, "产品名称不能超过100个字符"),
    en: z
      .string()
      .min(2, "Product name must be at least 2 characters")
      .max(100, "Product name cannot exceed 100 characters"),
  }),
  description: multiLangString.extend({
    zh: z.string().min(10, "描述至少10个字符"),
    en: z.string().min(10, "Description must be at least 10 characters"),
  }),
  category: z.string({
    required_error: "请选择产品分类",
  }),
  price: z
    .number({
      required_error: "请输入产品价格",
    })
    .min(0, "价格不能为负数"),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export const resourceSchema = z.object({
  title: multiLangString.extend({
    zh: z.string().min(2, "标题至少2个字符").max(100, "标题不能超过100个字符"),
    en: z.string().min(2, "Title must be at least 2 characters").max(100, "Title cannot exceed 100 characters"),
  }),
  content: multiLangString.extend({
    zh: z.string().min(10, "内容至少10个字符"),
    en: z.string().min(10, "Content must be at least 10 characters"),
  }),
  type: z.enum(["tutorial", "guide", "resource"], {
    required_error: "请选择资源类型",
  }),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export const showcaseSchema = z.object({
  title: multiLangString.extend({
    zh: z.string().min(2, "标题至少2个字符").max(100, "标题不能超过100个字符"),
    en: z.string().min(2, "Title must be at least 2 characters").max(100, "Title cannot exceed 100 characters"),
  }),
  description: multiLangString.extend({
    zh: z.string().min(10, "描述至少10个字符"),
    en: z.string().min(10, "Description must be at least 10 characters"),
  }),
  category: z.string({
    required_error: "请选择案例分类",
  }),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

