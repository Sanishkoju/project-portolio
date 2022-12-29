



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
}
function opentabs(){
    skilll.style.display="inline";

}