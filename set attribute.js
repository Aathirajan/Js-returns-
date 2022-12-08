
<html>
<body>
<h1>The Element Object</h1>
<h2>The setAttribute() Method</h2>

<input id="myInput" value="OK">

<p>Click "Change" to change the input field to an input button.</p>
<button onclick="myFunction()">Change</button>

<script>
function myFunction() {
  document.getElementById("myInput").setAttribute("type", "button"); 
   document.getElementById("myInput").setAttribute("style", "background-color: red;");
 
}
</script>

</body>
</html>
