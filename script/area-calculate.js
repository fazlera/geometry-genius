function calculateTriangleArea(){

    const triangleInputB = document.getElementById('triangle-inputB').value;
    // const triangleInputBValue = parseFloat(triangleInputB);
    // console.log(triangleInputBValue);

    const triangleInputH = document.getElementById('triangle-inputH').value;
    // const triangleInputHValue = parseFloat(triangleInputH);
    // console.log(triangleInputHValue);
    const triangleInputBCalculate = (0.5 * parseFloat(triangleInputB)) * parseFloat(triangleInputH);

    document.getElementById('area-value').innerText = triangleInputBCalculate;
  
    addToCalculationEntry('triangle',triangleInputBCalculate)

}

function calculateRectangleArea(){
    
    const rectangleInputW = document.getElementById('rectangle-inputW').value;
    const rectangleInputL = document.getElementById('rectangle-inputL').value;
    const rectangleInputBCalculate = parseFloat(rectangleInputW) * parseFloat(rectangleInputL);

    if(isNaN(rectangleInputW) || isNaN(rectangleInputL)){
        alert('please input a valid number');
        return;
    }
    if(isNaN(rectangleInputBCalculate)){
        return alert('input the value');
    }
    document.getElementById('rectangle-value').innerText = rectangleInputBCalculate;
    addToCalculationEntry('rectangle',rectangleInputBCalculate)
}


function calculateParallelogramArea(){
    const ParallelogramB = getId('Parallelogram-inputB');
    const ParallelogramH = getId('Parallelogram-inputH');
    const ParallelogramTotal = ParallelogramB * ParallelogramH;
    areaValue('Parallelogram-value', ParallelogramTotal);

    addToCalculationEntry('Parallelogram',ParallelogramTotal)
   
}

function getId(id){
    const input = document.getElementById(id).value;
    return parseFloat(input);
}

function areaValue(getId , setValue){
    const area = document.getElementById(getId);
    area.innerText = setValue;
    return area;
}

// calculateEllipseArea() Math.PI = 3.14 For This Value
function calculateEllipseArea(){
    const EllipseInputA = getId('Ellipse-inputA');
    const EllipseInputB = getId('Ellipse-inputB');
    const EllipseTotal = Math.PI * EllipseInputA * EllipseInputB;
    areaValue('Ellipse-value', EllipseTotal.toFixed(3))
    addToCalculationEntry('Ellipse',EllipseTotal.toFixed(3))
}

// add to calculation entry or quantity
function addToCalculationEntry(getByElement, areaTotal){

    console.log(getByElement + " " +areaTotal);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =`${count + 1} ${getByElement} ${areaTotal} cm<sup>2</sup> 
    <button class="btn btn-success">convert</button>
    `;
    calculationEntry.appendChild(p);
}