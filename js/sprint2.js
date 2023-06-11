$(document).ready(function() {
    $("#numguest").htmlNumberSpinner();
    $("#arrivaltime").datepicker();
    $("#departuretime").datepicker();
    $('select').niceSelect();
    $('form').card({
      container: '.card-wrapper'
    });
})
function onC1BtnClick() {
  var value = $("#numguest").getSpinnerValue();
  var e = document.getElementById("room-type");
  var value2 = e.value;
  if($('#arrivaltime').datepicker('getDate') != null || $('#departuretime').datepicker('getDate') != null){
    var a = $('#arrivaltime').datepicker('getDate').getTime(),
    b = $('#departuretime').datepicker('getDate').getTime(),
    c = 24*60*60*1000,
    diffDays = Math.round(Math.abs((a - b)/(c)));
  }  
  var amount = 0;
  
  if(value2==="0"){
    document.getElementById("amount").innerHTML= " Please select a room type"
  }
  if(value2==="1"){
    amount = value*diffDays*500;
    document.getElementById("amount").innerHTML= amount + " TL"
  }
  if(value2==="2"){
    amount = value*diffDays*800;
    document.getElementById("amount").innerHTML= amount + " TL"
  }
  if(value2==="3"){
    amount = value*diffDays*1000;
    document.getElementById("amount").innerHTML= amount + " TL"
  }
  if(value2==="4"){
    amount = value*diffDays*2000;
    document.getElementById("amount").innerHTML= amount + " TL"
  }
}

