let a = {
    nam : "Vrushank",
    age : 24,
    friend : ["Megh","Yash","Mihir"],
    year : 2022,
}
let {nam:v1,age:v2,...aa} = a;

console.log(`${v1} - ${v2} - ${aa}`);