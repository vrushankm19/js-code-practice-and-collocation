// Sort
// slice methord use for create new array not replace original array
let a = [
	{name:"Vrushank",age:12,price:1200},
	{name:"Krupa",age:12,price:8400},
	{name:"Modi",age:12,price:8200},
	{name:"Modiji",age:12,price:6000},
];

const ans = a.slice(0).sort((a,b)=> { // this mether use for clone a array
	return a.price-b.price; // array inside object sort
	// a.price-b.price use for unorder list to order list convert (a-b)
});

const ans2 = a.slice(0).sort((a,b)=> { // this mether use for clone a array
	return b.price-a.price; // unorder sort
	// a.price-b.price use for unorder list to order list convert (a-b)
});

console.log(ans);
console.log(a);

// _____________________Output____________________


// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Vrushank', age: 12, price: 1200}
// 1
// : 
// {name: 'Modiji', age: 12, price: 6000}
// 2
// : 
// {name: 'Modi', age: 12, price: 8200}
// 3
// : 
// {name: 'Krupa', age: 12, price: 8400}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)
// script.js:16 
// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Vrushank', age: 12, price: 1200}
// 1
// : 
// {name: 'Krupa', age: 12, price: 8400}
// 2
// : 
// {name: 'Modi', age: 12, price: 8200}
// 3
// : 
// {name: 'Modiji', age: 12, price: 6000}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)