$(document).ready(function(){

var $body = $('body');
var $candy = $('.candy');


var fly = function(){
$body.append('<div class="candy"></div>');
$candy.css("top", Math.random() * window.innerHeight);
$candy.css("left", Math.random() * window.innerWidth);
}

fly();

});
