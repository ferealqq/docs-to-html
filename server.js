const express = require('express');
const path = require('path');
const app = express();
const { fetchFileData } = require('./formatHtml');

const PORT = process.env.PORT || 7000;

app.get('/api/data',function(req, res) {
	fetchFileData().then((data)=>{
		res.send(data)
	});
});

console.log("SERVER RUNNING ON PORT: ",PORT)
app.listen(PORT);	