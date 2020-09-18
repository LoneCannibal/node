const http=require("http");
function serve(req,res)
{
    res.write("RESPNOSE:Server is up and running");
    res.end();
}
var server=http.createServer(serve);
server.listen(8080);

