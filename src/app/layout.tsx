import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Blog - EWBS',
    description: 'EWBS Blog',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
