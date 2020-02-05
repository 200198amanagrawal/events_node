const http=require("http");
const server=http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type":"text/plain"});//even though we are writing html it will convert it to plain text
    res.write("<h1>Node js tutorial running</h1>");
    res.end();
}).listen(3000);