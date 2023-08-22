let a = {
    nam : "Vrushank",
    age : 24,
    friend : ["Megh","Yash","Mihir"],
}
let {nam,age} = a;  // v1 Object values get in variable

let {nam:var1,age:var2} = a;


console.log(`${var1} - ${var2}`);