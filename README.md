# prova_logica_js_fs12

# Dupla Alessandro e Paulo

```js
01 - A
02 - A
03 - A
04 - A
05 - A
06 - A
07 - A
08 - B
09 - B
10 - A
11 - A

12 - 

const notas = [10,6,8,7,5];

let somaDasNotas = 0;
for (let index = 0; index < notas.length; index++) {
      somaDasNotas += notas[index];   
}
const media = somaDasNotas / notas.length

console.log(media);

13 - 
const nomeCompleto = (nome)=>{
   const data = new Date();
   const dia = data.getDate()
   const ano = data.getFullYear()
   const mes = data.getMonth()

   const diaMesAno = `0${dia}/0${mes}/${ano}`

   
   console.log(diaMesAno);
   const fullName = nome.split(' ')

   console.log(`${fullName[0]}_${fullName[1]}_${diaMesAno}`);

}

nomeCompleto('Raimundo José dos Santos Nascimento')

14 - Na pasta IMCJS está a calculadora de Índice
```