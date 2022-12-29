



var sideBar=document.getElementById("sidemenu");
var linee=document.getElementById("line")
var educationn=document.querySelector("#educations")
var skilll=document.querySelector("#skills")

function openmenu(){
    sideBar.style.left="0px";
    linee.style.display="none"
    
    
}
function closemenu(){
    sideBar.style.left="-250px";
    linee.style.display="inline"
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