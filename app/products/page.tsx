"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/ProductCard"

export default function ProductsPage() {
  const { t } = useLanguage()

  // Mock products data
  const products = [
    {
      id: 1,
      title: "模块化展示产品",
      description: "比如不同配置的扫描仪",
      image: "/placeholder.svg?height=300&width=400",
      category: "software",
    },
    {
      id: 2,
      title: "增值服务",
      description: "增值服务如SDK开发、认证支持、数据分析、技术赋能包、数据驱动选型工具等。",
      image: "/placeholder.svg?height=300&width=400",
      category: "consulting",
    },
    {
      id: 3,
      title: "针对欧美市场的定制化能力",
      description: "Learn modern web development techniques from industry experts.",
      image: "/placeholder.svg?height=300&width=400",
      category: "consulting",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A scalable solution for online retail businesses of all sizes.",
      image: "/placeholder.svg?height=300&width=400",
      category: "software",
    },
    {
      id: 5,
      title: "培训课程",
      description: "Expert guidance on aligning technology with business objectives.",
      image: "/placeholder.svg?height=300&width=400",
      category: "consulting",
    },
    {
      id: 6,
      title: "用数据和结果说话",
      description: "某客户通过使用他的方案节省了多少成本，提高了多少效率。案例要分市场，比如欧美、东南亚、中东的不同案例，显示适应能力。",
      image: "/placeholder.svg?height=300&width=400",
      category: "case",
    },
    {
      id: 7,
      title: "故障排查案例",
      description: "增进专业形象，提高客户满意度。",
      image: "/placeholder.svg?height=300&width=400",
      category: "case",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <motion.div
        className="space-y-2 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("products.title")}</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("products.description")}</p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">{t("products.categories.all")}</TabsTrigger>
          <TabsTrigger value="software">{t("products.categories.software")}</TabsTrigger>
          <TabsTrigger value="consulting">{t("products.categories.consulting")}</TabsTrigger>
          <TabsTrigger value="case">{t("products.categories.case")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} t={t} />
            ))}
          </div>
        </TabsContent>

        {["software", "consulting", "case"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} t={t} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

