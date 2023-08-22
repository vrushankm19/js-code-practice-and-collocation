// Callback Function

function a1() { // First Function
    console.log("Inside My Func 2");
}

function a2(a3) { // Secand Function [a3 Hold a1 Function value]
    console.log("Hello i Am 2");
    a3(); // Print Function
}

a2(a1); // Secand Function In Pass Preramiter as a First Function