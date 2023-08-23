/** @format */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'gs.todo',
    description: "If you've got sh!t to do, you've got gs.todo",
    manifest: '/manifest.json',
    themeColor: '#20212C',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
