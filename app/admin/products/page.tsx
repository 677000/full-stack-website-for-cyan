import { db } from "@/lib/db"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default async function ProductsPage() {
  const products = await db.product.findMany({
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
      accessorKey: "image",
      header: "图片",
      cell: ({ row }) => {
        const image = row.original.image
        return image ? (
          <div className="relative w-20 h-20">
            <Image
              src={image || "/placeholder.svg"}
              alt={row.original.title.zh}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-muted rounded-md" />
        )
      },
    },
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
      cell: ({ row }) => <Badge variant="outline">{row.original.category}</Badge>,
    },
    {
      accessorKey: "author",
      header: "创建者",
      cell: ({ row }) => row.original.author.name || row.original.author.email,
    },
    {
      accessorKey: "published",
      header: "状态",
      cell: ({ row }) => (
        <Badge variant={row.original.published ? "default" : "secondary"}>
          {row.original.published ? "已发布" : "草稿"}
        </Badge>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "创建时间",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original.id
        return (
          <div className="flex items-center gap-2">
            <Link href={`/admin/products/${id}`}>
              <Button variant="outline" size="sm">
                编辑
              </Button>
            </Link>
          </div>
        )
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">产品管理</h1>
        <Link href="/admin/products/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新建产品
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={products} />
    </div>
  )
}

