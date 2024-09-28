const API_KEY = "Q2VVzVea4LFVCHhmlfvqeiIWVWVQXqOm"; 
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

async function fetchData(query) {
    const res = await fetch(`${url}${query}&api-key=${API_KEY}`);
    const data = await res.json();
    return data.response.docs;
}

fetchData("all").then(data => renderMain(data));

let mobileMenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

function renderMain(arr) {
    let mainHTML = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].multimedia.length > 0) {
            let imageURL = `https://static01.nyt.com/${arr[i].multimedia[0].url}`;
            mainHTML += `
                <div class="card">
                    <a href="${arr[i].web_url}" target="_blank">
                        <img src="${imageURL}" loading="lazy" />
                        <h4>${arr[i].headline.main}</h4>
                        <div class="publishbyDate">
                            <p>${arr[i].source}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].pub_date).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                            ${arr[i].abstract}
                        </div>
                    </a>
                </div>`;
        }
    }

    document.querySelector("main").innerHTML = mainHTML;
}

const searchBtn = document.getElementById("searchForm");
const searchBtnMobile = document.getElementById("searchFormMobile");
const searchInputMobile = document.getElementById("searchInputMobile");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = await fetchData(searchInput.value);
    renderMain(data);
});

searchBtnMobile.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = await fetchData(searchInputMobile.value);
    renderMain(data);
});

async function Search(query) {
    const data = await fetchData(query);
    renderMain(data);
}
