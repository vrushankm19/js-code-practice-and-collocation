// Default Parameters

// ____________New And Easy Methoed___________

let a = (num1, num2, num3 = 0) => { // Default Values Set
    return num1 + num2 + num3;
}

let ans = a(10, 10);
console.log(ans);

// ___________________Old Methoed____________

let aa = (num1, num2, num3) => {

    if (typeof num3 === "undefined") {
        num3 = 1; // Set Menualy Set Default Values of num3
    }

    return num1 + num2 + num3;
}

let ans2 = aa(10, 10); // Not Pass num3 Peramiter so Give [NaN] Error
console.log(ans2)