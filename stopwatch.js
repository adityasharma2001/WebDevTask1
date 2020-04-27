let mseconds=0;
let seconds = 0;
let minutes =0;


let displayMseconds =0;
let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;


function stopWatch(){
	
	mseconds++;
	
	if(mseconds/1000==1){
		mseconds=0;
		seconds++;
	    if(seconds/60 == 1){
		seconds = 0; 
		minutes++;
		}
	}
	
	if(mseconds<10){
		displayMseconds= "0" + "0" + mseconds.toString();
	}
	else if(mseconds<100){
		displayMseconds= "0" + mseconds.toString();
	}
	else {
		displayMseconds= mseconds;
	}
	
	if(seconds<10){
	displaySeconds= "0" +seconds.toString();
}
else{
	displaySeconds= seconds;
}

if(minutes<10){
	displayMinutes= "0" +minutes.toString();
}
else{
	displayMinutes= minutes;
}

	
	document.getElementById("stopwatch").innerHTML =displayMinutes + ":" + displaySeconds + "." + displayMseconds;
	

}

	


function StartStop(){
	
		
		interval = window.setInterval(stopWatch, 1);
	    status = "started"; 
	

function stoptimer(){
    clearInterval(interval);
}
	function clear_timer(){
    stoptimer();
	mseconds=0;
	seconds=0;
	minutes=0;
    document.getElementById("stopwatch").innerHTML=  "00"+":"+"00"+"."+"000";
}
