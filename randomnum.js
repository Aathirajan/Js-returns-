let OneNumber = (array) => {
    let weGot = Math.floor(Math.random()*array.length)
    return array[weGot]
  }
  
  console.log(OneNumber([7,8,9,40,50]))