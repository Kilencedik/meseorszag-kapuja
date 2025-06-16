import Link from "next/link";
import Image from "next/image";
import tundi1 from "@/public/tundi1.png"
import tundi2 from "@/public/tundi2.png"

export default function Jelentkezes() {
    return(
        <div className="flex flex-col justify-center items-center h-4/5 px-10">
            <div className="flex items-center justify-evenly w-full flex-col h-72 text-stone-700 text-lg font-semibold">
                Ha felkeltettük érdeklődésedet, szeretettel várunk! Jelentkezni az alábbi kérdőív segítségével van
                lehetőség:
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfICPcOFaQLI3zIvEs-4fx1ZEgvc9IM1Av39BQzb5i4tOuzDg/viewform"
                    className="rounded h-28 w-72 bg-sky-500 text-3xl font-semibold text-stone-200 flex justify-center items-center">Jelentkezz!</Link>
            </div>
            <div className="w-full flex items-center justify-around pt-10">
                <Image src={tundi2} alt="sárkány" width={200} height={200} className="self-start " />
                <Image src={tundi1} alt="sárkány" width={200} height={200} className="self-end scale-125 invisible hidden md:visible md:block" />
            </div>
        </div>
    )
}
