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
