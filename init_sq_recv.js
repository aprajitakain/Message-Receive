 const colrtd=document.getElementsByTagName("td");
 const socket= new WebSocket('ws://localhost:5002');
 socket.addEventListener('open',function(event){
socket.onmessage = function(e){
colrtd[e.data].style.backgroundColor="magenta";
   console.log("I am ",e.data);

 };});
