import FirstDay from "@/components/FirstDay";
import SecondDay from "@/components/SecondDay";
import ThirdDay from "@/components/ThirdDay";
import FourthDay from  "@/components/FourthDay";
import FifthDay from "@/components/FifthDay";


export default function Program() {
    return(
        <div className="flex flex-wrap items-center justify-around w-full h-full text-stone-700 font-semibold gap-10 pt-10">
            <div
                className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 h-fit border-4 border-sky-600 flex flex-col items-center justify-center rounded-xl">
                <FirstDay />
            </div>
            <div
                className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 h-fit border-4 border-sky-600 flex flex-col items-center justify-center rounded-xl">
                <SecondDay />
            </div>
            <div
                className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 h-fit border-4 border-sky-600 flex flex-col items-center justify-center rounded-xl">
                <ThirdDay />
            </div>
            <div
                className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 h-fit border-4 border-sky-600 flex flex-col items-center justify-center rounded-xl">
                <FourthDay />
            </div>
            <div
                className="w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 h-fit border-4 border-sky-600 flex flex-col items-center justify-center rounded-xl">
                <FifthDay />
            </div>
        </div>
    )
}
