/* first attempt
function disemvowel(str) {

var re = new RegExp("/[aeiou]+/", "i");

var newstr = str.replace(re);

}*/

function disemvowel(str) {
    return str.replace(/[aiueo]/gi, "");
  }//the flag g for global and i for ignore the case.