
let seconds = 0;
let minutes =0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours =0;

let interval = null;


function stopWatch(){
	
	seconds++;
	
	
	if(seconds/60 == 1){
		seconds = 0; 
		minutes++;
		
		if(minutes/60 == 1){
			minutes = 0;
			hours++;
		}
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

if(hours<10){
	displayHours= "0" +hours.toString();
}
else{
	displayHours;
}	
	document.getElementById("stopwatch").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
	

}

	


function StartStop(){
	if(status === "stopped"){
		
		interval = window.setInterval(stopWatch, 1000);
	    status = "started"; 
	}
	
	else{
		window.clearInterval(interval);
		status = "stopped";
	}
}
	
	
/*console.log('hi');

function stopwatch(elem){
	var time = 0;
	var interval;
	var offset;
}
	
	function update(){
		time += delta();
		var formattedTime =timeFormatter(time);
		console.log(formattedTime);
		elem.textContent = formattedTime;
	}
	
	function delta(){
		var now = Date.now();
        var timePassed = now - offset ;
		offset = now;
		return timePassed;
	}
	
	function timeFormatter(timeInMilliseconds){
		var time = new Date(timeInMilliseconds);
		var minutes = time.getMinutes().toString;
		var seconds = time.getSeconds().toString;
		var milliseconds = time.getMilliseconds().toString;
		
		if(minutes.length<2){
			minutes= '0' + minutes;
		}
		if(seconds.length < 2){
			seconds = '0' + seconds;
		}
		while(milliseconds.length < 3){
			milliseconds = '0' + milliseconds;
		}
		
		return minutes + ':' + seconds + ':' + milliseconds;
	}
	
	this.isOn = false;
	
	
	this.on = function(){
		if(!this.isOn){
			interval = setInterval(update, 10);
			offset = Date.now();
			this.isOn = true;
	    }
	
    };
	
	this.stop = function(){
		if(this.isOn){
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};*/
    



/*var stopwatch = document.getElementsByClassName('stopwatch'),
    newgame = document.getElementsByClassName('newgame'),
	seconds = 0, minutes = 0, hours = 0,
    t;
	function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    stopwatch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


newgame.onclick = timer;*/