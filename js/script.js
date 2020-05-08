$(function () {
   $(".toggles button").click(function() {
     var get_id = this.id;
     var get_current = $(".posts ." + get_id);
     $(".post").not(get_current).hide(600);
     get_current.show(600);
   });
   $("#showall").click(function() {
     $(".post").show(600);
   });
 });