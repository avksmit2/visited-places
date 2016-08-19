//Back-end


//Front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputNumber = $("input#number").val();

    console.log(inputNumber);
    $("ul#numberList").text(inputNumber);
    event.preventDefault();
  })
})
