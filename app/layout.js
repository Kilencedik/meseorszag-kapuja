import { Inter } from "next/font/google";
import "./globals.css"
import Link from "next/link";
import {Analytics} from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meseország Kapujában",
  description: "Információk a Meseország Kapujában című nappali táborról",
};

export default async function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="text-stone-50 h-screen flex flex-col w-screen ">
              <main className={inter.className}>
                  <Header/>
                  <div className="h-fit">
                      {children}
                      <Analytics />
                  </div>
              </main>
          </body>
      </html>
  );
}

export function Header() {
    return (
        <div className="w-screen min-h-44 grow flex flex-col">
            <div className="bg-sky-500 flex items-center p-14 h-28 text-4xl font-bold text-stone-200">Meseország Kapujában</div>
            <div className="flex bg-sky-600 w-screen min-h-16 justify-around items-center text-xl font-bold flex-wrap grow">
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2" href="/program">Program</Link>
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2" href="/jelentkezes">Jelentkezés</Link>
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2" href="/informaciok">Információk</Link>
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80 my-2" href="/dokumentumok">Dokumentumok</Link>
            </div>
        </div>
        )
    }
