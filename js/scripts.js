$(document).ready(function(){
  $("form#faveThings").submit(function(event){
    event.preventDefault();
    // var inputList = $("#faveList").val();
    // var array = [];

    var array = $("#faveList").val().split(" ");

    // var split = inputList.split(" ");
    // var reverse = split.reverse();
    //  array.push(inputList);
    console.log(array);
    $("#show").text(array.reverse());


  });
});
