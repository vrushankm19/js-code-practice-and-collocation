// Sort

let a = [1,43,300,400,1200,3,10,4];

// a.sort((a,b) =>{
//  return a-b; // Normal function
// });

a.sort((a,b) => a-b); // Arrow Function [order]

// a.sort((a,b) => b-a); // Arrow Function [unorder]

// this function use for asending order numbers

console.log(a);

// _____________________ANS__________________

// [1, 3, 4, 10, 43, 300, 400, 1200]