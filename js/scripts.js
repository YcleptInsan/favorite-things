$(document).ready(function(){
  $("form#faveThings").submit(function(event){
    event.preventDefault();
    var inputList = $("#faveList").val();
    var array = [];

    var split = inputList.split(" ");
    var reverse = split.reverse();
    array.push(reverse);
    console.log(array);
    $("#show").text(array);


  });
});
