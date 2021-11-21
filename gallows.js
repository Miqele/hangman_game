var slogan = "Bez pracy nie ma kołaczy";
slogan = slogan.toUpperCase();

var length = slogan.length;
var slogan1 = "";
var false_hit = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var lose = new Audio("lose.wav");

for(i=0; i<length; i++)
{
	if(slogan.charAt(i) ==" ") slogan1 = slogan1 + " ";
	else slogan1 = slogan1 + "-";
}

function write_slogan()
{
	document.getElementById("board").innerHTML = slogan1;
}

window.onload = start;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start()
{
	var div_content ="";
	for(i=0; i<=34 ; i++)
	{
		var element = "lit" + i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="'+ element +'">' + letters[i] +'</div>';
		if((i+1)%7==0) div_content = div_content  + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = div_content;
	write_slogan();
}

String.prototype.set_sign = function(position, sign)
{
	if(position > this.length - 1) return this.toString();
	else return this.substr(0,position) + sign + this.substr(position + 1);
}

function check(nr)
{
	var hit = false;
	for(i=0 ; i< length ; i++)
	{
		if(slogan.charAt(i) == letters[nr])
		{
			slogan1 = slogan1.set_sign(i, letters[nr]);
			hit = true;
		}
	}
	if(hit==true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_slogan();		
	}
	else
	{
		no.play();
		var element = "lit" + nr;		
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		false_hit++;
		document.getElementById("gallows").innerHTML = '<img src="img/s'+false_hit+'.jpg" alt="gallows">';		
		
	//win	
	}
	if (slogan == slogan1)
	{
		win.play();
		document.getElementById("alphabet").innerHTML = " Gratulacje ! </br></br> Prawidłowe hasło to: </br>"+slogan+'</br></br> <span class="reset" onclick="location.reload()">JESCZE RAZ ?</span>';
	}
	//lose
	if(false_hit >= 9)
	{
		lose.play();
		document.getElementById("alphabet").innerHTML = " NIestety &#9785; ! </br></br> Prawidłowe hasło to: </br>"+slogan+'</br></br> <span class="reset2" onclick="location.reload()">JESCZE RAZ ?</span>';
	}
	
}