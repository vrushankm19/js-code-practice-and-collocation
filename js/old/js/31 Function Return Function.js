// Function Return Function

function a() { // Firs Function
    function b() { // Second Function
        console.log("Hello I am Second Function...");
    }
    return b; // Return Second Function
}

const ans = a(); // so ans varible is New Function 
//NOTE:: a Function in stored b function values. so Function b() is Stored in ans Veriable.

ans(); // ans Function old name is b()