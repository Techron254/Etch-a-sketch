const canvas = document.querySelector('.canvas');
let canvasWidth = 400;
let canvasHeight = 400;
canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;
let cellsNumber;
cellsNumber = 16;
function CreateGridCells(cellsNumber){

    for (let i = 1; i <= cellsNumber * cellsNumber; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        canvas.appendChild(cell);
        cell.style.cssText = 'border: 0.5px solid gray; flex-grow: 1; flex-shrink: 1';
        cell.style.width = `${(canvasWidth/cellsNumber)}px`;
        cell.style.height = `${(canvasHeight/cellsNumber)}px`;
        }
}
 CreateGridCells(cellsNumber);


  const createNewGridButton = document.querySelector('#button-one');
  createNewGridButton.addEventListener('click', () => {
    cellsNumber = prompt('Enter the number of squares you wish per side for the new grid (max: 100)');
    let allCells = canvas.querySelectorAll('div');
    allCells.forEach((div) => div.remove());
    CreateGridCells(cellsNumber)});




