// mix of samoan, swahili, german and icelandic (prioritized in that order) translations of common curse words
// this map was generated programmatically with one manual insertion
const transRxMap = [
  [ /motherfucker/gi, 'tinapacker' ],  // sa
  [ /bullshit/gi, 'faʻaipoipo' ],  // sa
  [ /asshole/gi, 'osofaʻi' ],  // sa
  [ /bastard/gi, 'faʻailoga' ],  // sa
  [ /douche/gi, 'fagu' ],  // sa
  [ /bitch/gi, 'fasipolo' ],  // sa
  [ /pussy/gi, 'kisa' ],  // ic
  [ /prick/gi, 'tamaa' ],  // sw
  [ /shit/gi, 'mimiti' ],  // sa
  [ /fuck/gi, 'fufulu' ],  // sa
  [ /damn/gi, 'leai se mea' ],  // sa
  [ /crap/gi, 'vaʻa' ],  // sa
  [ /piss/gi, 'leaga' ],  // sa
  [ /dick/gi, 'togitogi' ],  // sa
  [ /cunt/gi, 'tagata faʻailoa' ],  // sa
  [ /cock/gi, 'jogoo' ],  // sw
  [ /slut/gi, 'paʻu' ],  // sa
  [ /fag/gi, 'kippe' ]  // ge
]


// some slang words (*) need a more complex regex
function addSlangPairs(rxMap) {
  let rx = /\bnig(s\b)|\bnig(?!gardly)\w+?(s\b|\b)/ig;
  let rep = (m, p1, p2) => `the nicest ${p1 || p2 ? 'people' : 'person'} I know`;
  rxMap.unshift([rx, rep]);
  // console.log(rxMap);
}
// add the new slang rx and rep
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
