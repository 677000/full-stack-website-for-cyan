import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { redirect } from "next/navigation"

export default async function UsersPage() {
  const session = await auth()

  if (session?.user?.role !== "ADMIN") {
    redirect("/admin")
  }

  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  const columns = [
    {
      accessorKey: "name",
      header: "姓名",
    },
    {
      accessorKey: "email",
      header: "邮箱",
    },
    {
      accessorKey: "role",
      header: "角色",
      cell: ({ row }) => (row.original.role === "ADMIN" ? "管理员" : "编辑"),
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
        <h1 className="text-3xl font-bold">用户管理</h1>
        <Link href="/admin/users/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新建用户
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  )
}

