function highAndLow(numbers){
  // ...
   let temp = numbers.split(' ');
    temp.sort((a,b)=>{
      return a-b
    });
    return  temp[temp.length-1] + ' ' + temp[0]
}