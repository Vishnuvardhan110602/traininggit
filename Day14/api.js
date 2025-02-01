// let obj = {
//     name : "vikas",
//     id : 1,
//     role :"developer"
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);

// to fetch api 3 ways
// fetch method
// ajax
//axios

// let a = window.fetch(a)
// console.log(a);

//fetch method
// window.fetch("data.json")
// .then((data) => data.json())    // this output is called as array buffer 
// .then((res) => {
//     console.log(res);
//     //console.log(res[0]);
//     //console.log(res[1]); 
// //map() iterate all objects   
// res.map((x) => {
//     console.log(x);
//     console.log(x.name);
//     console.log(x.id);
//     document.body.innerHTML += <h2>${x.name}</h2>
//     document.body.innerHTML += <h2>${x.id}</h2>
// })
// })
let btn = document.getElementById("btn")
console.log(btn);

btn.onclick =()=>{
    let search = document.getElementById("search").value
    console.log(search);
    let per_page = 30
    window.fetch(`https://pixabay.com/api/?key=48514669-1b3e60ce2ee528ec137d0a271&q=${search}&image_type=photo&pretty=true&per_page=${per_page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
        //console.log(res.hits[0]);
    res.hits.map((x) => {
        console.log(x);
        let demo = document.getElementById("demo")
        console.log(demo);
        demo.innerHTML += `<img src=${x.previewURL} />`
    }) 
    })
}