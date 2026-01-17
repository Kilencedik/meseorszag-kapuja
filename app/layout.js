"use client";

import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { pdfjs, Document, Page } from "react-pdf";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function RootLayout({ children }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const containerRef = useRef(null);
    const [width, setWidth] = useState(800);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) setWidth(containerRef.current.offsetWidth);
            else setWidth(Math.min(window.innerWidth - 48, 800));
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const pdfPath = "/meseorszag.pdf";

    return (
        <html lang="en">
        <body className="text-stone-50 h-screen flex flex-col w-screen">
        <main className={inter.className + " p-6"}>
            <div className="h-fit">
                <div ref={containerRef} className="max-w-4xl mx-auto">
                    <div className="bg-stone-900 p-4 rounded-2xl shadow-md">
                        <Document
                            file={pdfPath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={<div className="py-24 text-center">Betöltés…</div>}
                        >
                            <Page pageNumber={pageNumber} width={width} />
                        </Document>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <button
                                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                                    className="px-3 py-1 mr-2 rounded bg-stone-700 hover:bg-stone-600"
                                >
                                    Előző
                                </button>
                                <button
                                    onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
                                    className="px-3 py-1 rounded bg-stone-700 hover:bg-stone-600"
                                >
                                    Következő
                                </button>
                            </div>

                            <div>
                                Oldal {pageNumber} / {numPages || "—"}
                            </div>
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
