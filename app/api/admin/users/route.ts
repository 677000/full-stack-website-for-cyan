import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { withValidation } from "@/lib/api-middlewares/with-validation"
import { userSchema } from "@/lib/validations/auth"

export async function POST(req: Request) {
  return withValidation(userSchema)(req, async (validatedData) => {
    try {
      const session = await auth()

      if (!session || session.user.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 })
      }

      const hashedPassword = await hash(validatedData.password, 12)

      const user = await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          password: hashedPassword,
          role: validatedData.role,
        },
      })

      return NextResponse.json(user)
    } catch (error: any) {
      if (error.code === "P2002") {
        return new NextResponse(
          JSON.stringify({
            status: "error",
            message: "邮箱已被使用",
          }),
          { status: 400 },
        )
      }

      return new NextResponse(null, { status: 500 })
    }
  })
}

