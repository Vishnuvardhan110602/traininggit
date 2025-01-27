console.log(typeof document);
console.log(window);
console.log(document.doctype);
console.log(document.body);
console.log(document.title);
document.title = "Filpkart"
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
document.links[0].href="http://www.youtube.com"
document.links[1].href="http://www.flipkart.com"

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent= "BATCH 4"
a.style.backgroundColor='red'
a.style.textAlign='center'

// methods
// in direct access in dom
// document.getElementsByClassName("value")
// document.getElementsByTagName("value")
// document.getElementsByName("value")
// document.querySelector("value")
// document.querySelectorAll("value")
let c = document.getElementsByTagName('p')
console.log(c);
console.log(c[0]);
console.log(c[1].textContent);
c[0].textContent="hello"
c[1].style.border="5px solid red"
console.log(c);
let d=document.getElementsByName("demo2")
console.log(d)
console.log(d[1])
d[1].textContent="hello"
// c[1].style.border="5px solid red"
