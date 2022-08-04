const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || 
        typeof int1 != "number"
        || typeof int2 != "number" ){
        return "ERROR";
    }
    else{
        if (int1 <= int2){
            sum = compare(int1, int2);
        }
        else{
            sum = compare(int2, int1); 
        }
        return sum;
    }
};

function compare(int1, int2){
    let sum = int1;
        while(int1 < int2){
            int1++;
            sum += int1;
        }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
