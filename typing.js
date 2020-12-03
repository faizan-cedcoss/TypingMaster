
var a,c,b;
function start()
{	
	a=document.querySelector('#ques').value ;
	
	var s=0;
	var m=0;
	var h=0;

	var z=setInterval(timer,1000);
	function timer()
	{
		c=document.getElementById('ans').value;
		if (s<10)
			document.getElementById('sec').innerHTML="0"+s;
		else
			document.getElementById('sec').innerHTML=s;
		if (m<10)
			document.getElementById('min').innerHTML="0"+m;
		else
			document.getElementById('min').innerHTML=m;
		document.getElementById('hour').innerHTML="0"+h;
		s++;
		if (s==60){
			m++;
			s-=60;
		}
		if (m==60){
			h++;
			m-=60;
		}
		if(c==a)
		{
			clearInterval(z);
		}
	}
		
	}
	function reset()
	{
		window.location.href="typing.html";
	}

