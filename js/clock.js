$(document).ready(function() {
    
setInterval(function(){
    var date = new Date();
    updateTime(date);
    updateClock(date);
    changeBackground();
    
    },1000);

//Analog clock

function updateClock(date){
    var secondHand = document.getElementById("hand-second").style;
    var minuteHand = document.getElementById("hand-minute").style;
    var hourHand = document.getElementById("hand-hour").style;

    secondHand.transform= "rotate(" + date.getSeconds() * 6 + "deg)";
    minuteHand.transform= "rotate(" + date.getMinutes() * 6 + "deg)";
    hourHand.transform= "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}


// Digital Clock

function updateTime(date){
    
    //Hour Digital
    var timeH = document.getElementById('hour');
    var hour = date.getHours();
    timeH.innerHTML = hour;

    //Minute Digital
    var timeM = document.getElementById('minute');
    var minute = date.getMinutes();
    timeM.innerHTML = minute;

    //Hour Digital
    var timeS = document.getElementById('second');
    var second = date.getSeconds();
    timeS.innerHTML = second;
}

// Change Background Image by Day time

function change(imageUrl){
   $('body').css('background-image', 'url(image/' + imageUrl + ')');            
}

function changeBackground(){
   var time = new Date().getHours() ;

   if ( (time >= 0  && time < 4) || (time >= 20  && time <= 23) ){
    change ("sea-night.jpg");        
  } else if ( time >= 4  && time < 8 ){
    change ("sea-sunrise.jpg");            
  }else if ( time >= 8  && time < 12 ){
    change ("sea.jpg");        
  }else if ( time >= 12  && time < 16 ){
    change ("sea-noon.jpg");        
  }else if ( time >= 16  && time < 20 ){
    change ("sea-sunset.jpg");        
  }   
}

});
