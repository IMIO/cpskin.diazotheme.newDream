// jquery for search button in navigation 

$( document ).ready(function() {

  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 600) {
              $('#scroll-to-top').fadeIn();
          } else {
              $('#scroll-to-top').fadeOut();
          }
      });

      $('#scroll-to-top a').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 700);
          return false;
      });
  });
  $("#scroll-to-top").hide();



       $( ".btn-search , #search-btn" ).click(function(e) {
        $( "#hidden-search").slideToggle(
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

  });

