// Callback Function

function a1(uname) {
    console.log("Hello i Am 1");
    console.log(uname);
}

function a2(a3) { // a3 is Fuction and Old of This Function name a1
    console.log("Hello i Am 2");
    a3("Vrushank"); // 
}

a2(a1);