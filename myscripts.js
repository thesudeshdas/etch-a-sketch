// get the grid-container. it is the parent container
const gridContainer = document.getElementById('gridContainer');

// add css to conatiner 
gridContainer.classList.add('flex-container');

//write function to make a grid
function grid() {
    //loop for grid
    for(let i = 0; i < 256; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        // css for grid
        item.style.border = '1px solid white';

        gridContainer.appendChild(item);
    }
}
// call the grid function
grid()

//hover to change background
function hover() {
    let gridItems = document.querySelectorAll('div.gridItem');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() { 
            item.style.background = 'black';
        })
    })
}
//calling hover function to draw
hover()

// get the button and
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', resetFunc);
resetBtn.addEventListener('click', newGrid);

function resetFunc() {
    // getting the grid and reset color
    let gridItems = document.querySelectorAll('div.gridItem');

    gridItems.forEach(item => {
        item.style.background = 'lightgrey';
    });
}


function newGrid() {
    // get the grid
    const gridContainer = document.getElementById('gridContainer');

    // change the grid size 
    gridLength = parseInt(prompt('What would you like to be your grid size?'));

    // deleting the old grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // creating a new grid
    let max = gridLength * gridLength;

    for(let i = 0; i < max; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        // css for grid
        item.style.border = '1px solid white';
        gridContainer.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;

        gridContainer.appendChild(item);
    }

    hover();
}

// random rgb button
const rgbBtn = document.getElementById('rgbBtn');
rgbBtn.addEventListener('click', randomRGB);

// funtion to change random colour
function randomRGB() {
    let gridItems = document.querySelectorAll('div.gridItem');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            
            item.style.background = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

// black button
const blackBtn = document.getElementById('blackBtn');
blackBtn.addEventListener('click', hover);