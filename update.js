function increase(clicked_id){
    
    var x;
    var y;
    var z;
    x = document.getElementById(clicked_id).value;
    z=parseInt(x);
    
	var doc=document.getElementById(id);
	
	
	if (Number(doc.innerHTML)==a)
    {
        if((Number(doc.innerHTML)+ 24 ) >40){ 
            doc.innerHTML=" ";
        }
        else{
            y=Number(doc.innerHTML) + 24;
           doc.innerHTML=y;

        }
        a++;
        if(a==40)
        {
            stoptimer();
            on();
            update_score();

        }
    }
  

}
