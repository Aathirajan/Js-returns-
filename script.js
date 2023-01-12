// let sec=document.getElementById('sec')
// var seconds=0;
// let  time =document.getElementById('time')

// let start=()=>{
//  interval=setInterval(()=>{
//   seconds++;
//   sec.innerText=`${seconds}seconds`;
// },1000)
// }
// setInterval(()=>{
//   time.innerText=new Date()
// },1000)
 
// let end=()=>{
//   console.log('end varuthu')
//   clearInterval (interval)
//   sec.innerText=0

// }


 set=()=>sessionStorage.setItem('EnnaSearchPannan','NeeNinaikiraMathiriEdumIlla')

 get=()=>{ data=sessionStorage.getItem('EnnaSearchPannan')
console.log(data)}
 remove=()=>sessionStorage.removeItem('EnnaSearchPannan')

