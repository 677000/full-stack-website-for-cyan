import { NextResponse } from "next/server"
import type { ZodSchema } from "zod"

export function withValidation(schema: ZodSchema) {
  return async function validate(req: Request, callback: (validatedData: any) => Promise<NextResponse>) {
    try {
      const json = await req.json()
      const data = schema.parse(json)
      return callback(data)
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "验证失败",
          errors: error.errors,
        }),
        { status: 400 },
      )
    }
  }
}

