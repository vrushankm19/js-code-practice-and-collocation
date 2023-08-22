let flipColl = [{
        name: "HTML",
        images: "html.png"
    },
    {
        name: "JS",
        images: "JavaScript.png"
    },
    {
        name: "CSS",
        images: "css.png"
    },
    {
        name: "php",
        images: "php.png"
    },
    {
        name: "scss",
        images: "scss.png"
    },
    {
        name: "python",
        images: "python.png"
    }
];

const parentFlip = document.querySelector("#main-flip");

const flipColl2 = flipColl.concat(flipColl);

let clickCount = 0;
let firstCard = "";
let secendtCard = "";

const card_matches = () => {
    let card_selected = document.querySelectorAll(".card_selected");
    // console.log(card_selected);
    card_selected.forEach((curElem) => {
        curElem.classList.add("card_match");
    });
}

const resetGame = () => {
    clickCount = 0;
    firstCard = "";
    secendtCard = "";

    let card_selected = document.querySelectorAll(".card_selected");

    card_selected.forEach((curElem) => {
        curElem.classList.remove("card_selected");
    });
}

parentFlip.addEventListener('click', (event) => {
    let curCard = event.target;
    if (curCard.id === "main-flip") return false;
    clickCount++;
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        } else {
            secendtCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        if (firstCard !== "" && secendtCard !== "") {
            if (firstCard === secendtCard) {
                // curCard.classList.add('card_match');
                setTimeout(() => {
                    card_matches();
                    resetGame();
                }, 1000);
            } else {
                setTimeout(() => {
                    resetGame();
                }, 1000);
            }
        }
    }
})

let shuffledChild = Array.from(flipColl2).sort(() => 0.5 - Math.random());

shuffledChild.forEach(function(flipCollCount, i) {
    // console.log(flipCollCount);
    const childFlip = document.createElement("div");
    childFlip.classList.add("card");
    childFlip.dataset.name = shuffledChild[i].name;
    // childFlip.style.backgroundImage = `url(${shuffledChild[i].images})`;
    const front_div = document.createElement("div");
    front_div.classList.add("front-div");

    const back_div = document.createElement("div");
    back_div.classList.add("back-div");

    back_div.style.backgroundImage = `url(${shuffledChild[i].images})`;

    parentFlip.appendChild(childFlip);
    childFlip.appendChild(front_div);

    childFlip.appendChild(back_div);
})