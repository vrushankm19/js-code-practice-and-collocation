// html in add tag using for loop
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let ans = a.filter(numSort);
console.log("ans", ans);

for (let i = 0; i < ans.length; i++) {
    document.write("<li class='datashow-li'>" + ans[i] + "</li>");
    console.log("array print");
}

function numSort(a) {
    return a % 2 === 0;
}