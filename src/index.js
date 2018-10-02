module.exports = function longestConsecutiveLength(array) {
    var ARRAY = [];
    var counter = 0;
    for( var i = 0; i<array.length; i++) {
        if (array[i + 1]-1 === array[i]) {
            ARRAY.push(array[i]);
        }
        else if (array[i + 1] !== array[i]){
            ARRAY = [];
        }
        if (counter < ARRAY.length) {
            counter = ARRAY.length;}
    }
    return counter + 1;
}