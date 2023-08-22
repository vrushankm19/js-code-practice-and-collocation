// Rest Parameters

//NOTE: [...num3] Three dote means rest perameters

let a = (num1, num2, ...num3) => { // This Theree varible get Only 3 values so we use rest parameters for hold other values
    console.log(num1); // This Varible hold 10
    console.log(num2); // This Varible hold 20
    console.log(num3); // This Varible hold 30 and 9, 8 ,5 ,4 all values stored in Array Formet
}

let ans = a(10, 20, 30, 9, 8, 5, 4); // Pass 7 Peramiters