$(document).ready(function(){
  $("form#faveThings").submit(function(event){
    event.preventDefault();
    var inputList = $("#faveList").val();
    var array = [];

    var listToArray = inputList.split(" ");
    array.push(listToArray);
    console.log(array);
    $("#show").text(inputList);


  });
});
