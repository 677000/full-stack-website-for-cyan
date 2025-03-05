"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function ShowcasePage() {
  const { t } = useLanguage()

  // Mock showcase data
  const showcases = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      description: "A complete redesign of an e-commerce platform resulting in 40% increase in conversions.",
      image: "/placeholder.svg?height=300&width=500",
      category: "webDevelopment",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking application for a leading financial institution.",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobileApps",
    },
    {
      id: 3,
      title: "Brand Identity Refresh",
      description: "A comprehensive brand refresh including logo, color palette, and marketing materials.",
      image: "/placeholder.svg?height=300&width=500",
      category: "design",
    },
    {
      id: 4,
      title: "Digital Transformation Strategy",
      description: "Strategic consulting for a manufacturing company's digital transformation journey.",
      image: "/placeholder.svg?height=300&width=500",
      category: "consulting",
    },
    {
      id: 5,
      title: "Corporate Website Development",
      description: "A modern, responsive website for a multinational corporation with multilingual support.",
      image: "/placeholder.svg?height=300&width=500",
      category: "webDevelopment",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobileApps",
    },
  ]

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Working with this team was a game-changer for our business. They delivered beyond our expectations.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GlobalBrand",
      content: "The attention to detail and commitment to quality was impressive. Highly recommended!",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CTO, StartupInnovate",
      content: "Their technical expertise and innovative approach helped us solve complex challenges.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("showcase.title")}</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("showcase.description")}</p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
          <TabsTrigger value="all">{t("showcase.categories.all")}</TabsTrigger>
          <TabsTrigger value="webDevelopment">{t("showcase.categories.webDevelopment")}</TabsTrigger>
          <TabsTrigger value="mobileApps">{t("showcase.categories.mobileApps")}</TabsTrigger>
          <TabsTrigger value="design">{t("showcase.categories.design")}</TabsTrigger>
          <TabsTrigger value="consulting">{t("showcase.categories.consulting")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcases.map((showcase, index) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} index={index} t={t} />
            ))}
          </div>
        </TabsContent>

        {["webDevelopment", "mobileApps", "design", "consulting"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcases
                .filter((showcase) => showcase.category === category)
                .map((showcase, index) => (
                  <ShowcaseCard key={showcase.id} showcase={showcase} index={index} t={t} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mt-24">
        <motion.div
          className="space-y-2 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t("showcase.clientSays")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ShowcaseCard({ showcase, index, t }: { showcase: any; index: number; t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image src={showcase.image || "/placeholder.svg"} alt={showcase.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{showcase.title}</CardTitle>
          <CardDescription>{t(`showcase.categories.${showcase.category}`)}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{showcase.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/showcase/${showcase.id}`}>
            <Button>{t("showcase.viewCase")}</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

