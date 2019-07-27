var vl = document.getElementById('video');

function playVl() { 
    vl.play(); 
} 

function pauseVl() { 
    vl.pause(); 
}

function loadVl() { 
    vl.load(); 
}

function endVl(){    

 poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grey_squirrel_400px.jpg/320px-Grey_squirrel_400px.jpg";
  //vl.currentTime = 0; 
  return poster;
}

$(document).ready(function() {
  var timer = $("#timer");
  var s = 0;
  var m = 0;
  var on = false;
  var reset = true;

  $("#play").on('click', function(e) {
    e.preventDefault();
    start();
    finVideo();
  });
  $("#pause").on('click', function(e) {
    e.preventDefault();
    stop();
  });
  $("#reset").on('click', function(e) {
    e.preventDefault();
    load();
  });

  function chrono() {
    s++;

    if (s > 59) {
      m++;
      s = 0;
    }

    if (m < 10 && s < 10) {
      timer.html("0" + m + " : 0" + s);
    } else if (m < 10 && s >= 10) {
      timer.html("0" + m + " : " + s);
    } else if (m >= 10 && s < 10) {
      timer.html(+m + " : 0" + s);
    } else if (m >= 10 && s > 10) {
      timer.html(+m + " : " + s);
    } 
    if (on === true && s === 27) {
      on = false;
      clearTimeout(timerID);
    }
    if (on === true && s >= 27) {
      s = 1;
      m = 0;
      timer.html("00 : 01");
    }
  }

  function start() {
    if (on === false) {
      timerID = setInterval(chrono, 1000);
      on = true;
      reset = false;
    }  
  }

  function stop() {
    if (on === true) {
      on = false;
      clearTimeout(timerID);
    }
  }

  function load() {
    if (reset === false) {
      clearInterval(timerID);
      s = 0;
      m = 0;
      timer.html("00 : 00");
      on = false
      reset = true;
    }
  }
});