class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0]
  
      for(let i = 0; i < args.length; i++){
          if(args[i] < smallest) smallest = args[i]
      }
  
      return smallest
    }
  }

//   best solution

function findSmallestInt(args) {
    let smallest = args[0]

    args.forEach(i => {
        if(i < smallest) smallest = i
    })

    return smallest
}


function findSmallestInt(args) {
    return Math.min(...args)
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }