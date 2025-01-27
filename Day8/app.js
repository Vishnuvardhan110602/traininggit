function main3(m,n) 
{
    new Promise((resolve , reject) => {
    setTimeout(() => {
        if(isNaN(m) || isNaN(n)){
            return reject()
        }
        for (let i=m ; i<=n ;i++)
        {
            console.log(i)
        }
        return resolve()
    }, 5000)
})
.then(() =>console.log("Room is cleaned"))
.catch(() =>console.log("Room is not cleaned"))
}
main3(1,"10a")