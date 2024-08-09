const myURL=new URL('http://mywebsite.com/hello.html?id=10245&status=active')

console.log(myURL.hostname)
console.log(myURL.search)
console.log(myURL.searchParams)
myURL.searchParams.append('xyz','123')
console.log(myURL.searchParams)

myURL.searchParams.forEach((value,name)=>{
    console.log(`${name}:${value}`)
})

