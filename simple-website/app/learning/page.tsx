"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, BookOpen, FileText, FolderArchive } from "lucide-react"

export default function LearningPage() {
  const { t } = useLanguage()

  // Mock learning resources data
  const resources = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
      image: "/placeholder.svg?height=200&width=400",
      category: "tutorials",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Responsive Design Best Practices",
      description: "A comprehensive guide to creating websites that work well on all devices.",
      image: "/placeholder.svg?height=200&width=400",
      category: "guides",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "UI/UX Design Resources",
      description: "A collection of tools, templates, and resources for designing better user interfaces.",
      image: "/placeholder.svg?height=200&width=400",
      category: "resources",
      icon: <FolderArchive className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into advanced JavaScript topics like closures, promises, and async/await.",
      image: "/placeholder.svg?height=200&width=400",
      category: "tutorials",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "SEO Optimization Guide",
      description: "Learn how to optimize your website for search engines and improve visibility.",
      image: "/placeholder.svg?height=200&width=400",
      category: "guides",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "Free Stock Photos Collection",
      description: "A curated list of websites offering high-quality free stock photos for your projects.",
      image: "/placeholder.svg?height=200&width=400",
      category: "resources",
      icon: <FolderArchive className="h-5 w-5" />,
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("learning.title")}</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("learning.description")}</p>
      </motion.div>

      <div className="flex items-center gap-2 mb-8 max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder={t("learning.searchPlaceholder")} className="pl-8" />
        </div>
        <Button variant="outline">{t("common.search")}</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
          <TabsTrigger value="all">{t("products.categories.all")}</TabsTrigger>
          <TabsTrigger value="tutorials">{t("learning.categories.tutorials")}</TabsTrigger>
          <TabsTrigger value="guides">{t("learning.categories.guides")}</TabsTrigger>
          <TabsTrigger value="resources">{t("learning.categories.resources")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} t={t} />
            ))}
          </div>
        </TabsContent>

        {["tutorials", "guides", "resources"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((resource) => resource.category === category)
                .map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} t={t} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function ResourceCard({ resource, index, t }: { resource: any; index: number; t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            {resource.icon}
            <CardTitle>{resource.title}</CardTitle>
          </div>
          <CardDescription>{t(`learning.categories.${resource.category}`)}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{resource.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/learning/${resource.id}`}>
            <Button variant="outline">{t("learning.viewResource")}</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

