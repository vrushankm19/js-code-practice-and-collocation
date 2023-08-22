// Lexical Scope

//NOTE:: Lexical Scope is work Inner to Outer Side 
// Not Outer to Inner

{ // Block 1
    const w = "Bye";

    function a() { // Inner to Outer (Work)

        function b() {
            console.log(w);
        }
    }

    a(); // Function Call

    console.log(w);
}

// ___________________Example 2_____________

{ // Block 2

    function a() { // Outer to Inner (Not Work)

        function b() {
            const w = "Bye";
            console.log(w);
        }
    }

    a(); // Function Call

    console.log(w);
}