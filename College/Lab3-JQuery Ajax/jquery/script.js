// Code di sini
$("#changeColorBtn").click(function() {
  $("#changeColorBox").css("background-color", "red");
});

$("#movableRightBtn").click(function() {
  $("#movableRightBox").animate({
    right: "0px"
  });
});

// ANIMATION RIGHT LEFT
$("#movableRightLeftBtn").click(function() {
  $("#movableRightLeftBox")
    .animate({
      right: "0px",
      left: "auto"
    }, 1000)
    .animate({
      right: "auto",
      left: "0px"
    }, 1000);
});

$("#largerBtn").click(function() {
  $("#largerBox").animate({
    width: "150px",
    height: "150px"
  });
});

$("#fadeOutBtn").click(function() {
  $("#fadeOutBox").fadeOut(1000);
});

