export function Footer() {
    return (
        <footer className="border-t border-border bg-secondary">
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
                                    href="mailto:mkturomsk@gmail.com"
                                    className="hover:text-primary"
                                >
                                    mkturomsk@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:+79131499889"
                                    className="hover:text-primary"
                                >
                                    8-913-149-98-89
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
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                                aria-label="VK"
                            >
                                VK
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                                aria-label="Telegram"
                            >
                                TG
                            </a>
                        </div>
                    </div>

                    {/* Partners */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-foreground">
                            Партнёры
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Министерство промышленности и торговли РФ
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
