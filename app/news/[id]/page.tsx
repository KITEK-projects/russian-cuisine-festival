import { Header } from "@/components/header"
import AutoHeight from "embla-carousel-auto-height"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { articles } from "@/public/articles"
import { Img } from "@/components/ui/img"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useMemo } from "react"

export async function generateStaticParams() {
    return articles.map((id) => ({
        id: id.id,
    }))
}

export default async function NewsArticlePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const article = articles.find((item) => item.id === id)
    const otherArticles = articles.filter((item) => item.id !== id).slice(0, 2)

    if (!article) {
        notFound()
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Back Button */}
                <section className="border-b border-border bg-muted/30 py-4">
                    <div className="container mx-auto px-4 md:px-6">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Вернуться к новостям
                        </Link>
                    </div>
                </section>

                {/* Article Header */}
                <section className="border-b border-border py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                {article.date && (
                                    <Badge
                                        variant="secondary"
                                        className="bg-secondary text-secondary-foreground"
                                    >
                                        <Calendar className="mr-1 h-4 w-4" />
                                        {article.date}
                                    </Badge>
                                )}
                                {article.region && (
                                    <Badge
                                        variant="outline"
                                        className="border-primary text-primary"
                                    >
                                        <MapPin className="mr-1 h-4 w-4" />
                                        {article.region}
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-balance text-2xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                                {article.title}
                            </h1>
                            <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Article Image */}
                {article.images && (
                    <section className="border-b border-border">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="mx-auto max-w-4xl">
                                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                    <Img
                                        src={article.images[0]}
                                        alt={article.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Article Content */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <article
                                className="article prose prose-lg max-w-none leading-relaxed text-foreground prose-headings:font-serif prose-headings:text-foreground prose-h2:mt-8 prose-h2:text-3xl prose-h2:font-bold prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground"
                                dangerouslySetInnerHTML={{
                                    __html: article.content,
                                }}
                            />
                            {article.images && (
                                <Carousel
                                    opts={{ loop: true }}
                                    className="mt-8 w-full relative"
                                >
                                    <CarouselContent>
                                        {article.images
                                            .slice(1)
                                            .map((el, index) => (
                                                <CarouselItem key={index}>
                                                    <div className="relative w-full flex h-full justify-center">
                                                        <Img
                                                            src={el}
                                                            alt={`Image ${index + 1}`}
                                                            className="max-h-[70vh] w-auto object-contain"
                                                        />
                                                    </div>
                                                    {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-4xl font-semibold">
                                                        {index + 1}
                                                    </span>
                                                </CardContent> */}
                                                </CarouselItem>
                                            ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            )}
                        </div>
                    </div>
                </section>

                {/* Related News */}
                <section className="border-t border-border bg-muted/30 py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        {otherArticles.length > 0 && (
                            <div className="mx-auto max-w-4xl">
                                <h2 className="mb-8 text-3xl font-bold text-foreground">
                                    Другие новости
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {otherArticles.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/news/${item.id}`}
                                            className="group overflow-hidden rounded-lg border-2 border-border bg-card transition-shadow hover:shadow-lg"
                                        >
                                            <div className="aspect-video overflow-hidden bg-muted">
                                                {item.images && (
                                                    <Img
                                                        src={item.images[0]}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <div className="mb-3 flex flex-wrap items-center gap-2">
                                                    {item.date && (
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-secondary text-secondary-foreground"
                                                        >
                                                            <Calendar className="mr-1 h-3 w-3" />
                                                            {item.date}
                                                        </Badge>
                                                    )}
                                                    {item.region && (
                                                        <Badge
                                                            variant="outline"
                                                            className="border-primary text-primary"
                                                        >
                                                            <MapPin className="mr-1 h-3 w-3" />
                                                            {item.region}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <h3 className="text-balance text-xl font-bold leading-tight text-foreground">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
