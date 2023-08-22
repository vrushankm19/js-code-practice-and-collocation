const a = ["Hello","My","Name","is"];
let c = []; // new array values stored in variable c
for(let b of a){ //For of loop print a all values in b
    c.push(b.toUpperCase());// mostly use this loop for data copy past 
}
console.log(c);