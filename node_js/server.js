const http = require("http");
const server = http.createServer((request, response) => {
    console.log("server is started....")
    // response.end("<h1> Server is created succesfully....</h1>")
    if (request.url === "/home") {
        response.end("<h1> Welcome to home page </h1>")
    }
    else if (request.url === '/about') {
        response.end("<h1> Welcome to About page</h1>")   

    }
    else if (request.url === '/services') {
        response.end("<h1> Welcome to Services page</h1>")
    }
    else {
        response.end("<h1> file not found </h1>")
    }

})
server.listen(4000, () => {
    console.log("server is started on PORT: 4000")
})