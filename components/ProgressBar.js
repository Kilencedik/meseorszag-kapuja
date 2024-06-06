"use client"
import {useEffect, useState} from "react";

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100;
            setProgress(scrollPercent);
        }

        window.addEventListener("scroll", handleProgress);

        return()=>{
            window.removeEventListener("scroll", handleProgress);
        }

    }, []);

    return(
        <div id="progress-container" style={{height: "8px", width: "100%", backgroundColor: "transparent", position: "sticky", top: "0"}}>
            <div className="progress-fill" style={{height: "100%", backgroundColor: "#78a9ef", width: `${progress}%`}}>{" "}</div>
        </div>
    )
}