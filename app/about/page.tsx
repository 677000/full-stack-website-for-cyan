"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import { motion } from "framer-motion"

export default function About() {
  const { t } = useLanguage()

  // Define features data directly in the component
  const features = [
    {
      title: t("about.features.items.0.title"),
      description: t("about.features.items.0.description"),
    },
    {
      title: t("about.features.items.1.title"),
      description: t("about.features.items.1.description"),
    },
    {
      title: t("about.features.items.2.title"),
      description: t("about.features.items.2.description"),
    },
  ]

  return (
    <div className="flex flex-col gap-12">
      {/* 英雄区域 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t("about.hero.title")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("about.hero.description")}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg">{t("about.hero.cta1")}</Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    {t("about.hero.cta2")}
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto lg:ml-auto flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/me-top-half.jpg?height=550&width=550"
                alt="Hero Image"
                width={550}
                height={550}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特性区域 */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {t("about.features.title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("about.features.subtitle")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("about.features.description")}
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="grid gap-2 p-6 border rounded-lg shadow-sm hover:shadow-md transition-all bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 号召行动区域 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("about.cta.title")}</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">{t("about.cta.description")}</p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                  {t("about.cta.button")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

