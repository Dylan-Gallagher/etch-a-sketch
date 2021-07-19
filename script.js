const container = document.getElementById("container");
let divs;
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (' ');
        container.appendChild(cell).className = "grid-item";            
        
        divs = document.querySelectorAll(".grid-item");
        divs.forEach(function(elem) {
            elem.addEventListener("mouseover", event => {
             elem.setAttribute('class', 'hover');                              
            });
        });
    };
};

makeRows(16,16);

let btn = document.querySelector('#clear');
btn.addEventListener('click', event => {
    console.log('hello');
    divs.forEach(function(elem) {
        elem.removeAttribute('class');
    });
    size = prompt('What resolution canvas do you want?');

    size = Number(size);

    divs.forEach(function(elem) {
        container.removeChild(elem);
    });
    makeRows(size, size);
});
