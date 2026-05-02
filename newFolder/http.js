const http=require("http")
const port=3000

const server=http.createServer((req,res)=>{
  if(req.url===3000){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Welcome to the Home Page!</h1>")
    res.end("This is the end of the response.")
  }else if(req.url==="/about"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Welcome to the About Page!</h1>")
    res.end("This is the end of the response.")
  }
  else if(req.url==="/contact"){
    // res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Welcome to the Contact Page!</h1>")
    res.end("This is the end of the response.")
  }
  else if(req.url==="/services"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Welcome to the Services Page!</h1>")
    res.end("This is the end of the response.")
  } else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.write("<h1>404 Not Found</h1>")
    res.end("The page you are looking for does not exist.")
  }
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})