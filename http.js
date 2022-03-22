const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('WELCOME TO MY HOME PAGE')
    }
    if(req.url === '/about'){
        res.end('THIS IS THE ABOUT PAGE')
    }
    res.end(`
    <h1> Oops!</h1>
    <p> We cant seem to find the page you are looking for </p>
    <a href = "/"> Home Page </a>`)
})

server.listen(5000)