'use strict';
const airline = 'TAP Air Portugal Air';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airline.replace('Air', 'aa'));
console.log(airline.replaceAll('Air', 'aa'));
console.log(airline.replace(/Air/g, 'aa')); //replaceAll 역할 ->g:전역검사
console.log(plane.padStart(23, '@').padEnd(30, '!'));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'0'.repeat(i + 1)}`);
  }
});

// for ...in // 객체 순환
// for ...of // 배열 값 순환 //이터러블

// 배열에 of넣으면 값 나오고. in 인덱스값
