// takes in string of hex codes and returns rgb and rgb values with specified opacity
// Used with values from this site: https://javier.xyz/cohesive-colors/

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      console.log('m', m);
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var specs = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

    var formatted = `rgb(${specs.r}, ${specs.g}, ${specs.b})`

    return formatted;
}

function rgbToRgba(rgb) {
  const parts = rgb.split(/\(|\)/);
  return `rgba(${parts[1]}, ${this.opacity})`;
}

function hexToRGBa (hexListStr, opacity) {
  return hexListStr.split(', ').map(hexToRgb).map(rgbToRgba, {opacity});
}
// hexToRGBa('#365FA3, #9DD98A, #9A77C7, #D5475A, #FCE4A8, #4FCCED', .5);

const bluishO = hexToRGBa('#365FA3, #9DD98A, #9A77C7, #D5475A, #FCE4A8, #4FCCED',1);
const bluishT = hexToRGBa('#365FA3, #9DD98A, #9A77C7, #D5475A, #FCE4A8, #4FCCED',.1);

const emotions = ['sentiment', 'anger', 'fear', 'joy', 'sadness', 'surprise'];

const colormap = {};
function getPairs(i) {
  return [bluishO[i], bluishT[i]];
}
for (c of emotions) {
  colormap.sentiment = getPairs(1);
  colormap.anger = getPairs(3);
  colormap.fear = getPairs(4);
  colormap.joy = getPairs(5);
  colormap.sadness = getPairs(0);
  colormap.surprise = getPairs(2);
}

// console.log(bluishO, bluishT);
console.log(colormap)

module.exports = {
  hexToRgb,
  hexToRGBa,
  colormap
}
