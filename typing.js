var orignal, typed, totalWords, totalSec;
var j1 = 0;
totalWords = 1;
totalSec = 0;
orignal = document.querySelector('#ques').innerText;
var len = orignal.length;
var wrong = len;
for (var i = 0; i < len; i++) {
	if (orignal.charAt(i) == ' ')
		totalWords++;
}
function start1() {
	typed = document.getElementById('ans').value;
	if (j1 == 0) {
		start();
	}
	typed = document.getElementById('ans').value;
	var sub = orignal.substring(0, typed.length);
	if (typed == sub) {
		document.getElementById('ans').style.borderColor = "blue";
	}
	else {
		document.getElementById('ans').style.borderColor = "red";
		wrong--;
	}
	j1++;
}
function start() {
	var msec = 0;
	var sec = 0;
	var min = 0;
	totalSec = 0;
	var z = setInterval(timer, 10);
	function timer() {
		if (msec < 10)
			document.getElementById('sec').innerHTML = "0" + msec;
		else
			document.getElementById('sec').innerHTML = msec;
		if (sec < 10)
			document.getElementById('min').innerHTML = "0" + sec;
		else
			document.getElementById('min').innerHTML = sec;
		document.getElementById('hour').innerHTML = "0" + min;
		msec++;
		if (msec == 100) {
			totalSec++;
			sec++;
			msec -= 100;
		}
		if (sec == 60) {
			min++;
			sec -= 60;
		}
		if (typed == orignal) {
			clearInterval(z);
			var speed = parseInt((totalWords / totalSec) * 60);
			document.getElementById('wpm').innerHTML = speed;
			var acc = (wrong / len) * 100;
			document.getElementById('accuracy').innerHTML = acc.toFixed(2);
		}
	}
}
function reset() {
	location.reload();
}
