const BLACK = '000000'

let gridSize = 16


const grid = document.getElementById('grid')
let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false

function etch(e) {
    if (mouseDown)
        this.style.cssText = 'background: pink'
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
window.onload = () => {
    gridCreate(gridSize)
}