import "./globals.css";
import Navbar from "@/components/Navbar";
import SphereCursor from "@/components/SphereCursor";
import ThemeToggle from "@/components/ThemeToggle";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-950 text-gray-100">
        {/* Global UI */}
        <Navbar />

        <ThemeToggle />
        <SphereCursor />


        {/* Page content */}
        {children}
        </body>
        </html>
    );
}
