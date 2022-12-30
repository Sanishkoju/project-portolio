



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
var bright6=document.querySelector(".mains")

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

function opentab(){
    educationn.style.display="inline";
    skilll.style.display="none";
    
    


}
function opentabs(){
    skilll.style.display="inline";
    educationn.style.display="none";

}


function starttabs(){
    skilll.style.display="none";
    


}
function endtab(){
    educationn.style.display="none";


}




function risetab(){
    moons.style.display="inline";
    suns.style.display="none";
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
    bright1.style.color="white";
    bright1.style.background="black";

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