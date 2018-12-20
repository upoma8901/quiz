/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        
    });
//score('Creative')


//console.log(totalScore(score));
// This is our function box
function score(q1Result,q2Result,q3Result) { 
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
     if(q2Result==="Reading"){
        return 5;
    }
    else if(q2Result==="Gaming"){
        return 10;
    }
    else if(q2Result==="Cleaning"){
        return 20;
    }
     else if(q2Result==="Sleeping"){
        return 25;
    }
     if(q3Result==="Reading"){
        return 5;
    }
    else if(q3Result==="Gaming"){
        return 10;
    }
    else if(q3Result==="Cleaning"){
        return 20;
    }
     else if(q3Result==="Sleeping"){
        return 25;
    }

