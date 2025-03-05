import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { withValidation } from "@/lib/api-middlewares/with-validation"
import { newsSchema } from "@/lib/validations/content"

export async function POST(req: Request) {
  return withValidation(newsSchema)(req, async (validatedData) => {
    try {
      const session = await auth()

      if (!session) {
        return new NextResponse("Unauthorized", { status: 401 })
      }

      const news = await db.news.create({
        data: {
          title: validatedData.title,
          content: validatedData.content,
          category: validatedData.category,
          image: validatedData.image,
          published: validatedData.published,
          authorId: session.user.id,
        },
      })

      return NextResponse.json(news)
    } catch (error) {
      return new NextResponse(null, { status: 500 })
    }
  })
}

