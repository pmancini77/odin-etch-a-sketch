const container = document.querySelector('.container');

let size = (number = 16) => {
    for (i = 0; i < number; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        for (x = 0; x < number; x++) {
            let square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
        }
    }
}
size();

let color = () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}

color();

const btn = document.querySelector('.btn');
const grids = document.querySelectorAll('.grid');

btn.addEventListener('click', () => {
    const btn = document.querySelector('.btn');
    const grids = document.querySelectorAll('.grid');
    let newSize = window.prompt("Please enter the new size: ");
    grids.forEach((grid) => {
        container.removeChild(grid)
    });
    size(newSize);
    color();
});