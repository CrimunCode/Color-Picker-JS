console.log("Vinculado 😁")

const inputColor = document.getElementById("inputColor")
const btnVisualizar = document.getElementById("btnVisualizar")
const numHexadecimal = document.getElementById("numHexadecimal")
const cardColor = document.getElementById("cardColor")

console.log(inputColor.value)

btnVisualizar.addEventListener("click", () => {
    
    console.log("Me diste Click")
    console.log(inputColor.value)

    numHexadecimal.textContent = inputColor.value

    cardColor.style.backgroundColor = inputColor.value
})

