const a = [ //array in side Object
    {name:"Vrushank",age:24,lastname:"modi"}, //i want this object in only name
    {name:"Yash",age:24,lastname:"khatari"}, //i want this object in only age
    {name:"Megh",age:24,lastname:"khalash"}, //i want this object in only lastname
]

let [{name},{age},{lastname}] = a; // array in side destructuring
console.log(`Obj fast is name ${name} - Obj2 age is ${age} - Obj3 lastname is ${lastname}`);