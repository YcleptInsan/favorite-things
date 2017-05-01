$(document).ready(function(){
  $("form#faveThings").submit(function(event){
    event.preventDefault();

    var array = $("#faveList").val().split(" ");
    //reverse array
    //array.reverse()
    console.log(array);
    var one = array[1];
    var two = array[2];
    var three = array [3];
    var array2 = []
    array2.push(one, two, three)
    console.log(array2)
    $("ul").text(one);
    $("ul").text(two);


  });
});
