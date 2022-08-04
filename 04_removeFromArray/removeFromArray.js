const removeFromArray = function(array, toRemove) {
    for (const element of array){
        if (toRemove == element){
            const index = array.indexOf(element);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
