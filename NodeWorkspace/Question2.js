const http=require('http')
const fs = require('fs')
const path= require('path')

fs.mkdir(path.join(__dirname,'Q1'),{},function(err){
    if(err) throw err
    console.log("created directory")
})

fs.writeFile(path.join(__dirname,'Q1','./Q1FIELD.html'),
`<form action="">
<input type="text" placeholder="Username">
<input type="password" placeholder="password">
</form>`,
(err)=>{
    if(err) throw err
    console.log("Created Successfully")
})

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        fs.readFile(path.join(__dirname,'Q1','./Q1FIELD.html'),'utf-8',(err,data)=>{
                if(err) throw err
                res.writeHead (200, {'Content-Type': 'text/html'})
                res.end(data)

})
    }
})

    const PORT= process.env.PORT ||4502
    server.listen(PORT, () => console.log('Server started'))