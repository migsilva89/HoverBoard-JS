const container = document.getElementById('container') //Get container 
const SquareNr = 1000 // set the number of desire squares 
const colors = ['#AEFFE9','#FF99CC','#00513B','#C9C9C9','#b5179e','#264653','#0a9396',]

//LOOP TO CREATE THE SQUARES
for(let i = 0; i < SquareNr; i++){ 
    const square = document.createElement('div') //CRIAR ELEMENTO <div></div>
    square.classList.add('square') // Add class style square to created <div></div> -- WE WILL STYLE THIS CLASS WITH CSS
    
//ADD EVENT LISTENER TO EACH SQUARE
    square.addEventListener('mouseover', () => {
        setColorToEl(square) // FUNCTION setColorToEl
    })

    square.addEventListener('mouseout', () => {
        removeColorFromEl(square) // FUNCTIOn removeColorFromEl
    })

    container.appendChild(square) //ADICIONAR <div class="square" to our Container 
}

//FUNCTION SET COLOR TO SQUARE ON MOUSEOVER
function setColorToEl(element) {
    const color = getRadomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// FUNCTION TO GET A RANDOM COLOR 
function getRadomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

//FUNCTION TO REMOVE THE BG COLOR FROM SQUARE 
function removeColorFromEl(element) {
    element.style.background = null
    element.style.boxShadow = null
}

