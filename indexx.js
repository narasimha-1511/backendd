const http = require("http");

const server = http.createServer((req, res) =>{
    res.setHeader("Content-Type", "text/html");


    if(req.url === "/login"){
        res.write("<html> <head> <title> Node Js </title> </head> <body> <h1> Login </h1> </body> </html>");
        res.end();
        return;
    }

    res.write("<html> <head> <title> Node Js </title> </head> <body> <h1> Hello I am narasimha </br> and this is the things we do </h1> </body> </html>");
    res.end();
})

const port = 3000;

const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});