loadHtml("../header.html", "articlesHearder");
loadHtml("../footer.html", "articlesFooter");

function loadHtml(url, id){
    fetch(url).then(response => {
        return response.text();
    }).then(data => {
        document.getElementById(id).innerHTML = data;
    }).catch(error => console.error("!!!", error))
}