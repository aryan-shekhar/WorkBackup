const fs=require('fs')
const path=require('path')
const http=require('http')

fs.mkdir(path.join(__dirname,'Training Details'),{},function(err){
    if(err) throw err
    console.log("created directory")
})

fs.writeFile(path.join(__dirname,'Training Details','./Student.html'),
'<h1>Student Name is Aryan </h1>',(err)=>{
    if(err) throw err
    console.log("Created Successfully")
})

fs.readFile(path.join(__dirname,'Training Details','./Student.html'),
'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'Training Details', 'Student.html'), (err, data)=>{
            if (err) throw err
            res.writeHead (200, {'Content-Type': 'text/html'})
            res.end(data)
    }) 
}
})

const PORT= process.env.PORT ||4501
server.listen(PORT, () => console.log('Server started'))


