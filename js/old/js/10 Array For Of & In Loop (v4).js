let a = ["You","Are","Good"];
let nn = [];// new verable store in nn
for(let b in a){
  nn.push(a[b].toUpperCase());// for in loop use for print index in your array
}
console.log(nn);