import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sumit Kumar | Portfolio",
    description: "Creative developer portfolio built with Next.js",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-950 text-gray-100 antialiased overflow-x-hidden">
        {children}
        </body>
        </html>
    );
}
