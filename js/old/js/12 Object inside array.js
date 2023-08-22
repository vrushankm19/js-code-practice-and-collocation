// array in side Object
// Very useful in real World Applicaion

const a = [ //array in side Object
    {name:"Vrushank",age:24,lastname:"modi"},
    {name:"Yash",age:24,lastname:"khatari"},
    {name:"Megh",age:24,lastname:"khalash"},
]

for(let aa of a){ //print verable a using for of loop
    console.log(aa.lastname);
}