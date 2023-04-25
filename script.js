const gridSize = 100
const gridDiv = document.querySelector(".gridDiv")

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 600 / gridSize;
            const gridBox = document.createElement('div')
            
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', (event) => {
                gridBox.style.backgroundColor = "gray";
            })
            row.appendChild(gridBox)
        }
        gridDiv.appendChild(row);
    }
}

const resetGrid = () => {
    const grid = document.querySelectorAll(".grid-box")
    grid.style.backgroundColor = "black";
}


createGrid(gridSize);