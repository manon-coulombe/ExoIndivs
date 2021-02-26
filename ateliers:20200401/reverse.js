// niveau 1
let mot
function solution(mot) {
  return mot.split('').reverse().join('');
}
console.log(solution('Manon'));
//split() transforme la string en tableau, reverse() inverse les éléments du tableau, join() retransforme le tableau en string

// // niveau 2
// let alaphabet = {
//   a : '.-',
//   b : '-...',
//   c : '-.-.',
//   d : '-..',
//   e : '.',
//   f : '..-.',
//   g : '--.',
//   h : '....',
//   i : '..',
//   j : '.---',
//   k : '-.-',
//   l : '.-..',
//   m : '--',
//   n : '-.',
//   o : '---',
//   p : '.--.',
//   q : '--.-',
//   r : '.-.',
//   s : '...',
//   t : '-',
//   u : '..-',
//   v : '...-',
//   w : '.--',
//   x : '-..-',
//   y : '-.--',
//   z : '--..',

//   1 : '.----',
//   2 : '..---',
//   3 : '...--',
//   4 : '....-',
//   5 : '.....',
//   6 : '-....',
//   7 : '--...',
//   8 : '---..',
//   9 : '----.',
//   0 : '-----',
// }

// let morse

// function split(morse) {
//   return morse.split(' ')
// }
// console.log(split("... --- ..."))

// function decoder(morse) {
//   let arrayMorse = morse.split(' ')
//   arrayMorse.forEach
// }
