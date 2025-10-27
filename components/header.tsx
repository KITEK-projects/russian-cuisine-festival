"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Img } from "./ui/img"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="col-start-1 col-end-4 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Img
                        className="flex h-14 items-center justify-center"
                        src="/frk_logo.png"
                        alt=""
                    />
                    {/* <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
            <span className="text-2xl text-primary-foreground">🍞</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Фестиваль</span>
            <span className="text-sm leading-tight text-muted-foreground">русской кухни</span>
          </div> */}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/#about"
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                        О фестивале
                    </Link>
                    <Link
                        href="/news"
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                        Новости
                    </Link>
                    <Link
                        href="/festival"
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                        Месяц русской кухни
                    </Link>
                </nav>

                {/* CTA Button */}
                {/* <div className="hidden md:block">
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        <Link href="/#about">Подробнее</Link>
                    </Button>
                </div> */}

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
                        <Link
                            href="/#about"
                            className="text-base font-medium text-foreground transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            О фестивале
                        </Link>
                        <Link
                            href="/news"
                            className="text-base font-medium text-foreground transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Новости
                        </Link>
                        <Link
                            href="/festival"
                            className="text-base font-medium text-foreground transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Месяц русской кухни
                        </Link>
                        {/* <Button
                            asChild
                            size="lg"
                            className="mt-2 bg-primary text-primary-foreground"
                        >
                            <Link
                                href="/#about"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Подробнее
                            </Link>
                        </Button> */}
                    </nav>
                </div>
            )}
        </header>
    )
}
