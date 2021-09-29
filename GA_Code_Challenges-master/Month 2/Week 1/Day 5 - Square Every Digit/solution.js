function squareDigits(num){
    let string = num.toString();  // turn number to a string
    let results = [];             // create an array to save the new values of the string
    for (let i = 0; i < string.length; i++){  // iterate through the string
        results[i] = string[i] * string[i];   // save the square of the number to the array 
    }
    return Number(results.join('')); // turn the array into a string and then into a number
  }

  /*function squareDigits(num){
    // jadiin string dulu
    let n = num.toString();
    // bikin array buat nampung
    let tempArr = [];
    // looping, terus push masing2 i disquare secara berurut
    for (let i = 0; i < n.length; i++) {
      tempArr[i] = n[i] * n[i];
    }
    // join, trs jadiin number
    let square = parseInt(tempArr.join(''));
    return square;
  }*/