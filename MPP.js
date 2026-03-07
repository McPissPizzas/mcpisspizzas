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

const btn = document.getElementById("babawagen")
const audio = document.getElementById("sound")

let audioContext, gainNode, source

btn.addEventListener("click", () => {
    if (!audioContext) {
        audioContext = new AudioContext()
        gainNode = audioContext.createGain()
        source = audioContext.createMediaElementSource(audio)
        source.connect(gainNode)
        gainNode.connect(audioContext.destination)
    }

    audio.currentTime = 0
    audio.play()
    gainNode.gain.setValueAtTime(1, audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(10, audioContext.currentTime + 1)
})


// function spawnPizza(pizza){
//     pizza.style.left = Math.random()*100 + "vw"
//     pizza.style.top = Math.random()-10 + "vh"
// }

// document.querySelectorAll(".Pizza").forEach(pizza => {

//     spawnPizza(pizza)

//     pizza.addEventListener("animationiteration", () => {
//         spawnPizza(pizza)
//     })

// })


