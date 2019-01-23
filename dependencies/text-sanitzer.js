const fs = require('fs');

// get word map into js
const wordPairs = fs.readFileSync('off-word-map', 'utf8').split('\n').map(w => w.trim().toLowerCase()).sort((a,b) => b.slice(0, b.indexOf('-')).length - a.slice(0, a.indexOf('-')).length);
// console.log(wordPairs);

// turn standard bad words into RXs
let offRXs = wordPairs.map(p => p.split('-')[0].trim()).map(w => {
  try {
    return new RegExp(w, 'ig');
  }
  catch (e) {
    return w;
  }
});

// console.log(offRXs)

// // some slang words (*) need more complex RXs
let rx = /\bnig(?!gardly)\w*/ig;
offRXs[offRXs.indexOf('*n_word')] = rx;
// console.log(offRXs)

// pair replacements to RXs array
const replacements = wordPairs.map(p => p.split('-')[1].trim());
const rxMap = offRXs.map((rx, i) => [rx, replacements[i]]);
console.log(rxMap);

// ==============================
// the function we will export
function cleanMessage(message) {
  rxMap.forEach(([rx, rep]) => {
    message = message.replace(rx, rep);
  });
  return message;
}
// ==============================

// for anyone reading my code these test comments in no way represent me please know
let test = 'I hate these cocksuckers fucking no good shit stain nigs around here!'

console.log(cleanMessage(test));


module.exports = cleanMessage;