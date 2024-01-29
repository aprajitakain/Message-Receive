 const btn=document.getElementsByTagName("input");
 const socket= new WebSocket('ws://localhost:5002');
 socket.addEventListener('open',function(event){
for (let  i=0;i<btn.length;i++){
 btn[i].addEventListener("click",function(){

 socket.send(i);

 });}});


