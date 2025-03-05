"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Newspaper, Package, BookOpen, Briefcase, Users, Settings } from "lucide-react"

const navigation = [
  { name: "仪表盘", href: "/admin", icon: LayoutDashboard },
  { name: "新闻管理", href: "/admin/news", icon: Newspaper },
  { name: "产品管理", href: "/admin/products", icon: Package },
  { name: "学习资源", href: "/admin/resources", icon: BookOpen },
  { name: "案例展示", href: "/admin/showcases", icon: Briefcase },
  { name: "用户管理", href: "/admin/users", icon: Users },
  { name: "系统设置", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-muted/40 min-h-[calc(100vh-4rem)]">
      <nav className="space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

