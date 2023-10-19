// fetch("https://data.covid19india.org/v4/min/timeseries.min.json").then((covidData) => {
//     return covidData.json();
// }).then((covidDataSec) => {
//     console.log(covidDataSec.AN.dates);
// }).catch((error) => {
//     alert(`Error is: ${error}`);
// });

// console.log("1");
// async function fetchData() {
//     try {
//         const response = await fetch('https://data.covid19india.org/v4/min/timeseries.min.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log(data);
//         // Process the fetched data here
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();
// console.log("2");

// Aug 22
// fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then((response) => {
//     return response.json();
// }).then((data) => {
//     let allData = data;
//     console.log(allData);
//     mainDatahold(allData);
// }).catch((error) => {
//     console.log(`Error is: ${error}`);
// });

// function mainDatahold(allData) {
//     let containerDiv = document.createElement("div");
//     document.body.append(containerDiv);
//     containerDiv.classList.add("containerdiv");

//     allData.forEach((element) => {
//         let data = element;
//         let img = document.createElement("img");
//         img.classList.add("img");

//         img.src = data.url;
        
//         let title = document.createElement("h1");
//         title.innerHTML = data.title;
//         title.classList.add("title");

//         let mainDiv = document.createElement("div");
//         mainDiv.append(img, title);
//         mainDiv.classList.add("maindiv");

//         document.querySelector(".containerdiv").append(mainDiv);
//     });
//     console.log(supMainDiv);
// }

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error is: ${error}`);
    }
}


