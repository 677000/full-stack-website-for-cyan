import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import * as z from "zod"

const postCreateSchema = z.object({
  title: z.object({
    zh: z.string().min(2),
    en: z.string().min(2),
  }),
  description: z.object({
    zh: z.string().min(10),
    en: z.string().min(10),
  }),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await req.json()
    const body = postCreateSchema.parse(json)

    const product = await db.product.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        image: body.image,
        published: body.published,
        authorId: session.user.id,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 })
    }

    return new NextResponse(null, { status: 500 })
  }
}

