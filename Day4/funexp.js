let demo= function(){
    console.log("hello")
}
console.log(demo)
demo()

//create fun exp to find the largest of 3 numbers that take  inputs from end user 

function demo1(){
    let a=Number(prompt("enter a:"));
    let b=Number(prompt("enter b:"));
    let c=Number(prompt("enter c:"));
    if(a>b && a>c){
        console.log("a is the largest")
    }else if(b>a && b>c){
        console.log("b is largest")
    }else{
        console.log("c is largerst")
    }

    demo1()
 }
