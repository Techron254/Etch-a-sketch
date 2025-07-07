const canvas = document.querySelector('.canvas');
let canvasWidth = 400;
let canvasHeight = 400;
canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;
let cellsNumber = 10;

function CreateGridCells(cellsNumber){

    for (let i = 1; i <= cellsNumber * cellsNumber; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        canvas.appendChild(cell);
        cell.style.cssText = 'border: 0.5px solid gray; flex-grow: 1';
        cell.style.width = `${(canvasWidth/cellsNumber)-1}px`;
        cell.style.height = `${(canvasHeight/cellsNumber)}px`;
        }
}
  CreateGridCells(16);
