function increase(clicked_id){
    
    var x;
    var y;
    var z;
    x = document.getElementById(clicked_id).value;
    z=parseInt(x);
    
    if(z>48){
        document.getElementById(clicked_id).innerHTML=" ";
        
    }
    else{
        y=z+24;
        document.getElementById(clicked_id).innerHTML=y;
    }
  

}