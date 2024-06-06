export default function Program() {
    return(
        <div className="flex flex-col w-screen h-full justify-center items-center pt-10">
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 h-full border-4 rounded-2xl border-sky-500 bg-sky-400">
                <div className="p-4">
                    <p>&emsp;Az alábbiakban a tábor részletes programja található meg. Az utolsó napon a szülőket is várjuk
                        szeretettel, egy rövid előadásra, amelyben a gyerekek egy mesét fognak megismertetni a
                        közönséggel.</p>
                    <div className="flex flex-col pt-4 h-72 p-4">
                        <div className="flex justify-start gap-2">
                            <button className="p-1.5 bg-sky-500 hover:opacity-80 rounded">1. nap</button>
                            <button className="p-1.5 bg-sky-500 hover:opacity-80 rounded">2. nap</button>
                            <button className="p-1.5 bg-sky-500 hover:opacity-80 rounded">3. nap</button>
                        </div>
                        <div className="h-full border-2 border-sky-600 rounded mt-1 overflow-y-scroll scrollbar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, est eget cursus elementum, felis turpis venenatis dolor, ut feugiat magna mi quis ante. Maecenas suscipit vel lorem in condimentum. Nulla mauris risus, tincidunt ac congue quis, egestas at mauris. Phasellus aliquam tellus eget enim pretium malesuada. Etiam sed fringilla eros, ac condimentum orci. Praesent scelerisque nunc pulvinar varius sodales. Duis maximus scelerisque enim in luctus. Nam rutrum, orci et semper laoreet, elit massa sodales quam, in mattis nisl ipsum elementum elit.

                            Vestibulum sit amet tincidunt mauris. Maecenas at ultrices nisl. Pellentesque tincidunt aliquet venenatis. Praesent elit lorem, feugiat gravida mollis vulputate, rhoncus vel ex. Vestibulum vel dictum velit. Nulla vitae sapien non metus lacinia rutrum ut sed nulla. Nulla imperdiet a justo eget egestas. Etiam maximus odio ornare ipsum egestas molestie. Duis ultrices congue nunc, quis sagittis lorem convallis venenatis. Mauris viverra, mauris eu luctus sagittis, enim felis convallis felis, vel efficitur massa libero egestas dui. Suspendisse potenti. Morbi quis odio maximus, rutrum arcu id, pellentesque augue.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}