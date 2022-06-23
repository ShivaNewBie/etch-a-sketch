// const gridnum = 16;
// const cellnum = 16;

let container = document.querySelector(".container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

let rowsclass = document.querySelector("cell");
let button = document.querySelector(".btn");

// button.addEventListener("click", (gridcells) => {});

function changeGrid(input) {
  gridrows(input);
  gridcells(input);
}

function gridrows(gridnum) {
  for (i = 0; i < gridnum; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
  }
}
gridrows(16);

function gridcells(cellnum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellnum; j++) {
      //iterate on each row
      let cell = document.createElement("div");
      rows[j].appendChild(cell).className = "cell";
    }
  }
}
gridcells(16);

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "salmon";
  });
  // cells[i].addEventListener("mouseout", (event) => {
  //   event.target.style.backgroundColor = "white";
  // });
}
// cells[i].addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "salmon";
// });
// cells[i].addEventListener("mouseout", () => {
//   document.body.style.backgroundColor = "pink";
// });
