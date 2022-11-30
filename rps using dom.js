let red = document.getElementById('red')

let blue = document.getElementById('blue')

let yellow = document.getElementById('yellow')

// red.onclick = () => console.log('rock')
// blue.onclick = () => console.log('paper ')
// yellow.onclick = () => console.log('sissor')
let all = document.querySelectorAll('.colorsqure')
// console.log(all)
let time = { 'red': 0, 'blue': 0, 'yellow': 0 }

all.forEach(i => {
    i.onclick = () => {
        time[i.value] += 1
        i.innerText = time[i.value]
    }
}
)
let gamebtn = document.getElementById('clearbtn')
gamebtn.onclick= ()=> clearscore()
// html document
<head>
  Rock papper Sisscors Game </head>
<body>
  <div style="display:flex">
  <button class='colorsqure' id ='red' style="height:100px;
    width:100px;background-color:red
     ;"value='red'></button>
  
  <button class='colorsqure' id='blue' style="height:100px;width:100px;background-color:blue;" value='blue'></button>
  
  <button class='colorsqure' id ='yellow' style="height:100px;width:100px;background-color:yellow;" value='yellow'>  </button>
</div>
<button id = 'clearbtn'>clear game </button>
  <script src='script.js'/>

</body>