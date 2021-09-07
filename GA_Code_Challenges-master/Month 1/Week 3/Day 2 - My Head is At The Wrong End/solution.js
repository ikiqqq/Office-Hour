function fixTheMeerkat(arr) {
    //your code here 
     const tail = arr.shift(); //ngeremove element pertama (body,head)
     const body = arr.pop(); //menghapus elemen terakhir array (body)
   
   arr.push(tail); //menambahkan element diakhir array (body,tail)
   arr.unshift(body); //menambahkan element diawal array (head,body,tail)
   
   return arr;
   }

   //best solution

   function fixTheMeerkat(arr) {
    return arr.reverse();
  }
//
  function fixTheMeerkat(arr) {
    let newArr = [];
    for(let i = arr.length-1; i >= 0; i--){
     newArr.push(arr[i]) 
    }
   return newArr;
  }


  const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

  