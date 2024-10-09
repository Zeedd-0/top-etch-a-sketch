
// FUNCTIONS -------------------------
function divideContainer() {
    for (i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        CONTAINER.appendChild(square);
    };
}

// VARIABLES --------------------------
// global
const CONTAINER = document.querySelector('#container');
