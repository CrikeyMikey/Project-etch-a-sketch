const gridSize = 4
const gridDiv = document.querySelector(".gridDiv")

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }
        gridDiv.appendChild(row);
    }
}

createGrid(gridSize);