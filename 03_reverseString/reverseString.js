const reverseString = function(string) {
    let array = [];
    for (let i = 0; i < string.length; i++){
        array.push(string.charAt(i));
    }
    string = array.reverse().join('').toString();
    return string;
};

// Do not edit below this line
module.exports = reverseString;
