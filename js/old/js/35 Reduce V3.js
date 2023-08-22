// Reduce

let numbers = [ // array inside object
    {mname:"Vrushnk", price:2, fname:"Yash"},
    {mname:"Krupa", price:5, fname:"Monika"},
    {mname:"Mayur", price:2, fname:"Dhiraj"}
];

let totalamount = numbers.reduce((num1,num2) => {
  return num1 + num2.price;
}, 0);

console.log(totalamount);