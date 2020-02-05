const http=require("http");
const fs=require("fs");//creating the file and saving the data.
const server=http.createServer(function(req,res)
{
    fs.readFile(__dirname+"/hello.txt","utf-8",(err,data)=>{//remember one thing whenever we are writing the code of http req we have to put inside the fs..
        res.writeHead(200,{"content-type":"text/plain"});
        res.write(data);
        res.end();
        });
}).listen(3000);

