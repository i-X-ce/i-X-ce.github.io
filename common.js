export const palletColors = [
    ["#f0f7da", "#c9df8a", "#77ab59", "#36802d", "#234d20"], 
    ["#d6edf3", "#98d3e1", "#31a6c2", "#1d6474", "#14424e"], 
    ["#fefeeb", "#f0e6c1", "#a5b3aa", "#0ca5b0", "#4e3f30"],
    ["#e7eed0", "#cad1c3", "#948e99", "#51425f", "#2e1437"], 
    ["#e5e5e5", "#bdbdbd", "#959595", "#6f6f6f", "#4a4a4a"], 
    ["#ebeaa9", "#ebc588", "#7d2948", "#3b0032", "#0e0b29"], 
    ["#efd9b4", "#d6a692", "#a39081", "#4d6160", "#292522"],
    ["#f5dd9d", "#bcc499", "#92a68a", "#7b8f8a", "#506266"],
    ["#fff3db", "#e7e4d5", "#d3c8b4", "#c84648", "#703e3b"],
    ["#fdcfbf", "#feb89f", "#e23d75", "#742365", "#5f0d3b"],
    ["#ffff00", "#ccd91a", "#99b333", "#668c4d", "#336666"],
    ["#b8fd99", "#7cf49a", "#0de5a8", "#14c3a2", "#595b5a"],
    ["#ecccff", "#c766ff", "#a200ff", "#610099", "#31004d"],
    ["#bbbdf6", "#9893da", "#797a9e", "#72727e", "#625f63"],
    ["#6fedb7", "#2dd881", "#4ea699", "#140d4f", "#1c0b19"],
    ["#fafaff", "#e4d9ff", "#273469", "#1e2749", "#30343f"],
    ["#fffbbd", "#e6aa68", "#7fb069", "#ca3c25", "#1d1a05"],
    ["#eec170", "#f2a65a", "#f58549", "#772f1a", "#585123"],
    ["#dddbf1", "#d1beb0", "#ab9f9d", "#3C4F76", "#383f51"],
    ["#FDF7FA", "#a8dcd9", "#e2a3c7", "#d67ab1", "#60435f"],
    ["#ffffff", "#c0c0c0", "#ff5d73", "#494949", "#000000"],
    ["#fff05a", "#ffd25a", "#ffaa5a", "#ff785a", "#191919"],

    // ["#", "#", "#", "#", "#"], 
]

if (localStorage.getItem("colorNum")){
    var index = localStorage.getItem("colorNum");
    changeColor(index);
}else{
    changeColor(0);
    localStorage.setItem("coloNum", 0);
}

function changeColor(index){
    document.documentElement.style.setProperty("--basecolor-thin2", palletColors[index][0]);
    document.documentElement.style.setProperty("--basecolor-thin", palletColors[index][1]);
    document.documentElement.style.setProperty("--basecolor", palletColors[index][2]);
    document.documentElement.style.setProperty("--basecolor-dense", palletColors[index][3]);
    document.documentElement.style.setProperty("--basecolor-dense2", palletColors[index][4]);
}