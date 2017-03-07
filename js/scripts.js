
//UI logic
$(document).ready(function(){
  $("form#leapyear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear1(year);

    $(".year").text(year);

    if (!result){
      $(".not").text("not");

    } else {
      $(".not").text("");
    }
    $("#result").show();
  });

//business logic
  var leapYear1 = function(year){
    if ((year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
};
});
