function warnTheSheep(queue) {
    if (queue[queue.length -1] === 'wolf') {
       return 'Pls go away and stop eating my sheep';
       } else {
        let index = queue.findIndex( (x) => x == 'wolf' );
        return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
       }
   }

   //best function
   function warnTheSheep(queue) {
    let lastIndex = queue.length - 1
    
    if (queue[lastIndex] === "wolf") return "Pls go away and stop eating my sheep";
  
    let wolfIndex = queue.findIndex((x) => x == "wolf");
    let sheepIndex = queue.length - wolfIndex - 1
      
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
    
  }
   