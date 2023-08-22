let a = {
    nam: "Vrushank",
    age: 26,
    friend: ["Megh", "Yash"],
};
let b = {
    num: 123456789,
    city: "India",
    nam: "Boss", // This vaerble is over right
};

let mn = { ...a, ...b };
console.log(mn);

// ______________________________________

let mn2 = { ...b, ...a }; // name verible values is change
console.log(mn2);
