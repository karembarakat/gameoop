import {
    Ui
} from "./ui.module.js";
export class DetailsPage {
    constructor(ID) {
        this.ui = new Ui();
        document.querySelector(".icon").addEventListener("click", () => {
            document.querySelector(".main").classList.remove("hidden");
            document.querySelector(".details").classList.add("hidden");

        })
        this.getDetails(ID);

    }

    async getDetails(ID) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("hidden")
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6ea9c3ff2emsh4d237bf6774f496p1dadbfjsn2fd640835f3a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        this.ui.gameDetails(result)
        loading.classList.add("hidden")


    }
}