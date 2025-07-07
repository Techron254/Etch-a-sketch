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
        cell.style.cssText = 'border: 0.5px solid rgba(129, 124, 124, 0.77); flex-grow: 1; flex-shrink: 1; box-sizing: border-box;';
        cell.style.width = `${(canvasWidth/cellsNumber)-0.2}px`; //Turns out there is some pixels that leak or are not accounted for when we calculate the width because they have gone into borders and stuff so we have to compensate for them by minusing that numnber else they cause the grid to misbehave by stacking some cells out of order. I arrived at 0.2 by juxt trial and error. will fix it when I figure out what was missing in our calculation but for now that's the best we've got.
        cell.style.height = `${(canvasHeight/cellsNumber)}px`;
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
    let allCells = canvas.querySelectorAll('div');
    allCells.forEach((div) => div.remove());
    CreateGridCells(cellsNumber)});

const resetGridButton = document.querySelector('#button-two');
  resetGridButton.addEventListener('click', () => {
     let allCells = canvas.querySelectorAll('div');
      allCells.forEach((div) => div.remove());

      CreateGridCells(cellsNumber);
    });