import { Inter } from "next/font/google";
import "./globals.css"
import Link from "next/link";
import {redirect} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meseország Kapuja",
  description: "Információk a Meseország Kapuja című nappali táborról",
};

export default async function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="text-stone-50 h-screen flex flex-col w-screen ">
              <main className={inter.className}>
                  <Header/>
                  <div className="h-fit">{children}</div>
              </main>
          </body>
      </html>
  );
}

export function Header() {
    return (
        <div className="w-screen h-44 flex flex-col">
            <div className="bg-sky-500 flex items-center p-14 h-28 text-4xl font-bold">Meseország Kapuja</div>
            <div className="flex bg-sky-600 w-screen h-16 justify-around items-center text-xl font-bold">
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80" href="/program">Program</Link>
                <Link className="bg-sky-500 p-1.5 rounded px-3 sm:px-10 hover:opacity-80" href="/jelentkezes">Jelentkezés</Link>
            </div>
        </div>
        )
    }
