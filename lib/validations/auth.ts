import * as z from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "邮箱不能为空").email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少6个字符").max(50, "密码不能超过50个字符"),
})

export const userSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符").max(50, "姓名不能超过50个字符"),
  email: z.string().min(1, "邮箱不能为空").email("请输入有效的邮箱地址"),
  password: z
    .string()
    .min(6, "密码至少6个字符")
    .max(50, "密码不能超过50个字符")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "密码必须包含大小写字母和数字"),
  role: z.enum(["ADMIN", "EDITOR"], {
    required_error: "请选择用户角色",
  }),
})

