
document.getElementById("date").innerHTML = new Date().getFullYear()
const NAV = document.getElementById("nav")

// change the background-color of navbar
function Scrolldown() {
    if(document.documentElement.scrollTop > 200){
        NAV.classList.add("change")
        
    }else{
        NAV.classList.remove("change")
    }
   
};
window.onscroll = function(){
    Scrolldown()
}





