// HEADING COLOR EFFECT

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

let red1 = Math.floor(Math.random() * 255);
let green1 = Math.floor(Math.random() * 255);
let blue1 = Math.floor(Math.random() * 255);

let red2 = Math.floor(Math.random() * 255);
let green2 = Math.floor(Math.random() * 255);
let blue2 = Math.floor(Math.random() * 255);

let red3 = Math.floor(Math.random() * 255);
let green3 = Math.floor(Math.random() * 255);
let blue3 = Math.floor(Math.random() * 255);

let red4 = Math.floor(Math.random() * 255);
let green4 = Math.floor(Math.random() * 255);
let blue4 = Math.floor(Math.random() * 255);

let red5 = Math.floor(Math.random() * 255);
let green5 = Math.floor(Math.random() * 255);
let blue5 = Math.floor(Math.random() * 255);

let red6 = Math.floor(Math.random() * 255);
let green6 = Math.floor(Math.random() * 255);
let blue6 = Math.floor(Math.random() * 255);

one.style.color = `rgb(${red1},${green1},${blue1})`;
two.style.color = `rgb(${red2},${green2},${blue2})`;
three.style.color = `rgb(${red3},${green3},${blue3})`;
four.style.color = `rgb(${red4},${green4},${blue4})`;
five.style.color = `rgb(${red5},${green5},${blue5})`;
six.style.color = `rgb(${red6},${green6},${blue6})`;

// MAIN

let mainBox = document.querySelector(".btn-container");
let output = document.querySelector(".result");
let backBtn = document.querySelector(".backBtn");
let moreBtn = document.querySelector(".moreBtn");
let heading = document.querySelector(".heading");
let firstLine = document.querySelector(".first-line");
let secLine = document.querySelector(".second-line");

let catFactBtn = document.querySelector(".fact-btn");
let earthBtn = document.querySelector(".earth-facts");
let randomFactBtn = document.querySelector(".useless-facts");
let jokeBtn = document.querySelector(".joke-btn");
let quoteBtn = document.querySelector(".quote-btn");

let cat_fact = false; let earth_fact = false; let random_fact = false; let joke = false; let quote = false;

catFactBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = true;
    earth_fact = false;
    random_fact = false;
    joke = false;
    quote = false;
    heading.innerText = "Random Cat Facts";
    moreBtn.innerText = "more facts";
    randomCatFact();
});

earthBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    earth_fact = true;
    random_fact = false;
    joke = false;
    quote = false;
    heading.innerText = "Random Earth Facts";
    moreBtn.innerText = "more facts";
    earthFacts();
});

randomFactBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    earth_fact = false;
    random_fact = true;
    joke = false;
    quote = false;
    heading.innerText = "Random Facts";
    moreBtn.innerText = "more facts";
    uselessFact();
});

jokeBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    earth_fact = false;
    random_fact = false;
    joke = true;
    quote = false;
    heading.innerText = "Programming Jokes";
    moreBtn.innerText = "more jokes";
    programmingJokes();
});

quoteBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    earth_fact = false;
    random_fact = false;
    joke = false;
    quote = true;
    heading.innerText = "Game Of Thrones Quotes";
    moreBtn.innerText = "more quotes";
    GOTquotes();
});

moreBtn.addEventListener("click", () => {
    if (cat_fact) {
        randomCatFact();
    } else if (earth_fact) {
        earthFacts();
    } else if (random_fact) {
        uselessFact();
    } else if (joke) {
        programmingJokes();
    } else if (quote) {
        GOTquotes();
    }
});

backBtn.addEventListener("click", () => {
    mainBox.style.display = "flex";
    output.style.display = "none";
});

// Random Cat Facts
let urlForCat = "https://catfact.ninja/fact";
function randomCatFact() {
    fetch(urlForCat)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.fact}"`;
            secLine.innerText = "";
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Random Earth Facts
let earthUrl = "https://api.bootprint.space/all/earth";
function earthFacts() {
    fetch(earthUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.fact}"`;
            secLine.innerText = "";
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// useless facts 
let uselessFactUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
function uselessFact() {
    fetch(uselessFactUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.text}"`;
            secLine.innerText = "";
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Random Programming Jokes
let codingJokesUrl = "https://v2.jokeapi.dev/joke/Programming";
function programmingJokes() {
    fetch(codingJokesUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (data.type == "twopart") {
                firstLine.innerText = data.setup;
                secLine.innerText = `:- ${data.delivery}`;
            } else if (data.type == "single") {
                firstLine.innerText = data.joke;
                secLine.innerText = "";
            }
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Game of Thrones quotes
let GOTUrl = "https://api.gameofthronesquotes.xyz/v1/random";
function GOTquotes() {
    fetch(GOTUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.sentence}"`;
            secLine.innerText = `:- ${data.character.name}`;
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}
