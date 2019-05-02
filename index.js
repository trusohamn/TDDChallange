/*jshint esversion: 6 */
function helloWorld() {
  return 'Hello World!';
}

function findFirstNumberInArray(yourArray) {
  return yourArray.find(e => ! isNaN(e));
}

module.exports.helloWorld = helloWorld;
module.exports.findFirstNumberInArray = findFirstNumberInArray;
