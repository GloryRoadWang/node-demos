var http = require('http');
var url = require('url');

function start(route, handle){

    function onRequest(request, response){
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        // var content = route(handle, pathname, response);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write(content);
        // response.end();

        request.addListener("data", function(postDataChunck){
            postData += postDataChunck;
            console.log("received POST data chuck '" + postDataChunck +"'.");
        })

        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        })

        // route(handle, pathname, response);

    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started!');
}

exports.start = start;

