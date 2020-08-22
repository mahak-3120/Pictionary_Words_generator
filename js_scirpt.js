var words=["banana","apple","mango","cherry","grapes","pear","pineapple","strawberry","watermelon","orange","tomato","potato","onion","mushroom","carrot","cucumber","brocoli","pumpkin","sun","moon","mountain","waterdrop","star","pond","tree","river","flower","leaf","rainbow","dog","cat","mouse","duck","fish","giraffe","dolphin","elephant","peacock","butterfly","octopus","fly","cockroach","horse","spider","ear","nose","hands","lips","eyes","finger","face","heart","bone","sad","cry","happy","mad",'car','bicycle','bike','truck','tractor','airplane','boat','ship','hot-air balloon','skateboard','swing','slide','table','book','socks','coat','kite','spoon','light','smile','shoe','hat','drum','flute','jacket','cap','cup','jar','glass','water','juice','wine','circle','square','rectangle','snowflake','pen','pencil','eraser','stapler','punching machine','highlighter','pencil-box','bag','laptop','computer','CPU','cutter','knife','keys','scissors','king','queen','diamond','gold','olympic','run','fast','prize','laughter','white-board','bed','sofa','dining table','spoon and fork','tooth','mirror','first', 'play','speaker','earphones','cube','sphere','Earth','bread','clock','pillow','nail','hammer','stairs','side','broom','button','bat','ball','desk','box','shirt','dream','ghost','bench','chair','bathroom','notebook','mail','letter','camera','mobile','facebook','youtube','maps','door','home','flat','park','cricket','baseball','football','shooting','archery','skates','nature','hockey','mattress','circus','half','lightbulb','treasure','whistle','photograph','battery','password','electricity','teapot','song','bomb','ski','garbage','palace','deep','India','music','tiny','large','scale','ruler','subway','metro','train','sick','stick','container','air','shopping','skirts','jeans','sweat','sweaters','cardigan','boots','heels','makeup','notepad','telephone','shopping mall','disneyland','hospital','police','highway','grade','calendar','time-table','keyboard','mask','distance','speed','umbrella','rainy season','winter','summer','spring','shutdown','window','sunrise','cloudy','humid','air-conditioner','chalk','marker','hiking','hacking','cheer', 'toothbrush','message','drawing','fog','pollution',"money","coin","wallet","spes","ring","bangles","teddybear", "arrow"];

    	/*var rand = Math.floor(Math.random()*words.length );
    	document.getElementById("demo").innerHTML=words[rand];

    	*/
    	

    	function pict(){

    		var word_list="";
    		var n=document.getElementById("num").value;

    		//validate n
    		if ( n<1 || n>10){
    			alert("Please enter a valid number between 1 and 10");
    		}
    		else{
    		for (i=0;i<n;i++) 
            {
    			var rand = Math.floor(Math.random()*words.length );
    		 word_list+=words[rand]+ "<br>";

    		}
    		document.getElementById("demo").innerHTML=word_list;
    	}
    	}
    	