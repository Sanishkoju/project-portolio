



var sideBar=document.getElementById("sidemenu");
var linee=document.getElementById("line")
var crosss=document.getElementById("cross")
var educationn=document.querySelector("#educations")
var skilll=document.querySelector("#skills")


var suns=document.getElementById("sun");
var moons=document.getElementById("moon");








var bright1=document.querySelector(".navb")
var bright2=document.querySelector(".container")
var bright3=document.querySelector(".my-work")
var bright4=document.querySelector(".pad")
var bright5=document.querySelector(".cont")
var bright6=document.querySelector(".mains");




/*var modes=document.querySelector(".mode")*/



function openmenu(){
    sideBar.style.left="0px";
    linee.style.display="none"
    
    crosss.style.display="inline"
    
    
    
}
function closemenu(){
    sideBar.style.left="-250px";
    linee.style.display="inline";
    crosss.style.display="none";
    

}



educationn.style.display="none";
function opentab(){
    if(educationn.style.display==="none"){
    educationn.style.display="inline";
    }
    else if(   educationn.style.display==="inline"){
        educationn.style.display="none";
    }
    skilll.style.display="none";
    
    


}
skilll.style.display="inline";
function opentabs(){
    if( skilll.style.display==="none"){
    skilll.style.display="inline";
    
}
    else if( skilll.style.display==="inline"){
        skilll.style.display="none";

    }
    educationn.style.display="none";

}


/*function starttabs(){
    skilll.style.display="none";
    


}
function endtab(){
    educationn.style.display="none";


}*/



var day= new Date();
var hr= day.getHours();
if(hr>=0 && hr<12){
    bright1.style.color="black";
    bright1.style.background="white";

    bright2.style.color="black";
    bright2.style.background="white";
    
    bright3.style.color="black";
    bright3.style.background="white";

    bright4.style.color="black";
    bright4.style.background="white";

    bright5.style.color="black";
    bright5.style.background="white";

    bright6.style.color="black";
    bright6.style.background="white";

       moons.style.display="inline";
    
    
    document.getElementById("pg").innerText="Good Morning !";

}
if(hr>=12 && hr<=17){
    bright1.style.color="black";
    bright1.style.background="white";

    bright2.style.color="black";
    bright2.style.background="white";
    
    bright3.style.color="black";
    bright3.style.background="white";

    bright4.style.color="black";
    bright4.style.background="white";

    bright5.style.color="black";
    bright5.style.background="white";

    bright6.style.color="black";
    bright6.style.background="white";

       moons.style.display="inline";
    suns.style.display="none";
    
    document.getElementById("pg").innerText="Good Afternoon !";

}
else if(hr>=18 && hr<0){
bright1.style.color="white";
    bright1.style.background="black";

    bright2.style.color="white";
    bright2.style.background="black";
    
    bright3.style.color="white";
    bright3.style.background="black";

    bright4.style.color="white";
    bright4.style.background="black";
    
    bright5.style.color="white";
    bright5.style.background="black";

    bright6.style.color="white";
    bright6.style.background="black";

       moons.style.display="none";
    suns.style.display="inline";
    document.getElementById("pg").innerText="Good Night !";
    

}

function risetab(){
    moons.style.display="inline";
    suns.style.display="none";
    
    document.getElementById("pg").innerText="Dark Mode off";
    

 /*
 var array1=['bight1','bight2','bight3','bight4','bight5','bight6']
array1.forEach((e)=>{
e.style.color='black';
});

array1.forEach((e)=>{
    e.style.background='white';
    });
    */


    bright1.style.color="black";
    bright1.style.background="white";

    bright2.style.color="black";
    bright2.style.background="white";
    
    bright3.style.color="black";
    bright3.style.background="white";

    bright4.style.color="black";
    bright4.style.background="white";

    bright5.style.color="black";
    bright5.style.background="white";

    bright6.style.color="black";
    bright6.style.background="white";
    
    
    



}
 
function settab(){
    moons.style.display="none";
    suns.style.display="inline";
    
    document.getElementById("pg").innerText="Dark Mode";

    
   bright1.style.color="white";
    bright1.style.background="black";

    bright2.style.color="white";
    bright2.style.background="black";
    
    bright3.style.color="white";
    bright3.style.background="black";

    bright4.style.color="white";
    bright4.style.background="black";
    
    bright5.style.color="white";
    bright5.style.background="black";

    bright6.style.color="white";
    bright6.style.background="black";
    
    


}