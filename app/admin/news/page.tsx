import { db } from "@/lib/db"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default async function NewsPage() {
  const news = await db.news.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  const columns = [
    {
      accessorKey: "title",
      header: "标题",
      cell: ({ row }) => {
        const title = row.original.title as { zh: string; en: string }
        return (
          <div>
            <div>{title.zh}</div>
            <div className="text-sm text-muted-foreground">{title.en}</div>
          </div>
        )
      },
    },
    {
      accessorKey: "category",
      header: "分类",
    },
    {
      accessorKey: "author",
      header: "作者",
      cell: ({ row }) => row.original.author.name || row.original.author.email,
    },
    {
      accessorKey: "published",
      header: "状态",
      cell: ({ row }) => (row.original.published ? "已发布" : "草稿"),
    },
    {
      accessorKey: "createdAt",
      header: "创建时间",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">新闻管理</h1>
        <Link href="/admin/news/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新建新闻
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={news} />
    </div>
  )
}

