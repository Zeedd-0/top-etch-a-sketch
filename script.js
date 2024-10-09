// INTERACTION -----------------------
// window.addEventListener('load', () => {
//     divideContainer()
// });


// function -------------------------
function divideContainer(dim = 16) {
    for (i = 0; i < dim * dim; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = 'calc(80vh / ' + dim + ')';
        square.style.height = 'calc(80vh / ' + dim + ')';
        CONTAINER.appendChild(square);
    };
    SQUARES = document.querySelectorAll('.square');
    addTrail();
}
    
function addTrail() {
    SQUARES.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('trail');
        });
    });
}
// }

// VARIABLES --------------------------
// global
const CONTAINER = document.querySelector('#container');
let SQUARES = document.querySelectorAll('.square');