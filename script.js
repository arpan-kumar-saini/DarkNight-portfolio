let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.marginTop =value * 2.5 + 'px';
    treeLeft.style.left =value *-1.5 +'px';
    treeRight.style.left =value *1.5 +'px';
    gateLeft.style.left =value *0.5 +'px';
    gateRight.style.left =value *-0.5 +'px';
})




// this is the tabs logic
function openTab(evt, tabName) {
    // Hide all tab content
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // Deactivate all tabs
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
// By default, open the first tab
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab")[0].classList.add("active");



let audio=document.getElementById("Audio");

window.onload = function()
{
    audio.play();
}

