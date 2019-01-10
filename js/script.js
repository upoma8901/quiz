/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
         alert(q1Result);
    });
//score('Creative')


//console.log(totalScore(score));
// This is our function box

 
 function ans1(q1Result){
    if(q1Result==="Creative"){
        return 5;
    }
    else if(q1Result==="Analytical"){
        return 10;
    }
    else if(q1Result==="Practical"){
        return 20;
    }
     else if(q1Result==="Stress-Free"){
        return 25;
    }
     
 }
    function ans2(q2Result){
    if(q2Result==="Reading"){
        return 5;
    }
    else if(q2Result==="Sleeping"){
        return 10;
    }
    else if(q2Result==="Gaming"){
        return 20;
    }
     else if(q2Result==="Cleaning"){
        return 25;
    }
    }
    
    function ans2(q2Result){

     if(q3Result==="Summer"){
        return 5;
    }
    else if(q3Result==="Winter"){
        return 10;
    }
     else if(q3Result==="Fall"){
        return 20;
    }
    else if(q3Result==="Spring"){
        return 25;
    }
    }
    
    
    
    function ans4(q4Result){ 
        if(q4Result==="Horror"){
        return 5;
    }
    else if(q4Result==="Sci-fic"){
        return 10;
    }
    else if(q4Result==="Fantasy"){
        return 20;
    }
     else if(q4Result==="Comedy"){
        return 25;}
    }

var result=$(".result");
var h;
var h=q1Result+q2Result+q3Result+q4Result;
if (h>20 ||h===20 && h<25|| h===25){
  result="chipmunk"   }


else if (h>25  && h<35|| h===35){
  result="owl"   }
  
  else if (h>35  && h<45|| h===45){
  result="koala"   }
  
 else if ( h>45  && h<65|| h===65){
  result="bear"   }
  
  else if ( h>65  && h<75|| h===75){
  result="seahorse"   }
  
  else if ( h>75  && h<85|| h===85){
  result="penguin"   }
  
  else if ( h>85  && h<100|| h===100){
  result="seahorse"   }
  
}

