import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import * as z from "zod"

const patchNewsSchema = z.object({
  title: z.object({
    zh: z.string().min(2),
    en: z.string().min(2),
  }),
  content: z.object({
    zh: z.string().min(10),
    en: z.string().min(10),
  }),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
})

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const news = await db.news.findUnique({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json(news)
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await req.json()
    const body = patchNewsSchema.parse(json)

    const news = await db.news.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        content: body.content,
        category: body.category,
        image: body.image,
        published: body.published,
      },
    })

    return NextResponse.json(news)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 })
    }

    return new NextResponse(null, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await db.news.delete({
      where: {
        id: params.id,
      },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

