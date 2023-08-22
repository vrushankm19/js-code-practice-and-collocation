// function inside function

let a = () => { // main function

    let aa = () => { // inner 1
        console.log("Enter Values 2...");
    }

    let b = (num1, num2) => num1 + num2; // inner 2

    console.log("Enter Values...");

    aa(); // Output 1

    let r = b(10, 4); // Output 2
    console.log(r);
}

a();