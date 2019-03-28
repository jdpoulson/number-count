$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();
    var numTo = parseInt($("input#count").val());
    var numBy = parseInt($("input#count2").val());
    for (var i = 0; i <= numTo; i += numBy) {
      $(".counter").append("<p>" + i + "<p>");
    };
  });
});
