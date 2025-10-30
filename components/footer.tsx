export function Footer() {
    return (
        <footer className="col-start-2 col-end-3 border-t border-border bg-secondary">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Contacts */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-foreground">
                            Контакты
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                <a
                                    href="mailto:post@minprom.omskportal.ru"
                                    className="hover:text-primary"
                                >
                                    post@minprom.omskportal.ru
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:83812770417"
                                    className="hover:text-primary"
                                >
                                    8 (3812) 77-04-17
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-foreground">
                            Социальные сети
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://vk.com/tur_omsk"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                                aria-label="VK"
                            >
                                VK
                            </a>
                        </div>
                    </div>

                    {/* Partners */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-foreground">
                            Партнёры
                        </h3>
                        <p className="text-sm flex flex-col text-muted-foreground">
                            <a
                                href="https://omsktec.ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Колледж инновационных технологий, экономики и
                                коммерции
                            </a>
                            <a
                                href="https://mir-omsk.ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                ООО НПО «МИР»
                            </a>
                            <a
                                href="https://www.x5.ru/ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Х5 Group
                            </a>
                            <a
                                href="http://akoomsk.ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Ассоциация омских кулинаров
                            </a>
                            <a
                                href="https://alfa-biz.ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Альфа-Бизнес (ТД «Шкуренко»)
                            </a>
                            <a
                                href="https://kdlomsk.ru/"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Ресторан «Клуб деловых людей»
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                ООО «Новая Сибирь»
                            </a>
                            <a
                                href="https://omsk-gcnt.ru/?ysclid=mhaoa3gv9f297161939"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Государственный центр народного творчества
                            </a>
                            <a
                                href="https://gotoomsk.ru/?ysclid=mhaoawigx2692689349"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                Туристский информационный центр
                            </a>
                            <a
                                href="https://www.nizkocen.ru/?ysclid=mhczz6s679346473489"
                                className="hover:text-primary"
                                target="_blank"
                            >
                                ООО "Холлифуд"
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © 2025 Всероссийский фестиваль русской кухни. Все права
                        защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}
