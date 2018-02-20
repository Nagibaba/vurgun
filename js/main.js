$(document).ready(function() {
  var Slider=0;
  $.Slider=function(toplam) {

    $('.button li').removeClass("activ");
    $(".resim li").removeClass('active2');
    if(Slider<toplam-1){
      Slider++;
      
      $(".button li:eq("+Slider+")").addClass("activ");
      $(".resim li:eq("+Slider+")").addClass('active2');
    }else {
      $(".button li:first").addClass("activ");
      $(".resim li:first").addClass('active2');
      Slider=0;

    }
  }

  var toplamLi=$(".resim li").length;
  var interval= setInterval('$.Slider('+toplamLi+')',9000);



  $(".resim li").removeClass('active2');
  $(".resim li:first").addClass('active2');
  $(".button li:first").addClass("activ");

  $(".button li").click(function(){
    var indis=$(this).index();

    $('.button li').removeClass("activ");
    $(".resim li").removeClass('active2');
    $(this).addClass("activ");
    var a=$(".resim li:eq("+indis+")");
    console.log(a);
    $(".resim li:eq("+indis+")").addClass('active2');


    Slider=indis;
    return false;
  })





});