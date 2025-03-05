"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function AdminHeader() {
  const { data: session } = useSession()

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">后台管理系统</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{session?.user?.email}</span>
          <Button variant="outline" onClick={() => signOut({ callbackUrl: "/admin/login" })}>
            退出登录
          </Button>
        </div>
      </div>
    </header>
  )
}

