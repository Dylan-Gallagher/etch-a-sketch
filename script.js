const container = document.getElementById("container");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (' ');
        container.appendChild(cell).className = "grid-item";
    };
  };
  
makeRows(32, 32);

let divs = document.querySelectorAll(".grid-item");

divs.forEach(function(elem) {
    elem.addEventListener("mouseover", event => {
        elem.setAttribute('class', 'hover');                              
    });
});


divs.forEach(function(elem) {
    elem.addEventListener("mouseout", event => {
        elem.removeAttribute('class');                           
    });
});