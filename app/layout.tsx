import "./globals.css";
import Navbar from "@/components/Navbar";
import SphereCursor from "@/components/SphereCursor";
import HomeButton from "@/components/HomeButton";

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
        <SphereCursor />

        {/* Page content */}
        {children}
        </body>
        </html>
    );
}
