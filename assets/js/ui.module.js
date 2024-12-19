export class Ui {
    displayGames(games) {
        let game = ``;
        for (let i = 0; i < games.length; i++) {
            let gameData = games[i];
            game += `<div class="p-4 basis-full game-card  sm:basis-3/6 md:basis-1/3 lg:basis-1/4" data-id="${gameData.id}">
                    <div
                        class="border-2 border-gray-900  scale-100 hover:scale-105 border-opacity-40 grayscale-[60%] hover:grayscale-[0%] duration-500 transition-all rounded-lg overflow-hidden">
                        <div class="h-full p-4 ">
                            <img class="lg:h-48 md:h-36 w-full rounded-t-lg object-content object-center "
                                src="${gameData.thumbnail}" alt="blog">
                            <div class="py-6">
                                <div class="info flex flex-wrap justify-between content-center items-center">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-slate-50 mb-1">
                                    ${gameData.title}
                                    </h2>
                                    <span class="rounded-md bg-gray-900 px-2 py-1 text-sm font-medium text-white">
                                        free</span>
                                </div>
                                <p class="leading-relaxed mb-3 text-center text-gray-500">${gameData.short_description}</p>
                            </div>
                        </div>
                        <div class="flex items-center flex-wrap border-t border-gray-900 border-opacity-40 py-2 px-3">
                            <a class="rounded-md bg-[#32383e] px-2 py-1 text-sm font-medium text-white">${gameData.genre} </a>
                            <span class="rounded-md bg-[#32383e] px-2 py-1 text-sm font-medium text-white ml-auto">
                            ${gameData.platform}
                            </span>

                        </div>
                    </div>
                </div>`;
        }
        document.querySelector('.game-wraper').innerHTML = game;
    }
    gameDetails(gameData) {
        let detailsContainer = `
        
        <div class="container m-auto p-10">
            <div class="flex flex-wrap details-page">
                <h2 class="text-3xl basis-full my-9">Game Details</h2>
                <div class="basis-full  md:basis-3/6 lg:basis-1/4">
                    <img class="m-auto max-w-full" src="${gameData.thumbnail}" alt="${gameData.tite}">
                </div>
                <div class="md:px-5 md:py-0 py-2 md:basis-3/6 basis-full lg:basis-3/4 content-center">
                    <h2 class="text-2xl capitalize">title: ${gameData.title}</h2>
                    <div class="cat capitalize my-2">Category: <span
                            class="bg-[#0dcaf0] text-black p-1 text-sm rounded-md font-medium">${gameData.genre}</span></div>
                    <div class="cat capitalize my-2">Platform: <span
                            class="bg-[#0dcaf0] text-black p-1 text-sm rounded-md font-medium">${gameData.platform}</span></div>
                    <div class="cat capitalize my-2">Status: <span
                            class="bg-[#0dcaf0] text-black p-1 text-sm rounded-md font-medium">${gameData.status}</span></div>
                </div>
                <div class="lg:basis-3/4 basis-full ml-auto lg:px-5">
                    <p class="mt-5">${gameData.description}</p>
                    <a target="_blank" href="${gameData.game_url}"
                        class="rounded-lg border-amber-400 border-2 p-2 mt-2 inline-block hover:bg-amber-400 hover:text-white transition-all duration-500">show
                        game</a>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".detailsbox").innerHTML = detailsContainer;
    }

}