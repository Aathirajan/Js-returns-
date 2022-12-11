let billTotalInput=document.getElementById('billTotalInput')
let tipInput=document.getElementById('tipInput')
let perPersonTotaldiv=document.getElementById('perPersonTotal')
let numberOfPeoplediv=document.getElementById('numberOfPeople')

let noofpeople=Number(numberOfPeoplediv.innerText)
let calculateBill=()=>{
  
 let bill =Number(billTotalInput.value)
  let tipperc=Number(tipInput.value)/100
  let tipamount=bill*tipperc;
 let totalamount=tipamount+bill;
  let perpersontotal=totalamount/noofpeople;
  // console.log({perpersontotal})
  perPersonTotaldiv.innerText=`$${perpersontotal.toFixed(2)}`
  

}

let increasePeople=()=>
  {
  noofpeople +=1;
    numberOfPeoplediv.innerText=noofpeople
    calculateBill()
  }

let decreasePeople=()=>
  {
    if(noofpeople<=1)
    {
      return
    }
    noofpeople-=1;
     numberOfPeoplediv.innerText=noofpeople
    calculateBill()
  }