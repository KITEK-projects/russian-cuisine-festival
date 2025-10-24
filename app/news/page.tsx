import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { articles } from "@/public/articles"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-background via-secondary/20 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Новости фестиваля
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Следите за актуальными событиями и мероприятиями Всероссийского фестиваля русской кухни
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group overflow-hidden rounded-lg border-2 border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={`/.jpg?height=300&width=400&query=${item.image}`}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.date}
                      </Badge>
                      <Badge variant="outline" className="border-primary text-primary">
                        <MapPin className="mr-1 h-3 w-3" />
                        {item.region}
                      </Badge>
                    </div>
                    <h3 className="text-balance text-xl font-bold leading-tight text-foreground">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">Подпишитесь на новости</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Получайте актуальную информацию о мероприятиях фестиваля
              </p>
              <form className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 rounded-lg border-2 border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
