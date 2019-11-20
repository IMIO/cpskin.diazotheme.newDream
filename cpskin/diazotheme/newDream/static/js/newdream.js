// jquery for search button in navigation 

$( document ).ready(function() {
       $( ".btn-search" ).click(function(e) {
        $( "#hidden-search" ).slideToggle(
        "fast",
        function () {
               $("#searchGadget").focus();
           });
         e.preventDefault();
        });
       
       $("#portal-globalnav a[tabindex]").click(function(){
        $("#hidden-search").hide('fast');
       });

       $(".toggle-button").click(function(){
         var toggle_button_id = this.id;
         var toggle_block_id = toggle_button_id.replace("-button", "-block");
         $("#" + toggle_block_id).toggleClass("active desactive");
       });
});




//Custom-menu Newdream

$( function() {
  $( "#search-btn" ).on( "click", function() {
    $( "#top-navigation-inner" ).toggleClass( "justifyNav");
  });
});
$(document).ready(function(){
  $("#portal-globalnav ul li a:first-child").click(function(){
      var indexLi = $(this).parent().index();
      $(".navigation-3 .portal-globalnav-cpskinmenu li:first-child").addClass( "sfHover" );
      $(".navigation-3 .portal-globalnav-cpskinmenu li:first-child ul").css({'display': 'block', 'visibility': 'visible'});
  });

  $(".navigation-1 #portal-globalnav ul li a:first-child").click(function(){
      var position = $(this).offset();
      $(".navTreeLevel0").css("left", "10");
  });
});


//parallax Newdream

$(document).ready(function(){

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#cpskin-banner",
    triggerHook: "onEnter",
  })
  .duration('200%')
  .setTween("#cpskin-banner >  img", {
    y: "80%", 
    ease: Linear.easeNone
  })
  .addTo(controller);


// Parallax slider
new ScrollMagic.Scene({
        triggerElement: ".slider-unique-titre",
        triggerHook: "onEnter",
    })
    .duration('200%')
    .setTween("#slider-grands-dossiers .flex-active-slide .flex-caption", {
        y: "-60%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);
});
