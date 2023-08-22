// let quise = {
//     que: "What is Javascript",
//     a: "html",
//     b: "css",
//     c: "jQuery",
//     d: "JS",
//     an: "JS"
// }

// document.getElementById("head").innerHTML = quise.que;
// document.getElementById("submit").addEventListener("click", checkRadio);

// document.getElementsByClassName('bulet')[0].innerHTML = quise.a;
// document.getElementsByClassName('bulet')[1].innerHTML = quise.b;
// document.getElementsByClassName('bulet')[2].innerHTML = quise.c;
// document.getElementsByClassName('bulet')[3].innerHTML = quise.d;

// function checkRadio() {
//     let radioButtons = document.getElementsByClassName("bulet");
//     for (let i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             if (quise.an == radioButtons.checked) {
//                 console.log("Radio button " + i + " is checked");
//             }
//             console.log("secoend if condition run");
//         } else {
//             console.log("Radio button " + i + " is not checked");
//         }
//     }
// }

// let quise = {
//     que: "What is Javascript",
//     a: "html",
//     b: "css",
//     c: "jQuery",
//     d: "JS",
//     an: "JS"
// }

// document.getElementById("head").innerHTML = quise.que;
// document.getElementById("submit").addEventListener("click", checkRadio);

// document.getElementsByClassName('bulet')[0].innerHTML = quise.a;
// document.getElementsByClassName('bulet')[1].innerHTML = quise.b;
// document.getElementsByClassName('bulet')[2].innerHTML = quise.c;
// document.getElementsByClassName('bulet')[3].innerHTML = quise.d;

// function checkRadio() {
//     let radioButtons = document.getElementsByClassName("bulet");
//     for (let i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             if (quise.an == radioButtons[i].innerHTML) {
//                 console.log("Correct Answer");
//                 break;
//             }
//             console.log("Correct Answer 222222");
//         } else {
//             console.log(`Wrong Answer ${i} ${radioButtons[i].innerHTML}`);
//         }
//     }
// }

let quizzes = [{
        que: "What is Javascript",
        a: "html",
        b: "css",
        c: "jQuery",
        d: "JS",
        an: "JS"
    },
    {
        que: "What is the smallest header in HTML by default?",
        a: "h1",
        b: "h2",
        c: "h6",
        d: "h4",
        an: "h6"
    },
    {
        que: "How to create an ordered list in HTML?",
        a: "ul",
        b: "ol",
        c: "href",
        d: "b",
        an: "ol"
    },
    {
        que: "HTML files are saved by default with the extension?",
        a: ".html",
        b: ".h",
        c: ".ht",
        d: "None of the above",
        an: ".html"
    }
];

let currentQuizIndex = 0;

loadQuiz();

document.getElementById("submit").addEventListener("click", checkAnswer);
document.getElementById("next").addEventListener("click", nextQuiz);

function loadQuiz() {
    // console.log("loadQuiz 1111");
    let currentQuiz = quizzes[currentQuizIndex];
    document.getElementById("head").innerHTML = currentQuiz.que;
    let optionInput = document.querySelectorAll(".bulet");
    optionInput[0].nextElementSibling.innerHTML = currentQuiz.a;
    optionInput[1].nextElementSibling.innerHTML = currentQuiz.b;
    optionInput[2].nextElementSibling.innerHTML = currentQuiz.c;
    optionInput[3].nextElementSibling.innerHTML = currentQuiz.d;
}

function checkAnswer() {
    let radioButtons = document.querySelectorAll(".bulet");
    for (let i = 0; i < radioButtons.length; i++) {
        if (
            radioButtons[i].checked &&
            quizzes[currentQuizIndex].an == radioButtons[i].nextElementSibling.innerHTML
        ) {
            document.getElementById("anser").innerHTML = "Correct Answer";
            break;
        } else {
            document.getElementById("anser").innerHTML = "Wrong Answer";
        }
    }
}

function nextQuiz() {

    currentQuizIndex++;
    if (currentQuizIndex < quizzes.length) {
        loadQuiz();
        let radioButtons = document.querySelectorAll(".bulet");
        for (let i = 0; i < radioButtons.length; i++) {
            document.querySelectorAll(".bulet")[i].checked = false;
        }
    } else {
        document.getElementById("head").innerHTML = "End of Quiz";
        let optionInputs = document.querySelectorAll(".bulet");
        for (let i = 0; i < optionInputs.length; i++) {
            optionInputs[i].nextElementSibling.innerHTML = "";
        }
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "none";
    }
    console.log(currentQuizIndex);
}