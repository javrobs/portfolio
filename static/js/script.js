const allPages=document.querySelectorAll(".page");

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