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
}

// VARIABLES --------------------------
// global
const CONTAINER = document.querySelector('#container');
