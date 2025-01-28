function parent(){
    function child(){
        console.log("i am child");
    }
    child()
}
parent()


var a=10;
var b=20;
function parent(){
    var a="hello";
    var b="hii";
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b);
}
parent()


//disadv of closure 
// memory wastage
// when ever we the child function mutiple times, multiple times closure will be  created in heap area

function parent(){
    function child(){
        console.log("i am child");
        function child_1(){
            console.log("")
        }
    }
    child()
}
parent()