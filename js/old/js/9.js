let a = +prompt("Enter Your Start Values");
let b = +prompt("Enter Your End Values");

for (; a <= b; a++) {
    if (a === 13) { //loop in value 13 so loop break
        continue;
    }
    console.log(a);
}