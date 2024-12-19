import {
    DetailsPage
} from './details.module.js';
import {
    Ui
} from './ui.module.js';

export class Games {
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll(".menu a").forEach((traget) => {
            traget.addEventListener("click", (e) => {
                document.querySelector(".menu a.bg-gray-900").classList.remove("bg-gray-900", "text-white");
                e.target.classList.add("bg-gray-900", "text-white");
                this.getGames(e.target.dataset.category)
            })
        })
        this.ui = new Ui();
    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("hidden")
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6ea9c3ff2emsh4d237bf6774f496p1dadbfjsn2fd640835f3a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        this.ui.displayGames(result);
        this.detailsBox();
        loading.classList.add("hidden")
    }
    detailsBox() {
        document.querySelectorAll('.game-card').forEach((card) => {
            card.addEventListener('click', (e) => {
                const gameID = card.dataset.id; 
                this.detailsToggle(gameID);

            });
        });
    }

    detailsToggle(ID) {
        new DetailsPage(ID)
        document.querySelector(".main").classList.add("hidden");
        document.querySelector(".details").classList.remove("hidden");
    }
}