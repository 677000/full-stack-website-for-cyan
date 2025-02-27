"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProductsPage() {
  const { t } = useLanguage()

  // Mock products data
  const products = [
    {
      id: 1,
      title: "Enterprise CMS",
      description: "A comprehensive content management system for large organizations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "software",
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Strategic consulting to help businesses adapt to the digital age.",
      image: "/placeholder.svg?height=300&width=400",
      category: "consulting",
    },
    {
      id: 3,
      title: "Web Development Masterclass",
      description: "Learn modern web development techniques from industry experts.",
      image: "/placeholder.svg?height=300&width=400",
      category: "training",
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
      title: "IT Strategy Consulting",
      description: "Expert guidance on aligning technology with business objectives.",
      image: "/placeholder.svg?height=300&width=400",
      category: "consulting",
    },
    {
      id: 6,
      title: "UX Design Workshop",
      description: "Hands-on training in user experience design principles and practices.",
      image: "/placeholder.svg?height=300&width=400",
      category: "training",
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
          <TabsTrigger value="training">{t("products.categories.training")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} t={t} />
            ))}
          </div>
        </TabsContent>

        {["software", "consulting", "training"].map((category) => (
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

function ProductCard({ product, index, t }: { product: any; index: number; t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.category}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{product.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/products/${product.id}`}>
            <Button>{t("products.viewDetails")}</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

