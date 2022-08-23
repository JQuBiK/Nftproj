document.addEventListener('DOMContentLoaded', () => {
	const newTimer = new Date('Feb 18 2023 00:05:00');
	
	const daysVal = document.querySelector('.timer-countdown-days .timer-countdown-time');
	const hoursVal = document.querySelector('.timer-countdown-hours .timer-countdown-time');
	const minutesVal = document.querySelector('.timer-countdown-minutes .timer-countdown-time');
	const secondsVal = document.querySelector('.timer-countdown-seconds .timer-countdown-time');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newTimer - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

        if(leftUntil <= 0) {
            daysVal.textContent = "0";
            hoursVal.textContent =	"0";
            minutesVal.textContent = "0";
            secondsVal.textContent = "0";
			document.querySelector('.btn-mint').classList.remove('btn-mint');
			return;
        } else {
            daysVal.textContent = days;
            hoursVal.textContent =	hours;
            minutesVal.textContent = minutes;
            secondsVal.textContent = seconds;
        }
	};

	timeCount();
	setInterval(timeCount, 1000);
});

$(window).scroll(function() {
	if($(this).scrollTop() > 200) {
		$('nav').addClass("sticky");
		} else {
		$('nav').removeClass("sticky");
	}
});

$('.scrollto a').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });
    return false;
});




$(document).ready(function(){
	$('#btn1').click(function(){
		$('#content1').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn1').removeClass('open');
			} else {
				$('#btn1').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn2').click(function(){
		$('#content2').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn2').removeClass('open');
			} else {
				$('#btn2').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn3').click(function(){
		$('#content3').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn3').removeClass('open');
			} else {
				$('#btn3').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn4').click(function(){
		$('#content4').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn4').removeClass('open');
			} else {
				$('#btn4').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn5').click(function(){
		$('#content5').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn5').removeClass('open');
			} else {
				$('#btn5').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn6').click(function(){
		$('#content6').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn6').removeClass('open');
			} else {
				$('#btn6').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('#btn7').click(function(){
		$('#content7').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('#btn7').removeClass('open');
			} else {
				$('#btn7').addClass('open');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('.burger').click(function(event){
		$('.burger, .burger-menu').toggleClass('activated');
	});
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots: true,
		infinite: false,
		speed: 300,
		centerMode: true,
		variableWidth: true
	});
});

$(document).ready(function(){
	$('#tacbtn').click(function(){
		$('.tac-descr-mobile').toggleClass('hide');	
		if ($('.tac-descr-mobile').hasClass('hide')) {
			$('#tacbtn').removeClass('open');
		} else {
			$('#tacbtn').addClass('open');
		}		
		return false;
	});				
});

// $(document).ready(function() {
// 	$('.tac-descr-mobile').moreContent();
// });