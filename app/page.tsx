import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Epigraph Section */}
                <section className="border-b border-border bg-muted/30 py-8">
                    <div className="container mx-auto px-4 md:px-6">
                        <blockquote className="mx-auto max-w-4xl text-center font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
                            Всероссийский фестиваль русской кухни – это
                            сохранение и популяризация русской кухни как
                            национальной кухни государствообразующего народа
                            России, движущей силы развития сферы кафе и
                            ресторанов внутри страны и одного из средств
                            продвижения образа России за рубежом.
                        </blockquote>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h1 className="font-serif text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                                        Всероссийский фестиваль{" "}
                                        <span className="font-accent primary text-destructive">
                                            русской кухни
                                        </span>
                                    </h1>
                                    <p className="font-serif text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
                                        4 ноября — 1 декабря 2025 г.
                                    </p>
                                </div>

                                <blockquote className="border-l-4 border-primary pl-6 font-serif text-lg italic leading-relaxed text-foreground">
                                    «Гордиться славою своих предков не только
                                    можно, но и должно; не уважать оной есть
                                    постыдное малодушие.»
                                    <footer className="mt-2 text-base not-italic text-muted-foreground">
                                        — А.С. Пушкин
                                    </footer>
                                </blockquote>

                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        <Link href="#about">
                                            Подробнее о фестивале
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline">
                                        <Link href="/festival">Программа</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square overflow-hidden rounded-lg bg-secondary/50">
                                    <img
                                        src="/traditional-russian-bread-karavai-with-wheat-and-t.jpg"
                                        alt="Традиционный русский каравай"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
                                <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-20 py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl space-y-8 text-center">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                О фестивале
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p>
                                    Всероссийский фестиваль русской кухни — это
                                    масштабное культурное событие, направленное
                                    на сохранение и развитие традиций русской
                                    кулинарии.
                                </p>
                                <p>
                                    Наша миссия — популяризация подлинных
                                    рецептов и технологий приготовления
                                    традиционных русских блюд, формирование
                                    позитивного образа русской кухни в России и
                                    за рубежом.
                                </p>
                                <p>
                                    Фестиваль объединяет профессиональных
                                    поваров, рестораторов, историков кулинарии и
                                    всех, кто ценит богатое наследие русской
                                    гастрономической культуры.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <Calendar className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        28
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        дней фестиваля
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        85+
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        регионов России
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <ChefHat className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        500+
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        участников
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        100+
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        мероприятий
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Program Section */}
                <section className="bg-muted/30 py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 text-center">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Программа мероприятий
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Разнообразные события для всех любителей русской
                                кухни
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-2 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <ChefHat className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                                        Мастер-классы
                                    </h3>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Обучение традиционным техникам
                                        приготовления русских блюд от ведущих
                                        шеф-поваров страны
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                                        Гастро-экскурсии
                                    </h3>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Путешествия по регионам России с
                                        дегустацией местных традиционных блюд
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Award className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                                        Конкурсы
                                    </h3>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Соревнования профессиональных поваров и
                                        любителей в приготовлении традиционных
                                        блюд
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                <Link href="/festival">Полная программа</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 text-center">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Галерея
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Моменты прошлых фестивалей
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "traditional+russian+feast+table+with+bread+and+dishes",
                                "russian+chef+cooking+traditional+food",
                                "traditional+russian+pastries+and+bread",
                                "russian+festival+tent+with+decorations",
                                "people+tasting+traditional+russian+food",
                                "traditional+russian+kitchen+utensils+and+ingredients",
                            ].map((query, i) => (
                                <div
                                    key={i}
                                    className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                                >
                                    <img
                                        src={`/.jpg?height=400&width=400&query=${query}`}
                                        alt={`Фото фестиваля ${i + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-20 text-primary-foreground">
                    <div className="container mx-auto px-4 text-center md:px-6">
                        <h2 className="font-serif text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                            Присоединяйтесь к фестивалю
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
                            Станьте частью масштабного культурного события,
                            посвящённого русской кулинарной традиции
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="bg-background text-foreground hover:bg-background/90"
                            >
                                <Link href="/festival">Узнать больше</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                            >
                                <Link href="/news">Новости фестиваля</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
