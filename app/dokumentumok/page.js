import Link from 'next/link';

export default function Dokumentumok() {
    return(
        <div className="flex justify-center items-center w-full h-fit mt-10">
                <div className="w-4/5 h-fix flex flex-col items-center justify-center rounded-xl">
                    <div className="text-stone-700 p-14">
                            A táborhoz szükséges dokumentumok az alábbi gombbal tölthetőek le:
                        </div>
                        <a
                    href="/szuloi-beleegyezes.pdf"
                    download
                    className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2"
                >
                    Szülői beleegyezés
                </a>
                <a
                    href="/egeszsegugye-nyilatkozat.pdf"
                    download
                    className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2"
                >
                    Egészségügyi nyilatkozat
                </a>
                </div>
        </div>
    )
}
