// On canvas, map the pixels to de x and  y axis

const params = [];
const output = [];
let xAxisLimit = 0;
let yAxisLimit = 0;
let m = 1;
let b = 0;

function addAxisLimit(){
    xAxisLimit = document.getElementById('xAxisLimit').value;
    yAxisLimit = document.getElementById('yAxisLimit').value;
}

function addParam(){
    let p = document.getElementById('trainParam').value;
    params.push(p);
}

function addOutput(){
    let o = document.getElementById('trainOutput').value;
    output.push(o);
}

function getPossibleOutput(){
    let tp = document.getElementById('testParam').value;
    let po = tp * m + b;
    document.getElementById('resultH2').innerText = po;
}

function drawLine(){
    let x1 = 0;
    let x2 = 1;
    let y1 = m * x1 + b;
    let y2 = m * x2 + b;

    x1 = map( x1 , 0 ,1, 0, xAxisLimit );
    x2 = map( x2 , 0 ,1, 0, xAxisLimit );
    y1 = map( y1 , 0 ,1, 0, yAxisLimit );
    y1 = map( y2 , 0 ,1, 0, yAxisLimit );
    //HTML5 code to draw the line here
}

function linearRegresion(){
    let xsum = 0;
    let ysum = 0;

    for (let index = 0; index < params.length; index++) {
        xsum += params[index];
    }

    for (let index = 0; index < output.length; index++) {
        ysum += output[index];   
    }

    let xmean = xsum / params.length;
    let ymean = ysum / output.length;

    let num = 0;
    let den = 0;
    for (let index = 0; index < params.length; index++) {
        num  += ( params[index] - xmean ) * ( output[index] - ymean );
        den  += ( params[index] - xmean ) * ( params[index] - xmean );
    }

    m = num / den;
    b = ymean - m * xmean;
}