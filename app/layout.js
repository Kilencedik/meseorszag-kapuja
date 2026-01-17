import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("./../components/PdfViewer"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Meseország Kapujában",
    description: "Információk a Meseország Kapujában című nappali táborról",
};

export default function RootLayout({ children }) {
    return (
        <html lang="hu">
        <body className="text-stone-50 h-screen flex flex-col w-screen">
        <main className={inter.className + " p-6"}>
            <div className="h-fit">
                {/* Client-side PDF viewer */}
                <div className="max-w-4xl mx-auto mb-8">
                    <PdfViewer />
                </div>

                {children}

                <Analytics />
            </div>
        </main>
        </body>
        </html>
    );
}
