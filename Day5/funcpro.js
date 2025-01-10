function main(a){
    console.log(a);
    console.log(a());
    
}
main(function(){
    return 'i am cdf1'
    
})
main(function(){
    
    return 'i am cdf1'

})
function operation(task){
    console.log(task(10,10))

}
operation(function(a,b){
    
    return a+b
    
    })
operation(function (a,b) {
    return a-b
    
})

//two type keywords
//implicit
// no need of using return keywords
let a =()=> console.log("hello");
a()

// explicit
return keyword in mandatory
let b=()=>{return "hello"}
console.log(b);
console.log(b());

 let main1=(task)=>{
    console.log(task());
    
}
