// Sort
// this Mether change original array
let a = [
	{name:"Vrushank",age:12,price:1200},
	{name:"Krupa",age:12,price:8400},
	{name:"Modi",age:12,price:8200}
];

a.sort((a,b)=> {
	return a.price-b.price; // array inside object sort
	// a.price-b.price use for unorder list to order list convert (a-b)
});

console.log(a);

// _____________________Output____________________


// 0
// : 
// {name: 'Vrushank', age: 12, price: 1200}
// 1
// : 
// {name: 'Modi', age: 12, price: 8200}
// 2
// : 
// {name: 'Krupa', age: 12, price: 8400}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)