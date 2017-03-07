$(document).ready(function(){
  $("form#leapyear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear1(year);
    $("#result").text(result);
  });
  var leapYear1 = function(year){
    if ((year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return "Leap Year";
    } else {
      return "Not a lear year";
    }
};
});
