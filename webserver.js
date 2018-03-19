// Api
let todos=[];

const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const file=path.join(__dirname,"todo.json");

app.listen(3333,function () {
    console.log("Server started on http://localhost:3333")
});


app.use('/',express.static(path.join(__dirname,'Static')));

app.get('/todo',function (request,response) {
   response.send(todos);
});

app.get('/addTodo',function (request,response) {
   //todos.push(request.query.p);
   addTodos(request.query.p);
   response.send("Success");       // Mandatory to send response
});

function addTodos(task) {
   todos.push(task);
   let json=JSON.stringify("task",todos);
   fs.writeFile(
       file,
       json,
       function (err) {
           if(err){
               throw err;
           }
           else{
               console.log("File written");
           }
       }
   )
}
