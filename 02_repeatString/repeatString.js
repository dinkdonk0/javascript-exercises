

const repeatString = function(word, multiply) {
    if(multiply<1){
        return "Error";
    }
    let newWord = "";
    for(let i=0;i<multiply;i++){
        newWord+=word;
    }
    return newWord;
};
repeatString("hey",3);
// Do not edit below this line
module.exports = repeatString;
