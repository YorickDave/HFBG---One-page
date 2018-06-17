
$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);

    if(scrollTop > 600){
      $('nav').addClass("nav-appear");
    }
    else{
      $('nav').removeClass("nav-appear");
    }
});

$(document).ready(function() {

function menuControl() {
    if($(this).data("toggled") == false){
      $(".container").animate({left:"-70%"});
      $(this).data("toggled", true);
    }
    else{
      $(".container").animate({left:0});
      $(this).data("toggled", false);
    }
}

  $(".mobile-menu-button").click(function(){menuControl()});
  $(".closeFix").click(function(){menuControl()});



  $(".merk").click(function() {
    $(".merk-highlight").css("display","none");
    $(".merk").removeClass("active");
    var workId = $(this).attr("id");
    $("#"+workId+"-info").css("display","flex");
    $(this).addClass("active");


  $(".close-button").click(function(){
    $(".merk-highlight").css("display","none");
    $(".merk").removeClass("active");
  });


});
})
