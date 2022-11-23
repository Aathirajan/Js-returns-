// We are learning loops now:
// basic loop

    let array = ['1','2','3','4','5','6','7','8','9','0']

  // for( let i=0;i<array.length;i++)
  //   {
  //     console.log(i)
  //   }

// Doing for 'of'
// for (let i of array){
//   console.log(i)
// }
let result=[]
 // multipling by 2 with for of
for (let i of array)
  {
    console.log(i*2)
    result.push(i*2)
   
  }
console.log(result)
