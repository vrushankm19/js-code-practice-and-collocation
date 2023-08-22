const a = [ 
    {name:"Vrushank",age:24,lastname:"modi"}, //i want this object in only name
    {name:"Yash",age:24,lastname:"khatari"}, //i want this object in only age
    {name:"Megh",age:24,lastname:"khalash"}, //i want this object in only lastname
]

let [{name:FastName, lastname:FastLastName},{age:SecendAge},{lastname:TherdLastName}] = a; // array in side destructuring and verable name change
console.log(`Obj fast is name ${FastName} - Obj2 age is ${SecendAge} - Obj3 lastname is ${TherdLastName}`);
console.log(`Object 1 in Last Name Value is : ${FastLastName}`);