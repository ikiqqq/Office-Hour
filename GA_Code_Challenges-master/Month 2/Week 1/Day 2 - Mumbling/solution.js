function accum(s) {
	// your code
  let arr = []; //kita jadiin array
  
  for (let i = 0; i < s.length; i++) {
    let result = ''; // untuk nambah index
    
    for (let j = 0; j < i + 1; j++) { // untuk ngepush
      result += j == 0 ? s[i].toUpperCase() : s[i].toLowerCase();
    }
    arr.push(result);
  }
  return arr.join('-');
}

accum('abcd');
accum('RqaEzty');  