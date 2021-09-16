function accum(s) {
	// your code
  let arr = []; //kita jadiin array
  
  for (let i = 0; i < s.length; i++) {
    let result = '';
    
    for (let j = 0; j < i + 1; j++) {
      result += j == 0 ? s[i].toUpperCase() : s[i].toLowerCase();
    }
    arr.push(result);
  }
  return arr.join('-');
}

accum('abcd');
accum('RqaEzty');  