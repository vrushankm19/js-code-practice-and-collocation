let a = {
  name : "Vrushank",
  age : 25,
  massge : ["Hello","Hey","Hi"],
}

console.log(Object.keys(a));

console.log(typeof (Object.keys(a))); // Check Type of Object()

let val = Array.isArray((Object.keys(a))); // This Method is give Array

console.log(val);
