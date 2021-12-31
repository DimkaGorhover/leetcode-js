// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
  
    let result = 0;
    let multiplier = 1;
  
    while (num1 > 0 || num2 > 0) {
      
      const v1 = Math.floor(num1 % 10);
      const v2 = Math.floor(num2 % 10);
      
      const v = (v1 + v2)
      result = result + (v * multiplier);
      
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
      
      multiplier = multiplier * 10 * (v > 9 ? 10 : 1);
    }
    return result
  }
