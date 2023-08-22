// Lexical Scope

//NOTE:: Lexical Scope is work Inner to Outer Side 

// Function inside function in block scope in same name varible use
function a() {
    const w = "Hello"; // varible w

    function b() { // Block Scope
        const w = "Bye"; // varible w 2
        console.log(w);
    }
    console.log("Lexical Scope Check");

    console.log(w);

    console.log(b());
}

a(); // Function Call