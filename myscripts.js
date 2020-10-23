// get the elements
const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.getElementById('resetBtn')
const rgbBtn = document.getElementById('rgbBtn');
const blackBtn = document.getElementById('blackBtn');



// functions

//write function to make a grid
function grid() {
    //loop for grid
    for(let i = 0; i < 256; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')
        item.style.border = '1px solid white';
        
        // add to the container
        gridContainer.appendChild(item);
    }
}

//hover to change background
function hover() {
    let gridItems = document.querySelectorAll('div.gridItem');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() { 
            item.style.background = 'black';
        })
    })
}

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

    // change the grid size ask for size 
    do{
        gridLength = parseInt(prompt('What would you like to be your grid size? Choose a number betweeen 2 and 100', 10));    
    }while(isNaN(gridLength) || gridLength < 2 || gridLength >100)
    
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

        // adding the items to grid
        gridContainer.appendChild(item);
    }
    // call hover to make it work after reset
    hover();
}

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



// call required functions
grid()
hover()



// event listening to buttons
resetBtn.addEventListener('click', resetFunc);
resetBtn.addEventListener('click', newGrid);
rgbBtn.addEventListener('click', randomRGB);
blackBtn.addEventListener('click', hover);