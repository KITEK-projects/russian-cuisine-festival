import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChefHat, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"
import { DividerPattern } from "@/components/ui/divider"
import { Img } from "@/components/ui/img"

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col relative">
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
                        <div className="grid items-start gap-12 lg:grid-cols-2">
                            <div className="space-y-8">
                                <div className="gridspace-y-4">
                                    <h1 className="font-serif text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                                        Всероссийский фестиваль
                                        <br />
                                        <span className="font-accent primary text-primary">
                                            русской кухни{" "}
                                        </span>
                                        <br />В Омской области
                                    </h1>
                                    <p className="font-serif text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
                                        30 октября — 1 декабря 2025 г.
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
                                        <Link href="#program-section">
                                            Программа
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <Img
                                src="/traditional-russian-bread-karavai-with-wheat-and-t.png"
                                alt="Традиционный русский каравай"
                                className="xl:w-3/5 w-4/5 object-cover self-center rounded-lg justify-self-center"
                            />
                        </div>
                    </div>
                </section>

                <DividerPattern />
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
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <Calendar className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        33
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        дней фестиваля
                                    </div>
                                </CardContent>
                            </Card>
                            {/* <Card className="border-2 border-border bg-card text-center">
                                <CardContent className="pt-6">
                                    <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                                    <div className="text-3xl font-bold text-foreground">
                                        85+
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        регионов России
                                    </div>
                                </CardContent>
                            </Card> */}
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
                <section
                    id="program-section"
                    className="bg-muted/30 py-20 md:py-32"
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 text-center">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Программа мероприятий Омской области
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Разнообразные события для всех любителей русской
                                кухни
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <Card
                                as="a"
                                href="/event-program/for-restaurateur"
                                className="border-2 border-border bg-card"
                            >
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <ChefHat className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground hover:underline">
                                        Экскурсия для рестораторов
                                    </h3>
                                    {/* <p className="leading-relaxed text-muted-foreground">
                            Обучение традиционным техникам
                            приготовления русских блюд от ведущих
                            шеф-поваров страны
                            </p> */}
                                </CardContent>
                            </Card>

                            <Card
                                as="a"
                                href="/news/4"
                                className="border-2 border-border bg-card"
                            >
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground hover:underline">
                                        Конкурс среди преподавателей по
                                        компетенции "Поварское дело"
                                    </h3>
                                    {/* <p className="leading-relaxed text-muted-foreground">
                                        ???
                                    </p> */}
                                </CardContent>
                            </Card>

                            <Card
                                as="a"
                                href="/event-program/fair"
                                className="border-2 border-border bg-card"
                            >
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Award className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground hover:underline">
                                        Ярмарка русской кухни
                                    </h3>
                                    {/* <p className="leading-relaxed text-muted-foreground">
                                        ???
                                    </p> */}
                                </CardContent>
                            </Card>

                            <Card
                                as="a"
                                href="/festival"
                                className="border-2 border-border bg-card"
                            >
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Award className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-foreground hover:underline">
                                        Участники месяца русской кухни
                                    </h3>
                                    {/* <p className="leading-relaxed text-muted-foreground">
                                        ???
                                    </p> */}
                                </CardContent>
                            </Card>
                        </div>

                        {/*                         <div className="mt-12 text-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                <Link href="/festival">Полная программа</Link>
                            </Button>
                        </div> */}
                    </div>
                </section>
                <DividerPattern />
                {/* Gallery Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 text-center">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Галерея
                                {/* <br />
                                <em className="text-xl">
                                    Фотографии будут опубликованы 30 октября
                                </em> */}
                            </h2>
                            {/* <p className="mt-4 text-lg text-muted-foreground">
                                Моменты прошлых фестивалей
                            </p> */}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    src: "/gallery/4.jpg",
                                    alt: "Пресс-конференция организаторов фестиваля",
                                },
                                {
                                    src: "/gallery/5.jpg",
                                    alt: "Пресс-конференция организаторов фестиваля",
                                },
                                {
                                    src: "/gallery/6.jpg",
                                    alt: "Пресс-конференция организаторов фестиваля",
                                },
                                {
                                    src: "/gallery/1.jpg",
                                    alt: 'Партнёр фестиваля ООО НПО "Мир"',
                                },
                                {
                                    src: "/gallery/2.jpg",
                                    alt: 'Партнёр фестиваля ООО НПО "Мир"',
                                },
                                {
                                    src: "/gallery/3.jpg",
                                    alt: 'Партнёр фестиваля ООО НПО "Мир"',
                                },
                                {
                                    src: "/articles/contest/1.jpg",
                                    alt: "Фестиваль русской кухни",
                                },
                                {
                                    src: "/articles/contest/2.jpg",
                                    alt: "Фестиваль русской кухни",
                                },
                                {
                                    src: "/articles/contest/3.jpg",
                                    alt: "Фестиваль русской кухни",
                                },
                                {
                                    src: "/gallery/7.jpg",
                                    alt: "Ярмарка",
                                },
                                {
                                    src: "/gallery/8.jpg",
                                    alt: "Ярмарка",
                                },
                                {
                                    src: "/gallery/9.jpg",
                                    alt: "Ярмарка",
                                },
                            ].map((query, i) => (
                                <div
                                    key={i}
                                    className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                                >
                                    <Img
                                        src={query.src}
                                        alt={query.alt}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="bg-primary py-20 text-primary-foreground">
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
                </section> */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                    Документы
                                </h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Методические материалы и положения фестиваля
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <Card className="border-2 border-border bg-card">
                                    <CardHeader>
                                        <h3 className="text-xl font-bold text-foreground">
                                            Методические рекомендации
                                        </h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-4 leading-relaxed text-muted-foreground">
                                            Подробное описание целей, задач,
                                            традиционных блюд и рекомендации по
                                            проведению мероприятий
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="w-full bg-transparent"
                                        >
                                            <a href="/met-recs.pdf">
                                                Скачать PDF
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="border-2 border-border bg-card">
                                    <CardHeader>
                                        <h3 className="text-xl font-bold text-foreground">
                                            Техническое задание
                                        </h3>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between">
                                        <p className="mb-4 leading-relaxed text-muted-foreground">
                                            Требования к участникам, форма
                                            регистрации и технические условия
                                            проведения "Месяца русской кухни"
                                        </p>
                                        <a href="/tehzadanie.pdf">
                                            <Button
                                                variant="outline"
                                                className="mt-auto w-full bg-transparent"
                                            >
                                                Скачать PDF
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <DividerPattern />
            <Footer />
        </div>
    )
}
