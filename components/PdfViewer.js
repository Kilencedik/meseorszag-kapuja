"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use CDN worker (avoids Vercel build issues)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
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

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div ref={containerRef} className="bg-stone-900 p-4 rounded-2xl">
            <Document
                file="/pdfs/meseorszag.pdf"
                onLoadSuccess={onLoadSuccess}
                loading={<div className="py-20 text-center">Betöltés…</div>}
            >
                <Page pageNumber={pageNumber} width={width} />
            </Document>

            <div className="flex justify-between mt-4 items-center">
                <div>
                    <button
                        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                        className="px-3 py-1 bg-stone-700 rounded mr-2"
                    >
                        Előző
                    </button>
                    <button
                        onClick={() => setPageNumber((p) => Math.min(numPages ?? 1, p + 1))}
                        className="px-3 py-1 bg-stone-700 rounded"
                    >
                        Következő
                    </button>
                </div>

                <div>
                    Oldal {pageNumber} / {numPages ?? "—"}
                </div>
            </div>
        </div>
    );
}
