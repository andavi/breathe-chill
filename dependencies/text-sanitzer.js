// mix of samoan and german translations of common curse words
const transRxMap = [
  [ /motherfucker/gi, 'tinapacker' ],
  [ /bullshit/gi, 'faʻaipoipo' ],
  [ /asshole/gi, 'osofaʻi' ],
  [ /bastard/gi, 'faʻailoga' ],
  [ /douche/gi, 'fagu' ],
  [ /bitch/gi, 'fasipolo' ],
  [ /pussy/gi, 'muschi' ],
  [ /prick/gi, 'stechen' ],
  [ /shit/gi, 'mimiti' ],
  [ /fuck/gi, 'fufulu' ],
  [ /damn/gi, 'leai se mea' ],
  [ /crap/gi, 'vaʻa' ],
  [ /piss/gi, 'leaga' ],
  [ /dick/gi, 'togitogi' ],
  [ /cunt/gi, 'tagata faʻailoa' ],
  [ /cock/gi, 'schwanz' ],
  [ /slut/gi, 'paʻu' ],
  [ /fag/gi, 'kippe' ]
]


// some slang words (*) need more complex RXs
function addSlangPairs(rxMap) {
  let rx = /\bnig(s\b)|\bnig(?!gardly)\w+?(s\b|\b)/ig;
  let rep = (m, p1, p2) => `the nicest ${p1 || p2 ? 'people' : 'person'} I know`;
  rxMap.unshift([rx, rep]);
  console.log(rxMap);
}
// add the new sland rx and rep
addSlangPairs(transRxMap);


// ==============================
// function we will export
// ==============================
function sanitizeText(message) {
  rxMap = transRxMap;
  rxMap.forEach(([rx, rep]) => {
    message = message.replace(rx, rep);
  });
  return message;
}

module.exports = sanitizeText;
