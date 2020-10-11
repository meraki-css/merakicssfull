/* GALLERY */
$(document).ready(function() {

  /* slide circles */
  $(".k-one").addClass("active");

  $(".k-one").click(function() {
    $(".slide").fadeOut();
    $(".firstSlide").fadeIn();
    $(".k-one").addClass("active");
    $(".k-two").removeClass("active");
    $(".k-three").removeClass("active");
    $(".k-four").removeClass("active");
    $(".k-five").removeClass("active");
  });

  $(".k-two").click(function() {
    $(".slide").fadeOut();
    $(".secondSlide").fadeIn();
    $(".k-one").removeClass("active");
    $(".k-two").addClass("active");
    $(".k-three").removeClass("active");
    $(".k-four").removeClass("active");
    $(".k-five").removeClass("active");
  });

  $(".k-three").click(function() {
    $(".slide").fadeOut();
    $(".thirdSlide").fadeIn();
    $(".k-one").removeClass("active");
    $(".k-two").removeClass("active");
    $(".k-three").addClass("active");
    $(".k-four").removeClass("active");
    $(".k-five").removeClass("active");
  });

  $(".k-four").click(function() {
    $(".slide").fadeOut();
    $(".fourthSlide").fadeIn();
    $(".k-one").removeClass("active");
    $(".k-two").removeClass("active");
    $(".k-three").removeClass("active");
    $(".k-four").addClass("active");
    $(".k-five").removeClass("active");
  });

  $(".k-five").click(function() {
    $(".slide").fadeOut();
    $(".fifthSlide").fadeIn();
    $(".k-one").removeClass("active");
    $(".k-two").removeClass("active");
    $(".k-three").removeClass("active");
    $(".k-four").removeClass("active");
    $(".k-five").addClass("active");
  });

  /* slide transition */
  $(".firstSlide").click(function() {
    $(".firstSlide").fadeOut();
    $(".secondSlide").fadeIn();
    $(".k-one").removeClass("active");
    $(".k-two").addClass("active");
  });

  $(".secondSlide").click(function() {
    $(".secondSlide").fadeOut();
    $(".thirdSlide").fadeIn();
    $(".k-two").removeClass("active");
    $(".k-three").addClass("active");
  });

  $(".thirdSlide").click(function() {
    $(".thirdSlide").fadeOut();
    $(".fourthSlide").fadeIn();
    $(".k-three").removeClass("active");
    $(".k-four").addClass("active");
  });

  $(".fourthSlide").click(function() {
    $(".fourthSlide").fadeOut();
    $(".fifthSlide").fadeIn();
    $(".k-four").removeClass("active");
    $(".k-five").addClass("active");
  });

  $(".fifthSlide").click(function() {
    $(".fifthSlide").fadeOut();
    $(".firstSlide").fadeIn("slow");
    $(".k-five").removeClass("active");
    $(".k-one").addClass("active");
  });

});




/* WAYFINDER */
$(document).ready(function() {
  
  $(".wayfinder-menu").click(function() {
    $(".bar1, .bar2, .bar3").toggleClass("change");
    $(".catalog > li").fadeToggle();
  });

  function menuResize() {
    var vw = window.innerWidth;
    if (vw <= "668") {
      $(".catalog > li").css("display", "none");
    } else {
      $(".catalog > li").css("display", "flex");
    }
  }

})