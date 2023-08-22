let a = {
    nam : "Vrushank",
    age : 24,
    friend : ["Megh","Yash","Mihir"],
    year : 2022,
}
let {nam,age,...aa} = a;

console.log(aa);