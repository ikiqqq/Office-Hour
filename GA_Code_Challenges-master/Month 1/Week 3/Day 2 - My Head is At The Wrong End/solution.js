function fixTheMeerkat(arr) {
    //your code here 
     const tail = arr.shift();
     const body = arr.pop();
   
   arr.push(tail);
   arr.unshift(body);
   
   return arr;
   }

   //best solution

   function fixTheMeerkat(arr) {
    return arr.reverse();
  }


  const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

  