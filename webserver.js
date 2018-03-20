// Api
let todos=[];

const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const file=path.join(__dirname,"todo.txt");

 refreshTodos();

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
   fs.writeFile(
       file,
       task+',',
       {
           flag:'a'  // 'a' for append  // 'w' for write
       },
       function (err) {
           if(err){
               throw err;
           }
           else{
               console.log("File Written");
           }
       }
   )
}
function refreshTodos() {
    // Read todos from file
    fs.readFile(file,function (err,data) {
        if(err){
            throw err;
        }
        else{
            let str=data.toString();
            let arr=str.split(',');
            arr.splice(arr.length-1,1);
            todos=arr;
        }
    })
}