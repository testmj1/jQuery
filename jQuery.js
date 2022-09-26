//this fuction is hide the element 
 function hello(){
    consloe.log('hello world');
}
$(document).ready(function(){
    $('#hide').click(function(){
        $('#blue').hide();
    });
    // this fuction is show the function
$('#show').click(function(){
  $('#blue').show();
});
// this function is fadeIn function
$('#fadeIn').click(function(){
  $('#fade1').fadeIn();
  $('#fade2').fadeIn(200);
  $('#fade3').fadeIn(300);
});
//this function is fadeOut function 
$('#fadeOut').click(function(){
  $('#fade1').fadeOut();
  $('#fade2').fadeOut(200);
  $('#fade3').fadeOut(300);
});

// in this function will be slide show
$('#downB').click(function(){
    $("#slideDown").slideDown();
})
// in this function wil be slide Up
$("#slideUp").click(function(){
    $('#slideDown').slideUp();
})
// create togle togle mixup slideUp and slideDown
$("#togle").click(function(){
    $("#flip").toggle();
    
});
// animation 
$("#animation").click(function(){
    $('#animeted').animate({left: '250px'
    //height:'200px',
    //height:'toggle'
    
    
     }).css("color","red");
});
});
