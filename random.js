//generate random number in tiles?//
document.addEventListener("DOMContentLoaded", function(event) { 
    Assignnumb();
  });
function Assignnumb()
{ 
	a=1;
	
    function GenerateRandomNumber(min,max){
        let st1= max-min+1;
        let st2=Math.random()*st1;
        let a= Math.floor(st2)+min;
        return a ;
    }
 
    
function createArrayofnumber( start,end){
    let myarray =[];
    for (let i=start ; i<=end; i++){
        myarray.push(i);
    }
    return myarray;
}
let numbersArray = createArrayofnumber(1,24);


for(var i=1; i<25;i++){
    
        let randomindex =GenerateRandomNumber(0,numbersArray.length-1);
        let randomN  = numbersArray[randomindex];
        numbersArray.splice(randomindex,1);
        let ab=randomN;
    

        document.getElementById("bt_"+ i).innerHTML=ab;

    }
	clear_timer();
}



	
	
