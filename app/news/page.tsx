"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function NewsPage() {
  const { t } = useLanguage()

  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "TCT Asia 2025",
      description: "ASIA'S LEADING SHOW FOR THEADDITIVE MANUFACTURINGINDUSTRYNEcC(shanghai). We are excited to invite you to TCT Asia 2025, where we will be showcasing our latest advancements in 3D scanning technology. We look forward to welcoming you at our booth 8B78 ( Location. NECC(Shanghai) 7.1H&8.1H).",
      date: "2025/03/19",
      image: "/tct.png?height=200&width=400",
      category: "Exhibition",
    },
    // {
    //   id: 2,
    //   title: "Company Expansion",
    //   description: "We're expanding our operations to new regions to better serve our global customers.",
    //   date: "2023-04-22",
    //   image: "/placeholder.svg?height=200&width=400",
    //   category: "Company",
    // },
    // {
    //   id: 3,
    //   title: "Industry Award",
    //   description: "Our team has been recognized with a prestigious industry award for innovation.",
    //   date: "2023-03-10",
    //   image: "/placeholder.svg?height=200&width=400",
    //   category: "Award",
    // },
    // {
    //   id: 4,
    //   title: "Partnership Announcement",
    //   description: "We've partnered with a leading technology provider to enhance our service offerings.",
    //   date: "2023-02-28",
    //   image: "/placeholder.svg?height=200&width=400",
    //   category: "Partnership",
    // },
  ]

  // Mock categories
  const categories = ["All", "Product", "Company", "Award", "Partnership", "Event"]

  return (
    <div className="container py-12 md:py-24">
      <motion.div
        className="space-y-2 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("news.title")}</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("news.description")}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder={t("news.searchPlaceholder")} className="pl-8" disabled />
            </div>
            <Button variant="outline" disabled>{t("common.search")}</Button>
          </div>

          <div className="grid gap-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{item.title}</CardTitle>
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{item.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/news/${item.id}`}>
                          <Button variant="link" className="px-0" disabled>
                            {t("news.readMore")} &rarr;
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("news.categories")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant={category === "All" ? "default" : "outline"} className={`cursor-not-allowed opacity-50 pointer-events-none`}>
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("news.recentPosts")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newsItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex gap-2">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={80}
                      height={60}
                      className="h-16 w-16 rounded object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

