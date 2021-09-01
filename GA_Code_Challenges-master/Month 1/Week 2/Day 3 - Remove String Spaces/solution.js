let str = "How are you doing today?";
const myArr = str.split(" ");

function noSpace(str){
    return str.split(' ').join('');
    }

    //best solution

    function noSpace(x){
        return x.replace(/\s/g, '');
      }