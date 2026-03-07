const register = document.getElementById("Kopfleiste")
const spalten = 5.5;
const reihen = 5.5;

for (i = 0; i < 70; i++) {
    const x = (i % spalten) * (150 / spalten)
    const y = Math.floor(i / spalten ) * (100 / reihen)

    const pizza = document.createElement("div")
    const bild = document.createElement("img")

    bild.src = "pizza_pfeil.png"
    pizza.appendChild(bild)
   

    pizza.classList = "Pizza"
    document.body.appendChild(pizza)

    

    pizza.style.left = x -20  + "vw"
    pizza.style.top = y -100 + "vh"


}
function Animpress(){
    presses = 0
    presses +=1
}
