// Block Scope vs Function Scope

var b = "Krupa";

{
    var a = "Vrushank"; // var is Function Scope so we Declare Any where and use easyly
}

console.log(a);

{
    {
        console.log(a);
        console.log(b); // Accses Any where
    }
}