const fs = require('fs');

// get word map into js
const wordPairs = fs.readFileSync('off-word-map', 'utf8').split('\n').map(w => w.trim().toLowerCase()).sort((a,b) => b.slice(0, b.indexOf('-')).length - a.slice(0, a.indexOf('-')).length);
// console.log(wordPairs);

// turn standard bad words into RXs
let offRXs = wordPairs.map(p => p.split('-')[0].trim()).map(w => new RegExp(w, 'ig'));


// pair replacements to RXs array
const replacements = wordPairs.map(p => p.split('-')[1].trim());
const rxMap = offRXs.map((rx, i) => [rx, replacements[i]]);
console.log(rxMap);


// // some slang words (*) need more complex RXs
let rx = /\bnig(s\b)|\bnig(?!gardly)\w+?(s\b|\b)/ig;
let rep = (m, p1, p2) => `ninja turtle${p1 || '' + p2|| ''}`;
rxMap.push([rx, rep]);

// ==============================
// the function we will export
function cleanMessage(message) {
  console.log(message);
  rxMap.forEach(([rx, rep]) => {
    message = message.replace(rx, rep);
  });
  return message;
}
// ==============================

// for anyone reading my code these test comments in no way represent me please know
let test = 'I hate these cocksuckers fucking no good shit stain nigs sluttin around makin even more niglettes!'

console.log(cleanMessage(test));


module.exports = cleanMessage;
