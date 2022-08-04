const removeFromArray = function(array, ...args) {
    for (const argument of args){
        const index = array.indexOf(argument);
        if (index > -1){
            array.splice(index, 1);
        }
        else{
            console.log("argument not found in array");
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
