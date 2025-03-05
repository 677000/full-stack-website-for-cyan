import * as z from "zod"

export const imageSchema = z.object({
  file: z
    .any()
    .refine((file) => file != null, "请选择文件")
    .refine((file) => file?.size <= 4 * 1024 * 1024, "文件大小不能超过4MB")
    .refine((file) => ["image/jpeg", "image/png", "image/gif"].includes(file?.type), "只支持 JPG、PNG、GIF 格式的图片"),
})

export const fileSchema = z.object({
  file: z
    .any()
    .refine((file) => file != null, "请选择文件")
    .refine((file) => file?.size <= 10 * 1024 * 1024, "文件大小不能超过10MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file?.type),
      "只支持 PDF、DOC、DOCX 格式的文件",
    ),
})

