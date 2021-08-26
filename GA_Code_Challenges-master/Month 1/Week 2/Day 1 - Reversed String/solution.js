function solution(str) {
    let test = '';
    for (let i = str.length - 1; i >= 0; i--)
      test += str[i];
    return test;
  }

  //best solution

  function solution(str){
    return str.split('').reverse().join('');  
  }

