const canvas = document.querySelector('.canvas');
let canvasWidth = 500;
let canvasHeight = 500;
canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;
let cellsNumber = 16;
function CreateGridCells(cellsNumber){

    for (let i = 1; i <= cellsNumber * cellsNumber; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.cssText = 'border: 1px solid rgba(63, 62, 62, 0.77); flex-grow: 1; box-sizing: border-box;';
        cell.style.width = `${((1/cellsNumber) * 100)}%`;
        cell.style.height = `${((1/cellsNumber)*100)}%`;
        cell.style.backgroundColor ='rgba(0, 0, 0)';
        canvas.appendChild(cell);

    }
}
 
CreateGridCells(cellsNumber);

const allCells = canvas.querySelectorAll('.cell');
 
 function hover() {
    allCells.forEach((cell) =>{
      cell.addEventListener('mouseover', () => {
      if (isMouseDown === false) {
        cell.style.backgroundColor = 'rgb(115, 190, 115)';
        }}); 
      });
  }
    
let isMouseDown = false;
document.addEventListener('mousedown', () => {
  isMouseDown = true; 
});
document.addEventListener('mouseup', () => {      
  isMouseDown = false; 
});

function clickAndDrag() {
  allCells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
        while (isMouseDown) {
        cell.style.backgroundColor = 'rgb(115, 190, 115)';
      }})});
}
const createNewGridButton = document.querySelector('#create-grid');
  createNewGridButton.addEventListener('click', () => {
    cellsNumber = prompt('Enter the number of squares you wish per side for the new grid (max: 100)');

    if (isNaN(cellsNumber) || cellsNumber > 100 || cellsNumber < 1){
      alert("Please input a number between 1 to 100");
    }
    else {

    allCells.forEach((div) => div.remove());
    
    CreateGridCells(cellsNumber);
  }
  });

const resetGridButton = document.querySelector('#reset-button');
  resetGridButton.addEventListener('click', () => {

      allCells.forEach((div) => div.remove());

      CreateGridCells(cellsNumber);
    });

const eraserButton = document.querySelector('#eraser');
  eraserButton.addEventListener('click', e =>  erase());

function erase(){
      allCells.forEach((cell) =>{
        cell.removeEventListener('mouseover', () => {
        cell.style.backgroundColor = 'rgb(115, 190, 115)';
        });
        
    cell.addEventListener('mouseover', () => {
      if (cell.style.backgroundColor != "rgba(0, 0, 0)"){
        cell.style.backgroundColor ='rgba(0, 0, 0)';
}})});
}

const hoverButton = document.querySelector('#toggle-button');
hoverButton.addEventListener('click', e => hover());

const clickAndDragButton = document.querySelector('#click-and-drag');
clickAndDragButton.addEventListener('click', e => {
  allCells.forEach((cell) => {
  clickAndDrag();
  });
});