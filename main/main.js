const names = ["works", "about", "news", "contact", "color"];
const htmlUrls = ["../works/works.html", "../about/about.html", "../news/news.html", "../contact/contact.html", "../color/color.html"];
const scriptUrls = ["../works/works.js", "../about/about.js", "../news/news.js", "../contact/contact.js", "../color/color.js"];
const navBtns = document.getElementsByName("navlist");

for (var i = 0; i < names.length; i++){
    loadHtml(i);
}

{
    for (var i = 0; i < names.length ; i++){
        const btn = navBtns[i];
        btn.addEventListener("change", function(){
            const selectedNum = localStorage.getItem("selectedNum");
            if (selectedNum) {
                navBtns[selectedNum].checked = true;
                localStorage.removeItem("selectedNum");
            }
            for (var i = 0; i < names.length; i++){
                const target = document.getElementById(names[i] + "Html")
                if (navBtns[i].checked){
                    navBtns[i].checked = true;
                    target.style.height = "";
                    target.style.opacity = "";

                } else {
                    target.style.height = "0px"
                    target.style.opacity = 0;
                }
            }
        })
    }
}

navBtns[0].dispatchEvent(new Event("change"));

window.addEventListener("beforeunload", function(){
    for (var i = 0; i < navBtns.length; i++){
        if (navBtns[i].checked) localStorage.setItem("selectedNum", i);
    }
})

function loadHtml(index){
    fetch(htmlUrls[index]).then(response => {
        return response.text()})
    .then(data => {
        document.getElementById(names[index] + "Html").innerHTML = data;
        loadScript(index);
    })
    .catch(error => console.error("!!!", error))
}

function loadScript(index){
    const newScript = document.getElementById(names[index] + "Script");
    newScript.src = scriptUrls[index];
    document.body.appendChild(newScript);
}
