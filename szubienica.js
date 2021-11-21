var slogan = "Bez prace nie ma kołaczy";
slogan = slogan.toUpperCase();

var length = slogan.length;
var slogan1 = "";

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

function start()
{
	document.getElementById("alphabet").innerHTML = "LOL";
	
	
	write_slogan();
}