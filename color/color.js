import { palletColors } from "../common.js";

console.log(palletColors);

var palletTemp = document.getElementsByClassName("pallet")[0];
for (var i=1;i<palletColors.length;i++){
    var bf = palletTemp.cloneNode(true);
    document.getElementById("palletsID").appendChild(bf);
}

var PalletElements = document.getElementsByClassName("pallet");
for (var i=0;i<PalletElements.length;i++){
    var bf = PalletElements[i];
    bf.setAttribute("data-index", i);
    for (var j=0;j<5;j++){
        bf.getElementsByClassName("color")[j].style.backgroundColor = palletColors[i][j];
    }
    bf.addEventListener("click", function(){
        var index = this.getAttribute("data-index");
        document.documentElement.style.setProperty("--basecolor-thin2", palletColors[index][0]);
        document.documentElement.style.setProperty("--basecolor-thin", palletColors[index][1]);
        document.documentElement.style.setProperty("--basecolor", palletColors[index][2]);
        document.documentElement.style.setProperty("--basecolor-dense", palletColors[index][3]);
        document.documentElement.style.setProperty("--basecolor-dense2", palletColors[index][4]);
        localStorage.setItem("colorNum", index);
        clearBorder();
    })
}

clearBorder();

function clearBorder(){
    var bf = document.getElementsByClassName("pallet");
    var index = localStorage.getItem("colorNum");
    if (!index) localStorage.setItem("colorNum", 0);
    for (var i=0;i<bf.length;i++){
        if (bf[i].getAttribute("data-index") == index) bf[i].style.borderStyle = "solid";
        else bf[i].style.borderStyle = "";
    }
}