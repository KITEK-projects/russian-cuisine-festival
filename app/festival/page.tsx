import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Globe, TrendingUp, BookOpen, Award } from "lucide-react"
import { participants } from "@/public/data/participants"
import Participant from "@/components/participant"
import { DividerPattern } from "@/components/ui/divider"

export default function FestivalPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="border-b border-border bg-gradient-to-br from-background via-secondary/20 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h1 className="mb-8 text-balance text-center text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                                Участники месяца русской кухни
                            </h1>
                            <div className="participants grid grid-cols-1 md:grid-cols-2 gap-8">
                                {participants.map((el) => (
                                    <Participant key={el.id} {...el} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                    Наша миссия
                                </h2>
                            </div>

                            <Card className="border-2 border-primary/20 bg-card">
                                <CardContent className="pt-8">
                                    <p className="text-lg leading-relaxed text-foreground">
                                        Всероссийский фестиваль русской кухни —
                                        это сохранение и популяризация русской
                                        кухни как национальной кухни
                                        государствообразующего народа России,
                                        движущей силы развития сферы кафе и
                                        ресторанов внутри страны и одного из
                                        средств продвижения образа России за
                                        рубежом.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 text-center">
                            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                Цели и задачи
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Комплексный подход к развитию русской кулинарной
                                культуры
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <Target className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Сохранение традиций
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Документирование и сохранение подлинных
                                        рецептов и технологий приготовления
                                        традиционных русских блюд для будущих
                                        поколений
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Объединение профессионалов
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Создание платформы для обмена опытом
                                        между шеф-поварами, рестораторами и
                                        историками кулинарии из всех регионов
                                        России
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <Globe className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Международное признание
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Формирование позитивного образа русской
                                        кухни за рубежом и продвижение её как
                                        части мирового кулинарного наследия
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <TrendingUp className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Развитие индустрии
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Стимулирование развития ресторанного
                                        бизнеса и сферы общественного питания на
                                        основе традиций русской кухни
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <BookOpen className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Образование
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Проведение мастер-классов, семинаров и
                                        конференций для повышения квалификации
                                        специалистов и популяризации знаний о
                                        русской кухне
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-border bg-card">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <Award className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Поддержка талантов
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Выявление и поддержка молодых
                                        талантливых поваров, работающих с
                                        традиционной русской кухней
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                    География фестиваля
                                </h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    От Калининграда до Владивостока
                                </p>
                            </div>

                            <Card className="border-2 border-border bg-card">
                                <CardContent className="pt-8">
                                    <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                        <p>
                                            Фестиваль охватывает все 85 регионов
                                            Российской Федерации. Каждый регион
                                            представляет свои уникальные
                                            кулинарные традиции, отражающие
                                            местную историю, культуру и
                                            природные особенности.
                                        </p>
                                        <p>
                                            От поморской кухни Архангельской
                                            области до казачьих традиций Кубани,
                                            от сибирских деликатесов до волжских
                                            блюд — фестиваль демонстрирует всё
                                            богатство и разнообразие русской
                                            кулинарной культуры.
                                        </p>
                                        <p>
                                            Центральные мероприятия проходят в
                                            Москве, Санкт-Петербурге и других
                                            крупных городах, но каждый регион
                                            организует собственные события,
                                            мастер-классы и дегустации.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                                    Организаторы
                                </h2>
                            </div>

                            <Card className="border-2 border-border bg-card">
                                <CardContent className="pt-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                                Рабочая группа
                                            </h3>
                                            <p className="leading-relaxed text-muted-foreground">
                                                Рабочая группа по вопросам
                                                популяризации русской кухни при
                                                Министерстве промышленности и
                                                торговли Российской Федерации
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                                Партнёры
                                            </h3>
                                            <p className="leading-relaxed text-muted-foreground">
                                                Региональные министерства
                                                культуры, туризма и торговли,
                                                ведущие кулинарные школы и
                                                ассоциации рестораторов России
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="border-t border-border bg-primary py-16 text-primary-foreground md:py-24">
                    <div className="container mx-auto px-4 text-center md:px-6">
                        <h2 className="text-balance text-3xl font-bold md:text-4xl">
                            Свяжитесь с нами
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
                            По вопросам участия в фестивале и сотрудничества
                        </p>
                        <div className="mt-8 space-y-2">
                            <p className="text-lg">
                                Email:{" "}
                                <a
                                    href="mailto:post@minprom.omskportal.ru"
                                    className="font-medium underline"
                                >
                                    post@minprom.omskportal.ru
                                </a>
                            </p>
                            <p className="text-lg">
                                Телефон:{" "}
                                <a
                                    href="tel:83812770417"
                                    className="font-medium underline"
                                >
                                    8 (3812) 77-04-17
                                </a>
                            </p>
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer />
        </div>
    )
}

// const images = document.querySelector(".article_photo_carousel_inner")!.children[0].querySelector("img").src
