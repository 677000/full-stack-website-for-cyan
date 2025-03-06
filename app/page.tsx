"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useLanguage()

  // Define features data directly in the component
  const features = [
    {
      title: t("home.features.items.0.title"),
      description: t("home.features.items.0.description"),
    },
    {
      title: t("home.features.items.1.title"),
      description: t("home.features.items.1.description"),
    },
    {
      title: t("home.features.items.2.title"),
      description: t("home.features.items.2.description"),
    },
  ]

  return (
    <div className="flex flex-col gap-12">
      {/* 英雄区域 - 添加背景视频 */}
      <section className="w-full h-[200%] md:h-[150%] lg:h-[120%] pb-4 md:py-24 lg:py-32 relative overflow-hidden">
        {/* 背景视频 */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
            {/* 备用图像，当视频无法播放时显示 */}
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </video>
          {/* 视频覆盖层，提高文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background/90 dark:from-primary/20 dark:to-background/95 z-10"></div>
        </div>
      </section>

      {/* 
        pb-4: padding-bottom: 1rem (16px)
        md:py-24: padding-top and padding-bottom: 6rem (96px) when the screen size is medium or larger
        lg:py-32: padding-top and padding-bottom: 8rem (128px) when the screen size is large or larger
      */}
      <section className="w-full pb-4 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid gap-6 lg:grid-cols lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t("home.hero.title")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("home.hero.description")}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg">{t("home.hero.cta1")}</Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    {t("home.hero.cta2")}
                  </Button>
                </Link>
              </div>
            </motion.div>
            {/* <motion.div
              className="mx-auto lg:ml-auto flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-[550px] h-[550px] bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Hero Image"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </motion.div> */}
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
                {t("home.features.title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.features.subtitle")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.features.description")}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("home.cta.title")}</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">{t("home.cta.description")}</p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                  {t("home.cta.button")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

