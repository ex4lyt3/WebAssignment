const currentURL = window.location.href;

const params = new URLSearchParams(new URL(currentURL).search);

let queryString = params.get("search");
let initialQueryString = "Nothing";

const blogContainer = document.querySelector(".blog-container");
const searchResultElement = document.querySelector(".search-results");
let searchResults = 0;
let content = '';

const DATABASE = [
    {
        Title:"How to Feed Your Food Obsession in Japan",
        Description:"Experience culinary artforms and local culture in Japan with its cuisine",
        Hyperlink:"blog/food-obsession.html"
    },
    {
        Title:"Exploring the Land of the Rising Sun: A Journey into Japan's Enchanting Tourism",
        Description:"Welcome to a mesmerizing blend of ancient traditions and modern wonders that beckons travelers from across the globe.",
        Hyperlink:"blog/rising-sun.html"
    },
    {
        Title:"Mount Fuji",
        Description:"Explore what it takes to climb on Mount Fuji, the greatest mountain in Japan",
        Hyperlink:"blog/mount-fuji.html"
    },
    {
        Title:"Tokyo Tower",
        Description:"Experience the serene Tokyo nightscape in Tokyo Tower",
        Hyperlink:"blog/tokyo-tower.html"
    },
    {
        Title:"Embracing the Urban Buzz of Shibuya and Reliving History at Osaka Castle",
        Description:"Discover two contrasting yet equally captivating sides of Japan as we delve into the electric energy of Shibuya, Tokyo, and the rich historical legacy of Osaka Castle.",
        Hyperlink:"blog/shibuya-osaka-castle.html"
    },
    {
        Title:"Travel Essentials - Ensuring a Smooth Journey in Japan",
        Description:"Embarking on a memorable adventure to Japan requires careful planning and preparation.",
        Hyperlink:"blog/travel-essentials.html"
    }
];

if (queryString == null) {
    queryString = "";
}

if (queryString != "")  {
    initialQueryString = queryString;
    queryString = queryString.toUpperCase();
}

for (let i in DATABASE) {
    if (DATABASE[i].Title.toUpperCase().includes(queryString)) {
        searchResults += 1;
        content += '<div class="row mb-2"><div class="card"><div class="card-body"><h2 class="card-title">' + DATABASE[i].Title + '</h2><p class="card-text">' + DATABASE[i].Description + '</p><a href="' + DATABASE[i].Hyperlink + '" class="btn btn-secondary"> Read more.. </a></div></div></div>';
    }
}

searchResultElement.innerHTML = searchResults + " Result(s) - You Searched For: " + initialQueryString;
blogContainer.innerHTML = content;