const http=require("http")
const port=3000
const server=http.createServer((req,res)=>{
    const data={
        name:"ashenafi hadush",
        age:25,
        email:"hadushr11@gmail.com",
        address:"Axum University, Tigray, Ethiopia"
    }
    const jsonData=JSON.stringify(data,null,2);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(jsonData);
    res.end("\nResponse sent successfully.");
})  
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})