// functions -------------------------
function getDim() {
    let keepAsking = 1;
    while (keepAsking) {
        grid = prompt(
            'Give a number to make a new square grid (NxN).\n' +
            'Number should be between 2 and 100.');
        if (grid >= 2 && grid <= 100 && !isNaN(grid * 1)) {
            while (CONTAINER.lastElementChild) CONTAINER.lastChild.remove();
            return grid;
        };
    };
}

function divideContainer(dim = 16) {
    for (i = 0; i < dim * dim; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = 'calc(80vh / ' + dim + ')';
        square.style.height = 'calc(80vh / ' + dim + ')';
        CONTAINER.appendChild(square);
    };
    addTrail();
}

function addTrail() {
    SQUARES = document.querySelectorAll('.square');
    SQUARES.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('trail');
            if (effect === 1) {
                darkeningTrail(square);
            } else {
                randomTrail(square);
            };
        });
    });
}

function darkeningTrail(square) {
    if (square.style.backgroundColor === '') {
        let primeOp = square.style.opacity;
        if (primeOp * 1 !== 1) {
            square.style.opacity = primeOp * 1 + 0.1;
        };
    } else {
        square.style.backgroundColor = '';
        square.style.border = '';
        square.style.opacity = '';
    };
}

function randomTrail(square) {
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    square.style.border = `1px solid rgb(${r}, ${g}, ${b})`;
    square.style.opacity = 1;    
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}


// ROUTINE ---------------------------
function makeNewGrid() {
    divideContainer(getDim());
}


// VARIABLES --------------------------
// global
const CONTAINER = document.querySelector('#container');
const BUTTON = document.querySelector('#btn');
const DARKENING = document.querySelector('#darkening-effect');
const RANDOM = document.querySelector('#random-color');
let SQUARES = document.querySelectorAll('.square');
let grid = 0;
let effect = 1;



// INTERACTION -----------------------
BUTTON.addEventListener('click', makeNewGrid);
DARKENING.addEventListener('click', () => {
    effect = 1;
});
RANDOM.addEventListener('click', () => {
    effect = 2;
});