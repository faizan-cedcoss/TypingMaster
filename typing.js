var a,c,b,d;
var j1=1;
function start1()
{
	if(j1==1)
	{
		start();
	}
	j1++;
}
function start()
{	
	a=document.querySelector('#ques').innerText;	
	var s=0;
	var m=0;
	var h=0;
	b=1;
	d=0;
	for (var i = 0; i < a.length; i++) 
	{
		if(a.charAt(i)==' ')
			b++;
	}
	var z=setInterval(timer,10);
	function timer()
	{	
		c=document.getElementById('ans').value;
		var e=a.substring(0,c.length);
		if(c==e)
			document.getElementById('ans').style.borderColor="blue";
		else
			document.getElementById('ans').style.borderColor="red";
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
		if (s==100){
			d++;
			m++;
			s-=100;
		}
		if (m==60){

			h++;
			m-=60;
		}
		if(c==a)
		{
			clearInterval(z);
			var speed=parseInt((b/d)*60);
			document.getElementById('wpm').innerHTML=speed;
		}
	}		
	}
	function reset()
	{
		location.reload();
	}
