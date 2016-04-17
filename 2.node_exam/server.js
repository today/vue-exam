var http = require("http");

var books=[
	      { name: '新书 1' },
	      { name: '新书 2' },
	      { name: '新书 3' },
	      { name: '新书 4' },
	      { name: 'Build Something Awesome' }
	    ];

http.createServer(function (req, res) { 
    console.log("I process a request.");
    var ret = {};
    

    if (req.url === '/getBooks'){
    	ret.data = books;
    	ret.message = "获取图书列表成功。";
    }else if (req.url.indexOf('/addBook') > -1 ){
    	ret.message = "添加图书成功。";
    }else {
		ret.message = "Invalid URL.";
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Content-Type", "application/json"); 
    res.write( JSON.stringify(ret) );
    res.end();

}).listen(8000);
console.log("Server running at http://localhost:8000");
