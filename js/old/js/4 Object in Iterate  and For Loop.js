let a = {
  name : "Vrushank",
  age : 25,
  friend : ["Jay","Megh","Yesh","Mihir"],
}

// console.log(a);

for (let key in a){
  console.log(`${key} : ${a[key]}`);
}