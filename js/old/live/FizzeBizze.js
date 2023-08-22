//NOTE : Fizze meanse any values devided by 3
//NOTE : Bizze meanse any values devided by 5
//NOTE : FizzeBizze meanse any values devided by 3 and 5


let hello = (a) =>{
  for(let i = 0;i < a; i++){
    if(i % 3 ===0 && i % 5 === 0){
      console.log("FizzeBizze");
    } else if (i % 3 ===0) {
      console.log("Fizze");
    } else if (i % 5 ===0) {
      console.log("Bizze")
    } else{
      console.log(i);
    }
  }
}

hello(15); // peramiter pass 15