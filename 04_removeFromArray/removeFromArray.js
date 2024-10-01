const removeFromArray = function (array, ...values) {
    
   let i = 0;
   while (i < array.length){
        if (values.includes(array[i])) {
            array.splice(i, 1);   
        } else {
            i++;
        }
    };


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
