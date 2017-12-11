$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    event.preventDefault();
    var inputedNum=$("#userInput").val();
    console.log(inputedNum);
    var output=pingPong(inputedNum);
    output.forEach(function(element){
      $("#solution").append("<li>" + element +"</li");
    });
  });
});

function pingPong(inputedNum){
  var output=[];
  for(var i=1; i<=inputedNum ;i++){
    if(i % 15 ===0){
      output.push("ping-pong");
    }else if(i % 5 ===0){
      output.push("pong");
    }else if( i % 3 === 0){
    output.push("ping");
  }else{
    output.push(i);
  }
  }
  console.log(output);

  return output;
}
