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
        cell.style.cssText = 'border: 1px solid rgba(129, 124, 124, 0.77); flex-grow: 1; flex-shrrrink: 1; box-sizing: border-box;';
        cell.style.width = `${((1/cellsNumber) * 100)}%`;
        cell.style.height = `${((1/cellsNumber)*100)}%`;
        canvas.appendChild(cell);

        cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'rgb(115, 190, 115)';
        })

    }
}

 CreateGridCells(cellsNumber);


const createNewGridButton = document.querySelector('#button-one');
  createNewGridButton.addEventListener('click', () => {
    cellsNumber = prompt('Enter the number of squares you wish per side for the new grid (max: 100)');

    if (isNaN(cellsNumber) || cellsNumber >100 || cellsNumber < 1){
      alert("Please input a number between 1 to 100");
    }
    else {
    let allCells = canvas.querySelectorAll('div');
    allCells.forEach((div) => div.remove());
    CreateGridCells(cellsNumber);
  }
  });

const resetGridButton = document.querySelector('#button-two');
  resetGridButton.addEventListener('click', () => {
     let allCells = canvas.querySelectorAll('div');
      allCells.forEach((div) => div.remove());

      CreateGridCells(cellsNumber);
    });