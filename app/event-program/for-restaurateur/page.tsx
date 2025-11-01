import { Footer } from "@/components/footer"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Header } from "@/components/header"
import { DividerPattern } from "@/components/ui/divider"
import { Img } from "@/components/ui/img"

export default function ForRestaurateurs() {
    const schedule = [
        {
            time: "14.30 – 14.40",
            event: "Регистрация участников экскурсии",
        },
        {
            time: "14.40 – 15.00",
            event: "Ознакомление с деятельностью ООО «Научно-производственное объединение «МИР»",
        },
        {
            time: "15.00 – 15.55",
            event: `Пленарная сессия «О культуре потребления блюд русской кухни в России»
Место проведения: зал заседаний, 1 этаж
Модератор – Галкина Светлана Леонидовна, президент Омской областной общественной организации «Ассоциация омских кулинаров», член технического комитета по стандартизации «Продукция и услуги общественного питания», кандидат технических наук`,
        },
        {
            time: "15.00 – 15.05",
            event: `Приветственное слово Беляева Александра Николаевича, генерального директора ООО «Научно-производственное объединение «МИР»`,
        },
        {
            time: "15.05 – 15.10",
            event: `Приветственное слово Кузнецова Никиты Вячеславовича, директора Департамента развития внутренней торговли Минпромторга России, идеолога Методических рекомендаций по проведению Всероссийского фестиваля русской кухни (участие уточняется)`,
        },
        {
            time: "15.10 – 15.15",
            event: `Приветственное слово Посаженникова Андрея Васильевича, Министра промышленности и торговли Омской области`,
        },
        {
            time: "15.15 – 15.25",
            event: `Выступление Кулагиной Евгении Викторовны, заведующего кафедрой туризма, гостиничного и ресторанного бизнеса ФГАОУ ВО «Омский государственный технический университет», кандидат педагогических наук, общественный представитель АНО «Агентство стратегических инициатив» по направлению «Туризм» на тему: «Аттрактивность русской кухни в контексте туристского интереса»`,
        },
        {
            time: "15.25 – 15.35",
            event: `Выступление Багринцевой Виктории Юрьевны, заместителя директора – руководителя Центра нематериального этнокультурного достояния и креативных индустрий БУК Омской области «Государственный центр народного творчества» на тему: «Чалдонская кухня – этнокультурный бренд Омского региона»`,
        },
        {
            time: "15.35 – 15.45",
            event: `Выступление Литвиненко Юлии Олеговны, шеф-повар, основатель проекта #ШЕФИФЕРМЕР, вице-президент Российской ассоциации шеф-поваров Chefs Team Russia на тему: «Миссия современного шеф-повара на пути сохранения нематериального этнокультурного достояния, в рамках культурной идентичности. Гастрономический суверенитет»`,
        },
        {
            time: "15.45 – 15.55",
            event: `Выступление Геер Татьяны Александровны, заместителя начальника управления по развитию туризма в Омской области Министерства культуры Омской области на тему: «Гастрономическая карта региона как актуальный инструмент привлечения туристов»`,
        },
        {
            time: "15.55 – 16.40",
            event: `Круглый стол с чаепитием и дегустацией блюд русской кухни, в рамках которого обсуждаются вопросы использования блюд русской кухни в меню предприятий общественного питания
Место проведения: кафе-трапезная, 1 этаж`,
        },
    ]
    return (
        <div className="flex min-h-screen flex-col relative">
            <Header />

            <main className="flex-1">
                <section className="scroll-mt-20 pt-10 md:pt-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="font-serif text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-center">
                                ПРОГРАММА
                            </h1>
                            <h3 className="mb-3 font-serif text-xl font-bold text-foreground text-center">
                                проведения в ООО «Научно-производственное
                                объединение «МИР» экскурсии для рестораторов
                                «Русская трапеза. Гостеприимство, кухня,
                                застолье» в рамках проведения в Омской области
                                Всероссийского фестиваля русской кухни
                            </h3>

                            <blockquote className="border-l-4 border-primary pl-6 font-serif text-lg italic leading-relaxed text-foreground">
                                30 октября 2025 г., 14.40 часов г. Омск, ул.
                                <br />
                                Успешная, д. 51
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="event" className="scroll-mt-20 py-10 md:py-20">
                    <div className="container overflow-x-auto rounded-lg border border-gray-200 shadow-md mx-auto px-4 md:px-6">
                        <Table className="xl:text-base">
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="w-32">
                                        Время
                                    </TableHead>
                                    <TableHead>Событие</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {schedule.map((item, idx) => (
                                    <TableRow
                                        key={idx}
                                        className="hover:bg-gray-50"
                                    >
                                        <TableCell className="font-medium">
                                            {item.time}
                                        </TableCell>
                                        <TableCell className="whitespace-pre-line text-gray-700">
                                            {item.event}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
            <DividerPattern />
            <Footer />
        </div>
    )
}
