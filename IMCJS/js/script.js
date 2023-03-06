
// IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

// Select elements
const calcDisplay = document.querySelector('.calc-container')
const showImc = document.querySelector('.result-container')

const imcNumber = document.querySelector('#imc-number span')
const imcInfo = document.querySelector('#imc-info span')


const imcTable = document.querySelector('.imc-table');
const tableData = document.querySelector('.table-data');
const tableHeader = document.querySelector('#imc-table')
const height = document.querySelector('input[name="height"]');
const weight = document.querySelector('input[name="weight"]');
const clearBtn = document.querySelector('.clear-btn')

const backBtn = document.querySelector('#back-btn');

// Insert Data in 
function addData(){
        // throw out the data 
    for (const itemData of data) {
        const classification = document.createElement('p');
        const info = document.createElement('p');
        const obesity = document.createElement('p')
        classification.innerText = `${itemData.classification}`;
        info.innerText = `${itemData.info}`;
        obesity.innerText = `${itemData.obesity}`;
      
        // add data inside table data
        const div = document.createElement('div');
        div.classList.add('table-data');
        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)
        tableHeader.appendChild(div);       
    }
}
addData()


// Eventos
// ********* Validate inputs ********
function validadeInputs(digits){
    return digits.replace(/[^0-9,]/g, "");
}
[height, weight].forEach( (inputs)=>{
    inputs.addEventListener('input', (e)=>{
      const updateValue =  validadeInputs(e.target.value);
      e.target.value = updateValue
    })
})

// utilities functions
function cleanInputs() {
    height.value='';
    weight.value='';
    imcInfo.classList='';
    imcNumber.classList='';

}

function calcIMC(weight, height){
    const imc = (weight / (height * height)).toFixed(1)
    return imc
}

function showAndHide(){
    calcDisplay.classList.toggle('hide')
    showImc.classList.toggle('hide')
}

function classificationColor(classification){
 
    switch (classification) {
        case 'Magreza': 
        imcInfo.classList.add('low');
        imcNumber.classList.add('low')
        break;
        case 'Normal': 
        imcInfo.classList.add('good')
        imcNumber.classList.add('good')
        break;
        case 'Sobrepeso': 
        imcInfo.classList.add('low')
        imcNumber.classList.add('low')
        break;
        case 'Obesidade': 
        imcInfo.classList.add('high')
        imcNumber.classList.add('high')
        break;
        case 'Obesidade grave': 
        imcInfo.classList.add('high')
        imcNumber.classList.add('high')
        break;
    
        default:
            break;
    }
}

// Select btn submit
const btnCalcular = document.querySelector('button')

btnCalcular.addEventListener('click', (e)=>{
    e.preventDefault();
   
   const heightValue = +height.value.replace(',', '.');
   const weightValue = +weight.value.replace(',', '.');

    if(!heightValue || !weightValue) return;
    
    const imc = calcIMC(weightValue, heightValue);

    let info;

    data.forEach((item)=>{
        if(imc >= item.min && imc <= item.max){
            info = item.info
        }    
    });

    imcNumber.innerHTML = ` ${imc}`;
    imcInfo.innerHTML = info;

    classificationColor(info);
    showAndHide();
    if(!info) return;
})


backBtn.addEventListener('click', ()=>{
    showAndHide();
    cleanInputs();
})