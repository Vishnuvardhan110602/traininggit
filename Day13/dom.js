let a = document.createElement("h1")
console.log(a);
a.textContent="hello World"
document.body.appendChild(a)
a.style.backgroundColor="red"
//
let ol = document.createElement("ol")
console.log(ol);

let b=document.createElement ("ol")
console.log(b)
ol.style.border="2px blue"
ol.style.padding="10px"

// create a li tag

let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "React.js"

b.appendChild(li1)

let li2 = document.createElement("li")
console.log(li2)
li2.textContent = "Node.s"
b.appendChild(li2)
document.body.appendChild(b)

let table = document.createElement("table");
console.log(table);
table.setAttribute("border","5px solid blue")
document.body.appendChild(table)

for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    console.log(tr1);
    table.appendChild(tr1)

    for (let j = 0; j < 5; j++) {
        let td = document.createElement("td")
        td.style.border = "1px solid black"
        td.style.padding = "20px"
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

document.body.appendChild(table);


