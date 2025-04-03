const proxyURL = "https://api.allorigins.win/get?url=";
const apiURL = "https://www.freetogame.com/api/games?platform=pc";

async function fetchGames() {
    try {
        const response = await fetch(proxyURL + encodeURIComponent(apiURL));
        const data = await response.json();
        const games = JSON.parse(data.contents);
        displayGames(games);
    } catch (error) {
        console.error("Error fetching games:", error);
    }
}

function displayGames(games) {
    const container = document.getElementById("games-container");
    container.innerHTML = "";

    const limitedGames = games.slice(0, 20);

    limitedGames.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.classList.add("game");
        gameElement.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>Genre: ${game.genre}</p>
            <a href="${game.game_url}" target="_blank">
            <button class="play-button">Play Now!</button></a>
            `;
        container.appendChild(gameElement);
    });
}

fetchGames();

