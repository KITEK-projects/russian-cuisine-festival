import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
})

const cormorant = Cormorant({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
})

const dobryUstav = localFont({
    src: "./fonts/dobry-ustav.woff2",
    variable: "--font-dobry-ustav",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Всероссийский фестиваль русской кухни",
    description:
        "Сохранение и популяризация русской кухни как национальной кухни государствообразующего народа России",
    generator: "v0.app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body
                className={`${inter.variable} ${cormorant.variable} ${dobryUstav.variable} font-sans antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    )
}
