//const n = 14;


// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// console.log(arr); 


// function multiplyByTwo(num) {
//     return num * 2
// }

// let arr = [1, 2, 3, 4, 5];
// let resultArr = arr.map(multiplyByTwo);
// console.log(resultArr); 


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      sum += arr[i];
// }
//     console.log(sum); 


function greet(name) {
     console.log(`Hello, ${name}`);
    }
    function greetAll(names) {
         for (let i = 0; i < names.length; i++) {
            greet(names[i]);
         }
 }
        let namesArr = ["Alice", "Bob", "Charlie"];
        greetAll(namesArr); 


      
const nomeCompleto = (nome)=>{
   const data = new Date();
   const dia = data.getDate()
   const ano = data.getFullYear()
   const mes = data.getMonth()


   const dataFormatZero = (_dia)=>{
      const diaString = _dia.toString().length;
      return parseInt(diaString) === 1 ? `0${_dia}`: _dia ;
   }

   const diaMesAno = `${dataFormatZero(dia)}${dataFormatZero(mes)}${ano}`

   console.log(diaMesAno);
   const fullName = nome.split(' ')

   console.log(`${fullName[0]}_${fullName[1]}_${diaMesAno}`);

}

nomeCompleto('Raimundo José dos Santos Nascimento')