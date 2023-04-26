const gridSize = 12
const gridDiv = document.querySelector(".gridDiv")
const resetBtn = document.querySelector(".reset-btn")
const container = document.querySelector(".gridDiv")

const createGrid = (gridSize) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    //Generation loops for rows and boxes
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 600 / gridSize;
            const gridBox = document.createElement('div')
    //Adds functionality for boxes to fill in when mouse enters them
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'gray';
            })
            row.appendChild(gridBox)
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper)
}

createGrid(gridSize)

resetBtn.addEventListener("click", () => {
    let userSize = Number(prompt('What size would you like the board to be?'))

    while(userSize > 100) {
        userSize = Number(prompt('Pick a smaller number, 100 or less'))
    }

    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    createGrid(userSize);
})