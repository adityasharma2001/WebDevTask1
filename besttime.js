var noOfScores=0;
var score= new Array(6);

for(let i=0;i<localStorage.length || i<0;i++)
  {
    score[i]=localStorage.getItem(i);
    noOfScores++;
  }
function update_local()
{
    for(let i=0;i<noOfScores;i++)
    {
      localStorage.setItem(i,score[i]);
    }
}

function update_score()
  {
    if(noOfScores<5)
    {
      score[noOfScores]=extract_score();
      noOfScores++;
      score.sort();

    }
    else {
      score[noOfScores]=extract_score();
      score.sort();
    }
    update_local();

  }
  
   function extract_score()
      {
        var b=document.getElementById('time').innerHTML; 
        return b;
      }
	  
	  
	  function print_scores()
{
  document.getElementById('btn2').innerHTML="clear score";
  document.getElementById('btn2').onclick=clear_score;
  elem=document.getElementById('last5Scores');
  var a='Top 5 scores </br>';

  for(let i=0;i<noOfScores;i++)
  {
    a=a+ score[i] +'</br>'

  }
  elem.innerHTML=a;
}
function clear_score()
{
  elem=document.getElementById('btn2');
  elem.innerHTML="Print scores";
  elem.onclick=print_scores;
  document.getElementById('last5Scores').innerHTML="";
}
    
