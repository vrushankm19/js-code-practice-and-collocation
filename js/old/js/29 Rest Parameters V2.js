// Rest Parameters

let a = (...t) => { // get all Peramiter values 
    let total = 0;

    for (let arg of t) {
        // total = total + arg;
        total += arg; // Addition values
    }

    // for(let arg = 0;arg < t.length;arg++){
    //     total = total + t[arg]; // with Out For of Loop
    // }

    return total; // return final value
}

let w = a(2, 2, 2);
console.log(w);