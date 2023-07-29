const DEFAULTCOLOR = 'black'

let gridSize = 16


const grid = document.getElementById('grid')
const clearButton = document.getElementById('clear')

clearButton.onclick = () => clearGrid()


let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false

function etch(e) {
    if (mouseDown && e.type == "mousemove")
        this.style.backgroundColor = DEFAULTCOLOR
}

function gridCreate(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) 
    {
        let tile = document.createElement('div')
        tile.addEventListener('mousedown', etch)
        tile.addEventListener('mousemove', etch)
        tile.classList.add("tile")
        grid.appendChild(tile)
    }
}


function clearGrid() {
    grid.innerHTML = ''
    gridCreate(gridSize)
}

window.onload = () => {
    gridCreate(gridSize)
}