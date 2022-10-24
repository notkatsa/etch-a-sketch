const col = [];
const container = document.getElementById('container');
// since grid is 40rem then the size of the boxes should be 40/grid_sizerem
// create the GRID_SIZExGRID_SIZE grid and add event listeners!
function createGrid(grid_size){
    for (let i = 0; i < grid_size; i++) {
        col[i] = document.createElement('div');
        col[i].className = 'col';
        container.appendChild(col[i]);
        for (let j = 0; j < grid_size; j++) {
            const box = document.createElement('div');
            box.className = "box";
            box.style.width = 40/grid_size+"rem";
            box.style.height = 40/grid_size+"rem";
            box.addEventListener("mouseover", draw);
            box.addEventListener("mousedown", draw);
            col[i].appendChild(box);
        }
    }
}

function draw(e) {
    e.target.style.backgroundColor = 'black';
}

// base size 16x16
createGrid(16);

// slider for size
var slider = document.querySelector('#sizeRange');
slider.addEventListener('mouseup', pixelSize);
function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}