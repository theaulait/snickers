$(document).ready(function(){

  var $body = $('body');
  var $head = $('header');
  var $win = $('#win');
  var $timer = $('#timer');
  var $counter = $('#counter');
  var $count = 0;
  var $start = $('#start');
  var timeLeft = 30;
  var snicker = $('.snicker');
  var $candyJar = $('#candyJar');
  var stop;
  var endAll;
  var temp = 0;
  var active = false;


   var blink = function(){
    $('.blink').fadeIn(250);
    $('.blink').fadeOut(250);
    };

   alert('Your objective is to eat 25 snicker bars before the time runs out');

   function snickersBar(){
    var count1 = 0;
    active = true;
  //  for(var i = 0; i < timeLeft; i++){
      $candyJar.append('<div class="snicker" ></div>');
      $candyJar.children('.snicker').css('left', Math.random() * 900);
      $candyJar.children('.snicker').css('top', Math.random() * 500);
      stop = setInterval(function() {
        $('.snicker').click(function() {
          $(this).toggleClass('gone');
          count1++;
          count1 = count1 - count1 + 1;
          $(this).remove();
          if(active === true){
          temp += count1;
          active = false;
          }
        $counter.text('Ate: ' + temp);

          // var stop1 = setTimeout(function() {
          //   //console.log(temp);
          //   console.log(temp);
          //   //console.log(timeLeft);
          //   // if((timeLeft === 0) && (temp < 25)){
          //   // console.log(timeLeft);
          //   // console.log('after ' + temp);
          //   // alert('you lose');
          //   //}
          //   // if($candyJar.children('.snicker').length === 0){
          //   //   clearInterval(stop1);
          //   //   }
          //   },250);
        });

        //  if(i === timeLeft - 1){clearInterval(stop);}
        }, 250);
        return snicker;
 //   };
   };
   //console.log(temp);
   var countDown = function(timeLeft){
    countInterval = setInterval(function() {
      if (timeLeft === 0){
          endCountDown();
      }
      if((timeLeft === 0) && (temp < 25)){
          console.log(timeLeft);
          console.log('after ' + temp);
          alert('you lose');
          window.clearInterval(endAll);
      }
      if((timeLeft >=0) && (temp >= 25)){
          alert('you win');
          window.clearInterval(endAll);
      }

      $timer.text('TIME LEFT: ' + timeLeft);
      timeLeft--;
    }, 1000);
  }

  // var snickerListener = function() {
  //     $(snicker).on('click', function() {
  //     console.log('i clicked', this);
  //      var stop1 = setTimeout(function() {
  //         $count++;
  //         $counter.text($count);
  //         snicker.remove();
  //         if($candyJar.children('.snicker').length === 0){
  //           clearInterval(stop1);
  //         }
  //       }, 100);
  //   });
  // }
 // snickerListener();

  var endCountDown = function() {
    window.clearInterval(countInterval);
    window.clearInterval(snickersBar);
    }

    $start.on('click', function(){
      countDown(timeLeft)
      endAll = setInterval(snickersBar, 2000);
    });

});

