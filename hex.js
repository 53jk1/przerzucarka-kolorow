const heksaDecymalnyKolor = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const przycisk = document.getElementById("przycisk");
const kolorKod = document.querySelector(".kod-koloru");

przycisk.addEventListener("click", function(){
    let hex = "#";
    for(let i=0; i<6; i++){
        hex += heksaDecymalnyKolor[wezLosowyNumer()];
    }
    kolorKod.textContent = hex;
    document.body.style.backgroundColor = hex;
})

function wezLosowyNumer(){
    return Math.floor(Math.random() * heksaDecymalnyKolor.length);
}