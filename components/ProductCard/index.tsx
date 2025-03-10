import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ProductCard({ product, index, t }: { product: any; index: number; t: any }) {
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
            <Link 
                href={`/products/${product.id}`}
                className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${product.disabled ? "opacity-50 pointer-events-none" : undefined}`}
            >
              <Button>{t("products.viewDetails")}</Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }