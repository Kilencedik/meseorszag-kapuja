// app/components/PdfViewer.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// Note: do NOT import `react-pdf` at top-level if you're worried — but `use client` + dynamic SSR false below is safe.

// dynamic import of react-pdf inside the client component (optional extra safety)
const Document = dynamic(
    () => import("react-pdf").then((mod) => mod.Document),
    { ssr: false }
);
const Page = dynamic(
    () => import("react-pdf").then((mod) => mod.Page),
    { ssr: false }
);

export default function PdfViewer() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(800);

    useEffect(() => {
        // set worker only in browser
        (async () => {
            const { pdfjs } = await import("react-pdf");
            // Use CDN worker (safe)
            pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        })();

        const updateWidth = () => {
            if (containerRef.current) setWidth(containerRef.current.offsetWidth);
            else setWidth(Math.min(window.innerWidth - 48, 800));
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div ref={containerRef} className="bg-stone-900 p-4 rounded-2xl">
            {/* the actual Document / Page are dynamically loaded client-only above */}
            <Document
                file="/pdfs/meseorszag.pdf"
                onLoadSuccess={onLoadSuccess}
                loading={<div className="py-20 text-center">Betöltés…</div>}
            >
                <Page pageNumber={pageNumber} width={width} />
            </Document>

            <div className="flex justify-between mt-4 items-center">
                <div>
                    <button onClick={() => setPageNumber((p) => Math.max(1, p - 1))}>Előző</button>
                    <button onClick={() => setPageNumber((p) => Math.min(numPages ?? 1, p + 1))}>Következő</button>
                </div>
                <div>Oldal {pageNumber} / {numPages ?? "—"}</div>
            </div>
        </div>
    );
}
