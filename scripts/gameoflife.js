
function hacer2Darray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var comenzarGOL = false;
var generarCelulasRandom = false;

$("#empezar").click(function () {
    comenzarGOL = true;
    $("#reset").removeClass("hide");
    $("#empezar").addClass("hide");

    if ($("#randomCels").prop("checked")) {
        generarCelulasRandom = true;
    }
    gol.setup();
    gol.loop();
});

$("#reset").click(function () {
    comenzarGOL = false;
    $("#celdasVivas").html(0);
    $("#ciclo").html(0);
    $("#empezar").removeClass("hide");
    $("#reset").addClass("hide");

    gol.setup();
    gol.noLoop();
});

var gol = new p5(sketch_GameOfLife, 'canvas');

function sketch_GameOfLife(p) {

    let grid;
    let cols;
    let rows;
    let resolucion = 5;
    let winWidth = 800;
    let winHeight = 400;
    let ciclo = 0;
    let frameRate = 30;

    p.setup = function () {

        p.frameRate(frameRate);
        p.createCanvas(winWidth, winHeight);

        cols = winWidth / resolucion;
        rows = winHeight / resolucion;

        grid = hacer2Darray(cols, rows);

        //if (!generarCelulasRandom) return;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = p.floor(p.random(2));
            }

        }
    }

    p.draw = function () {
        p.background(200);

        if (!comenzarGOL) return;

        ciclo++;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = i * resolucion;
                let y = j * resolucion;
                if (grid[i][j] == 1) {
                    p.fill(255);
                    p.stroke(0);
                    p.rect(x, y, resolucion - 1, resolucion - 1);
                }
            }
        }

        let siguiente = hacer2Darray(cols, rows);
        let celulas = 0;
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let estado = grid[i][j];

                let vecinos = p.contarVecinos(grid, i, j);

                if (estado == 0 && vecinos == 3) {
                    siguiente[i][j] = 1;

                } else if (estado == 1 && (vecinos < 2 || vecinos > 3)) {
                    siguiente[i][j] = 0;
                } else {
                    siguiente[i][j] = estado;
                }

                if (siguiente[i][j] == 1)
                    celulas++;
            }
        }



        grid = siguiente;
        $("#celdasVivas").html(celulas);
        $("#ciclo").html(ciclo);
    }


    p.contarVecinos = function (grid, x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

    // p.mouseDragged = function () {
    //     //console.log(p.mouseX, p.mouseY);
    //     for (let i = 0; i < cols; i++) {
    //         for (let j = 0; j < rows; j++) {
    //             let x = i * resolucion + resolucion / 2;
    //             let y = j * resolucion + resolucion / 2;
    //             //console.log(x, y);
    //             //console.log(p.dist(p.mouseX, p.mouseY, centroX, centroY));
    //             if (p.dist(p.mouseX, p.mouseY, x, y) <= resolucion / 2) {
    //                 grid[i][j] = 1;
    //                 p.fill(255);
    //                 p.stroke(0);
    //                 p.rect(i * resolucion, j * resolucion, resolucion, resolucion);
    //                 //console.log(i, j);
    //             }
    //         }

    //     }

    // }
}

