"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// --- CONFIG ---
// Put your exported PDF images into: /public/pages/
// Example filenames: page-1.jpg, page-2.jpg, page-3.jpg ...
const TOTAL_PAGES = 13; // <-- change this to match your number of images

export default function RootLayout({ children }) {
    const [page, setPage] = useState(1);

    const prev = () => setPage((p) => Math.max(1, p - 1));
    const next = () => setPage((p) => Math.min(TOTAL_PAGES, p + 1));

    return (
        <html lang="hu">
        <body className="text-stone-50 h-screen flex flex-col w-screen bg-stone-950">
        <main className={inter.className + " p-6"}>
            <div className="h-fit max-w-5xl mx-auto">
                {/* Image-based PDF replacement */}
                <div className="bg-stone-900 p-4 rounded-2xl shadow-lg mb-10">
                    <div className="relative w-full">
                        <Image
                            src={`/pages/page-${page}.jpg`}
                            alt={`Oldal ${page}`}
                            width={1200}
                            height={1700}
                            className="w-full h-auto rounded-xl"
                            priority
                        />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <button
                                onClick={prev}
                                disabled={page === 1}
                                className="px-4 py-2 bg-stone-700 disabled:opacity-40 rounded mr-2"
                            >
                                Előző
                            </button>

                            <button
                                onClick={next}
                                disabled={page === TOTAL_PAGES}
                                className="px-4 py-2 bg-stone-700 disabled:opacity-40 rounded"
                            >
                                Következő
                            </button>
                        </div>

                        <div className="text-sm text-stone-300">
                            Oldal {page} / {TOTAL_PAGES}
                        </div>
                    </div>
                </div>

                {children}

                <Analytics />
            </div>
        </main>
        </body>
        </html>
    );
}
