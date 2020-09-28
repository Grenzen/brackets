module.exports = function check(str, bracketsConfig) {
    let stackOfBrackets = [];
    let lengthStr = str.length;
    let lengthConfig = bracketsConfig.length;
    let count = 0;
  
    for (let i = 0; i < lengthStr; i++) {
  
      let bracket = str[i];
  
      for (let j = 0; j < lengthConfig; j++) {
  
        if (bracket === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
  
        stackOfBrackets.push(bracket);
      
        } else if (count === 0 && bracket === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1] || ( count > 0 && bracket == bracketsConfig[j][1] && bracketsConfig[j][1] === bracketsConfig[j][0]) && bracketsConfig[j][1] !== stackOfBrackets[stackOfBrackets.length-1] ) {
  
          stackOfBrackets.push(bracket);
          count = count + 1;
  
        } else if ( (bracket == bracketsConfig[j][1] && bracketsConfig[j][1] !== bracketsConfig[j][0]) || ( count > 0 && bracket == bracketsConfig[j][1] && bracketsConfig[j][1] === bracketsConfig[j][0]) ) {
  
          if (stackOfBrackets.length === 0 && bracket == bracketsConfig[j][1]) {
            return false;
          } 
    
          let previousBracket = stackOfBrackets[stackOfBrackets.length-1];
  
          if ( bracketsConfig[j][0] !== bracketsConfig[j][1] && previousBracket !== bracketsConfig[j][0]) {
            return false;
          }
  
          if (previousBracket === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
    
            stackOfBrackets.pop();
    
          } else {
    
            stackOfBrackets.pop();
            count = count - 1;
          }
        }
      }
    } 
    
    if (stackOfBrackets.length > 0 || count > 0) {
      return false;
    }
    return true;
}
