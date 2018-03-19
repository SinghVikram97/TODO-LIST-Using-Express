// Api

const express=require('express');
const path=require('path');
const app=express();

app.listen(3333,function () {
    console.log("Server started on http://localhost:3333")
});

let todos=[];

app.use('/',express.static(path.join(__dirname,'Static')));

app.get('/todo',function (request,response) {
   response.send(todos);
});

app.get('/addTodo',function (request,response) {
   todos.push(request.query.p);
   response.send("Success");       // Mandatory to send response
});

