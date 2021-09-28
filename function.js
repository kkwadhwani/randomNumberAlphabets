function randomNumberAlpha(){
    let randomDigit = (Math.random()*100000).toFixed(0)
    randomDigit>1 && randomDigit<100000?randomDigit.toString():''
  
    let alphabats = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
    let abc = ""
  for(let i =0; i<7; i++){
     let char = (Math.random()*20).toFixed(0)
    char>=0 && char<27?char : char=0
    let a= alphabats[char]
  abc+= a
  }
   let randNumber= randomDigit+abc
  
  return randNumber
  
  }
