//Back-end
var pongs = function(inputNumber) {
  var numList = [inputNumber];
  for (i=inputNumber;i>1;i-=1) {
    inputNumber = inputNumber - 1;
    numList.push(inputNumber);
  };
  return numList;
};

//Front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputNumber = $("input#number").val();
    if (isNaN(inputNumber) || inputNumber < 3) {
      alert("please enter a positive integer")
    } else {
      var result = pongs(Number(inputNumber));
    }
    $("ul#numberList").text(result);
    event.preventDefault();
  });
});
