var score = document.getElementById("stopwatch");
var highscore [] = localStorage.getItem("highscore");

for(let i=0; i<5 ;i++){
if(highscore[i] !== null){
    if (score > highscore[i]) {
        localStorage.setItem("highscore", score[i]);      
    }
}
else{
    localStorage.setItem("highscore", score[i]);
}
}