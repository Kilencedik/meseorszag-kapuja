import Link from "next/link";
import Image from "next/image";
import sari1 from "@/public/sari1.png"
import sari2 from "@/public/sari2.png"

export default function Jelentkezes() {
    return(
        <div className="flex flex-col justify-center items-center h-4/5 px-10">
            <div className="flex items-center justify-evenly w-full flex-col h-72 text-stone-700 text-lg font-semibold">
                Ha felkeltettük érdeklődésedet, szeretettel várunk! Jelentkezni az alábbi kérdőív segítségével van
                lehetőség:
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfskWXkDYZNOyJClpbekZBPG1TjQIQvbwELmakIwX5IImBCMg/viewform?usp=sf_link"
                    className="rounded h-28 w-72 bg-sky-500 text-3xl font-semibold text-stone-50 flex justify-center items-center">Jelentkezz!</Link>
            </div>
            <div className="w-full flex items-center justify-around pt-10">
                <Image src={sari1} alt="sárkány" width={200} height={200} className="self-start rotate-45" />
                <Image src={sari2} alt="sárkány" width={200} height={200} className="self-end -rotate-45 invisible hidden md:visible md:block" />
            </div>
        </div>
    )
}