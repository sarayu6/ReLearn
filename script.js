var i=0;
var texting='Meet Our Amazing Tutors..!';
var speed=50;
function typeWriter(){
  if(i<texting.length){
    document.getElementById("txt").innerHTML+=texting.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}
var j=0;
var speed1=50;
var teaching='So many reasons to START..!';
function typing(){
  if(j<teaching.length){
    document.getElementById("texts").innerHTML+=teaching.charAt(j);
    j++;
    setTimeout(typing,speed1);
  }
}






