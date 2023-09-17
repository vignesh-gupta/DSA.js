/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = Array(numRows).fill(1).map((_,i)=> Array(i+1).fill(1))

  if(numRows < 3) return arr

  for(let i = 2 ; i < arr.length ; i++){
    for(let j = 1; j< arr[i].length-1 ; j++){
      arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
  }
  return arr
};

console.log(generate(5));