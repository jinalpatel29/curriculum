/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  let denominator = 1;
  let temp;
  if(a > b){
    temp = a;
  }else{
    temp = b;
  }
  for(let i=1; i<=temp; i++){
   if(a%i == 0 && b%i == 0){
     if(denominator < i){
        denominator = i;
      }
    }
  }
 return denominator;
};

module.exports = {
  solution,
};
