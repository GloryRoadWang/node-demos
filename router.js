function route(handle, path, response, postData){
    console.log('About to route a request path for ' + path);
    // console.log('handle[path]:', handle[path]);
    if(typeof handle[path] == 'function'){
        return handle[path](response, postData);
    }else {
        console.log("No request handler found for " + path);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;