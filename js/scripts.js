//Back-end
function visitedPlace(place, location, year, season, landmarks) {
  this.placeName = place;
  this.locationInfo = location;
  this.yearVisited = year;
  this.seasonVisited = season;
  this.landmarks = landmarks;
}
//Front-end
$(document).ready(function() {
  $("form#placeInfo").submit(function(event) {
    event.preventDefault();

    var inputPlace = $("input#placeName").val();
    var inputLocation = $("input#location").val();
    var inputYear = $("input#yearVisited").val();
    var inputSeason = $("input#seasonVisited").val();
    var inputLandmarks = $("input#landmarks").val();

    var newPlace = new visitedPlace(inputPlace, inputLocation, inputYear, inputSeason, inputLandmarks);

    $("ul#placeNames").append("<li><span class='place'>" + inputPlace + "</span></li>");

    $("input#placeName").val("");
    $("input#location").val("");
    $("input#yearVisited").val("");
    $("input#seasonVisited").val("");
    $("input#landmarks").val("");
    $("#placeDetails").hide();
    
    $(".place").last().click(function(){
      $("#placeDetails").show();
      $("#placeDetails h2").text(inputPlace);
      $(".location").text(inputLocation);
      $(".year").text(inputYear);
      $(".season").text(inputSeason);
      $(".landmarks").text(inputLandmarks);
    })


  });
});
