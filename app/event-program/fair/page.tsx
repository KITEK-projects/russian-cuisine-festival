import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { DividerPattern } from "@/components/ui/divider"
import { Img } from "@/components/ui/img"

export default function Fair() {
    return (
        <div className="flex min-h-screen flex-col relative">
            <Header />

            <main className="flex-1">
                <section className="border-b border-border">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                <Img
                                    src="event-program/fair.jpg"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Section */}

                {/* About Section */}
                <section id="about" className="scroll-mt-20 py-10 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl space-y-8 text-justify">
                            <h2 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-center">
                                Ярмарка русской кухни
                            </h2>
                            <div className="space-y-3 text-lg leading-relaxed">
                                <p className="indent-8">
                                    В 2025 году исторический парк «Омская
                                    крепость» получил президентский грант на
                                    проведение 3 – 4 ноября 2025 г.
                                    военно-патриотического фестиваля, в котором
                                    примут участие представители других регионов
                                    России.
                                </p>
                                <p className="indent-8">
                                    Непосредственно 4 ноября текущего года в
                                    Омской крепости будет организована работа 14
                                    интерактивных площадок для жителей региона,
                                    на которых они смогут себя почувствовать
                                    участниками русско- польского сражения 17
                                    века.
                                </p>
                                <p className="indent-8">
                                    Параллельно с работой интерактивных площадок
                                    в рамках Всероссийского фестиваля русской
                                    кухни будет проходить ярмарка русской кухни.
                                </p>
                                <p className="indent-8">
                                    Гостей ждет насыщенная программа: работа
                                    точек горячего питания с блюдами русской
                                    кухни, кулинарные мастер-классы от ведущих
                                    шеф-поваров города, которые раскроют секреты
                                    приготовления исконно русских блюд.
                                </p>
                                <p className="indent-8">
                                    Особой традицией праздника станет атмосфера
                                    единения и гостеприимства. Для всех
                                    посетителей будет установлена полевая кухня,
                                    где шеф-повар одного из ресторанов города
                                    вместе со студентами Колледжа инновационных
                                    технологий приготовят ароматную пшенную кашу
                                    с мясом.
                                </p>
                                <p className="indent-8">
                                    Кроме того, силами ТК «Казачья слобода» в
                                    большом казане будет приготовлен «Борщ
                                    дружбы».
                                </p>
                                <p className="indent-8">
                                    Каша, борщ и чай будут бесплатно предложены
                                    гостям крепости.
                                </p>
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
