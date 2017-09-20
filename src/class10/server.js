let connect=require('connect');
let app = connect();
let fs= require('fs');
const PORT=8181;

app.use('/getData', function(req, res, next){
	let resData={
		code:0
	};

	res.writeHead(200,{
		'Content-Type':'text/json',
		//解决跨域问题
		'Access-Control-Allow-Origin':'*'
	});

	try{
		resData.data = fs.readFileSync('./src/class10/data.json','utf-8');
	}catch(err){
		resData.code=-1;
		resData.msg='read data error,' + err;
		res.write(JSON.stringify(resData));
		res.end();
		return;
	}

	setTimeout(function(){
		res.write(JSON.stringify(resData));
		res.end();
	},2000);
});

app.listen(PORT, function(){
	console.log('listening on Port: ' + PORT);
});

