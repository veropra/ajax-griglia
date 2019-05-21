$(document).ready(function(){
  $(".smallsquare").click(function(){
    var nocolor = $(this);

    if ((!nocolor.hasClass("yellow")) & (!nocolor.hasClass("green"))){

      $.ajax({
        "url": "https://www.boolean.careers/api/random/int",
        "method": "GET",
        "success": function(vero){
          output(vero);
        },
        "error": function(){
        }
      });

      function output(color){
        var number = color.response;

        if (number <= 5 ){
          nocolor.addClass("yellow");
          nocolor.append('<div class="write"></div>').text(number);
        } else {
          nocolor.addClass("green");
          nocolor.append('<div class="write"></div>').text(number);
        }
      }
    }
  });
})
