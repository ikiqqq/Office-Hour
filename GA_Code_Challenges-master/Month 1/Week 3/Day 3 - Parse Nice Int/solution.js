function getAge(inputString){
    // return correct age (int). Happy coding :) 
      return Number(inputString[0]);
    }

    //logic
    function getAge(inputString){
      // return correct age (int). Happy coding :) 
        let numbers = ["0","1","2","3","4","5","6","7","8","9"]
        
        for (let i = 0; i < inputString.length;i++) {
          if (numbers.includes(inputString[i])) {
            return Number(inputString[i])
          }
        }
        
        return "No Number in Sentence"
      }

      //best solution
      function getAge(inputString){
        // return correct age (int). Happy coding :) 
          return parseInt(inputString);
        }