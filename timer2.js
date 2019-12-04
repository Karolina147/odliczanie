// var koniecegzaminu = 0;
// var koniecczasu = 0;
var minuta = 60;
var sekunda = 0;

function odliczanie()
{
	if(minuta<=0&&sekunda<=0)
	{ 
		document.getElementById('zegar').innerHTML='Koniec czasu';
	}
	else {
	sekunda=sekunda-1;
	if (sekunda<0) {sekunda=59; minuta=minuta-1;}
	if (minuta<0) {minuta=59;}

	if(minuta>=0&&sekunda>=0)
	{
		document.getElementById('zegar').innerHTML= 'Czas do zakończenia '+ minuta+' min '+ sekunda +' sek';
		setTimeout("odliczanie()",1000);
	} 
}
}