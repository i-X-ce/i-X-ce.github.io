const contentButtons = document.getElementsByName("workslist")
const contentIds = ["movieContents", "articleContents", "cordContents", "anyContents"]

{
    if (!localStorage.getItem("selectedNumW")){
        localStorage.setItem("selectedNumW") = 0;
    }
    for (var i = 0; i < contentButtons.length; i++){
        const selectedNum = localStorage.getItem("selectedNumW");
        if (selectedNum == i){
            contentButtons[i].checked = true;
            localStorage.removeItem("selectedNumW");
            continue;
        }
        clearContent(document.getElementById(contentIds[i]));
    }
    for (var i = 0; i < contentButtons.length; i++){
        contentButtons[i].addEventListener("change", function(){
            for (var i = 0; i < contentButtons.length; i++){
                const content = document.getElementById(contentIds[i])
                if (contentButtons[i].checked) {
                    // content.style.display = ""
                    content.style.height = "";
                    content.style.bottom = "";
                    content.style.opacity = 1;
                } else {
                    // content.style.display = "none"
                    clearContent(content)
                }
            }
        });
    }
    function clearContent(content){
        content.style.height = "0px";
        content.style.bottom = "-100%";
        content.style.opacity = 0;
    }
}

window.addEventListener("beforeunload", function(){
    for (var i = 0; i < contentButtons.length; i++){
        if (contentButtons[i].checked) this.localStorage.setItem("selectedNumW", i)
    }
})