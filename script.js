const sizeFactor = 52;
const changeSizeBtn = document.querySelector('#change-size-btn');
const mainContent = document.querySelector('.main-content');

let size;

changeSizeBtn.addEventListener('click', () => {
    size = prompt('Enter size: ');
    mainContent.style.width = size*sizeFactor + 'px';
    removeSquares();
    addSquares();
});

function addSquares() {
    for(let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            let red = Math.random() * 256;
            let green = Math.random() * 256;
            let blue = Math.random() * 256;
            square.style.backgroundColor = `rgb(${red},${green},${blue})`;
        });
        mainContent.append(square);
    }
}

function removeSquares() {
    mainContent.querySelectorAll('div').forEach((child) => {
        child.parentElement.removeChild(child);
    });
}

function changeSquareColor() {

}