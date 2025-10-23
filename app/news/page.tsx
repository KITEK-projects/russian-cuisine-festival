import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const newsItems = [
    {
        id: 1,
        title: "Открытие фестиваля в Москве",
        date: "4 ноября 2025",
        region: "Москва",
        excerpt:
            "Торжественное открытие Всероссийского фестиваля русской кухни состоится на Красной площади. В программе: выступления известных шеф-поваров, дегустация традиционных блюд и мастер-классы.",
        image: "moscow+red+square+festival+russian+cuisine",
    },
    {
        id: 2,
        title: "Региональные мероприятия стартуют по всей России",
        date: "10 ноября 2025",
        region: "Все регионы",
        excerpt:
            "В 85 регионах России начинаются региональные этапы фестиваля. Каждый регион представит свои уникальные традиционные блюда и кулинарные традиции.",
        image: "russian+regions+traditional+food+festival",
    },
    {
        id: 3,
        title: "Конкурс молодых поваров",
        date: "15 ноября 2025",
        region: "Санкт-Петербург",
        excerpt:
            "В Санкт-Петербурге пройдёт конкурс молодых поваров на лучшее приготовление традиционных русских блюд. Победители получат возможность стажировки в лучших ресторанах страны.",
        image: "young+chefs+cooking+competition+russian+cuisine",
    },
    {
        id: 4,
        title: "Мастер-класс по выпечке караваев",
        date: "18 ноября 2025",
        region: "Казань",
        excerpt:
            "Известные мастера хлебопечения проведут мастер-класс по традиционной выпечке караваев. Участники узнают секреты приготовления этого символа русского гостеприимства.",
        image: "traditional+russian+bread+baking+masterclass",
    },
    {
        id: 5,
        title: "Гастрономический тур по Золотому кольцу",
        date: "22 ноября 2025",
        region: "Владимир, Суздаль",
        excerpt:
            "Специальный гастрономический тур познакомит участников с кулинарными традициями городов Золотого кольца. В программе: посещение исторических трактиров и дегустация местных блюд.",
        image: "golden+ring+russia+traditional+restaurant",
    },
    {
        id: 6,
        title: "Научная конференция о русской кухне",
        date: "25 ноября 2025",
        region: "Москва",
        excerpt:
            "Историки кулинарии, этнографы и шеф-повара соберутся на конференции, посвящённой истории и современности русской кухни. Будут представлены результаты исследований традиционных рецептов.",
        image: "culinary+conference+russian+cuisine+history",
    },
    {
        id: 7,
        title: "Фестиваль русских пирогов",
        date: "28 ноября 2025",
        region: "Нижний Новгород",
        excerpt:
            "В Нижнем Новгороде пройдёт специальный фестиваль, посвящённый русским пирогам. Участники представят более 50 видов традиционных пирогов с различными начинками.",
        image: "russian+pies+festival+traditional+pastries",
    },
    {
        id: 8,
        title: "Закрытие фестиваля и награждение победителей",
        date: "1 декабря 2025",
        region: "Москва",
        excerpt:
            "Торжественное закрытие фестиваля и награждение победителей конкурсов. Будут подведены итоги месяца, посвящённого русской кулинарной культуре.",
        image: "awards+ceremony+russian+cuisine+festival",
    },
]

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
                                Следите за актуальными событиями и мероприятиями
                                Всероссийского фестиваля русской кухни
                            </p>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {newsItems.map((item) => (
                                <Card
                                    key={item.id}
                                    className="group overflow-hidden border-2 border-border bg-card transition-shadow hover:shadow-lg"
                                >
                                    <div className="aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={`/.jpg?height=300&width=400&query=${item.image}`}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="mb-3 flex flex-wrap items-center gap-2">
                                            <Badge
                                                variant="secondary"
                                                className="bg-secondary text-secondary-foreground"
                                            >
                                                <Calendar className="mr-1 h-3 w-3" />
                                                {item.date}
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className="border-primary text-primary"
                                            >
                                                <MapPin className="mr-1 h-3 w-3" />
                                                {item.region}
                                            </Badge>
                                        </div>
                                        <h3 className="text-balance text-xl font-bold leading-tight text-foreground">
                                            {item.title}
                                        </h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-muted-foreground">
                                            {item.excerpt}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="border-t border-border bg-muted/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                Подпишитесь на новости
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                Получайте актуальную информацию о мероприятиях
                                фестиваля
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
