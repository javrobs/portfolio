const allPages=document.querySelectorAll(".page");
const collapsed=document.querySelectorAll(".collapsible");
const minimenuButton=document.getElementById("minimenu-button");
const icon=minimenuButton.querySelector("i");

function activatePage(pageId){
    console.log(pageId);
    allPages.forEach(one=>{
        console.log(one);
        if (one.id===pageId){
            one.classList.add("active-page");
        } else {
            one.classList.remove("active-page");
        }
    });
}

function expandMiniMenu(){ 
    collapsed.forEach(one=>{
        one.classList.add("expanded");
    });
    minimenuButton.setAttribute("onclick","collapseMiniMenu();");
    icon.className="bi bi-chevron-compact-up";
}

function collapseMiniMenu(){
    collapsed.forEach(one=>{
        one.classList.remove("expanded");
    });
    minimenuButton.setAttribute("onclick","expandMiniMenu();");
    icon.className="bi bi-chevron-compact-down";
}

function activatePageMini(pageId){
    activatePage(pageId);
    collapseMiniMenu();
}