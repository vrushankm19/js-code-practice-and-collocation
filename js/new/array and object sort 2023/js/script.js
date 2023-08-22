// object

let a = {
    name: "Vrushank",
    age: 26,
    num: 957441707,
    location: {
        city: "Ahmedabad",
        contry: "India"
    }
}

let ans = Object.values(a);

ans.forEach(function(point) {
    document.write("<li>" + point + "</li>");
});
// console.log(ans);

// New learn Ap 26 After

// 1 document.createElement();
// .classlist