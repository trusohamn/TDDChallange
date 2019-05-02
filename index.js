/*jshint esversion: 6 */
function helloWorld() {
  return 'Hello World!';
}

function findFirstNumberInArray(yourArray) {
  return yourArray.find(el => typeof el !== el);
}

module.exports.helloWorld = helloWorld;
module.exports.findFirstNumberInArray = findFirstNumberInArray;
