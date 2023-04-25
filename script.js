const gridSize = 32
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
            row.appendChild(gridBox)
        }
        gridDiv.appendChild(row);
    }
}

createGrid(gridSize);