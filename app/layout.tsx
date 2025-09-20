import { Metadata } from "next";
import React from "react";
import "./globals.css"

export const metadata: Metadata = {
    title: 'وبلاگ من',
    description: 'مرجع مقالات تخصصی در زمینه های تکنولوژی، کسب و کار، سلامت، گردشگری، و موضوعات متنوع دیگر'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                {children}
            </body>
        </html>
    )
}