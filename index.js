const catBtn = document.querySelector('.cat-btn')
const catLegs = document.querySelectorAll('.cat-leg')
const scratches = document.querySelectorAll('.scratch')
var snd = new Audio("scratch.mp3");


catBtn.addEventListener('click', () => {
    catLegs.forEach(catLeg => {
        catLeg.classList.add("cat-leg-move");
    })
    scratches.forEach(scratch => {
        scratch.classList.add("scratch-move")
    })
    snd.play()
})

catLegs.forEach(catLeg => catLeg.addEventListener("transitionend", returnBackTheCat))

function returnBackTheCat() {
    snd.pause()
    catLegs.forEach(catLeg => {
        catLeg.classList.remove("cat-leg-move");
    })
    scratches.forEach(scratch => {
        scratch.classList.remove("scratch-move")
    })
}