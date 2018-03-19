$(document).ready(function () {

    let btn=$("#btn");
    let input=$("#input");
    let ul=$("#ul");

    function refreshTodos() {
      ul.empty();
      $.get('/todo',function (data) {
          for(todo of data){
              ul.append($("<li>"+todo+"</li>"));
          }
      })
    }

    btn.click(function () {
      let value=input.val();
      input.val("");
      console.log(value);
      $.get(
          '/addTodo?p='+value,
          function (data) {
              if(data!=="Success"){
                  alert("Couldn't add todo");
              }
              else{
                  refreshTodos();
              }
          }
      )
    })
});