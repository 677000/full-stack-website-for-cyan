import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"

export default async function AdminDashboard() {
  // 获取统计数据
  const stats = await Promise.all([db.news.count(), db.product.count(), db.resource.count(), db.showcase.count()])

  const [newsCount, productCount, resourceCount, showcaseCount] = stats

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">仪表盘</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">新闻总数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newsCount}</div>
            <p className="text-xs text-muted-foreground">已发布的新闻文章</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">产品总数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productCount}</div>
            <p className="text-xs text-muted-foreground">已发布的产品</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">学习资源</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resourceCount}</div>
            <p className="text-xs text-muted-foreground">发布的学习资源</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">案例展示</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{showcaseCount}</div>
            <p className="text-xs text-muted-foreground">已发布的案例</p>
          </CardContent>
        </Card>
      </div>

      {/* 可以添加更多仪表盘内容，如最近活动、图表等 */}
    </div>
  )
}

