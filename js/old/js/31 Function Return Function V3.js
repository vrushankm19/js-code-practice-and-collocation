// Function Return Function

function a() { // Firs Function
    return function b() { // You Can Retun All Function Like This
        return "Hello World...";
    }
}

const ans = a(); // so ans varible is New Function NOTE:: a Function in stored b function values. so Function b() Stored in Veriable
console.log(ans()); // Return values so we Print Function not call Function