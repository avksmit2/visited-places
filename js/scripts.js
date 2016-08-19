//Back-end
var pongs = function(inputNumber) {
  var numList = inputNumber;
  for (i=inputNumber;i>1;i-=1) {
    inputNumber = inputNumber - 1;
    numList += inputNumber;
    console.log(numList);
  };
  return numList;
};

//Front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputNumber = $("input#number").val();
    var result = pongs(inputNumber);

    $("ul#numberList").text(result);
    event.preventDefault();
  });
});
