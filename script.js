var x = document.querySelectorAll(".images .onImageIcon");
for(i=0 ; i<x.length; i++){
   y = x[i];
   y.style.display ="none";
}



// Onmousver effect of zoom


function zoomIn1(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[0];
y.style.display ="inline-block";
}

function zoomIn2(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[1];
y.style.display ="inline-block";
}

function zoomIn3(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[2];
y.style.display ="inline-block";
}

function zoomIn4(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[3];
y.style.display ="inline-block";
}

function zoomIn5(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[4];
y.style.display ="inline-block";
}

function zoomIn6(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[5];
y.style.display ="inline-block";
}

function zoomIn7(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[6];
y.style.display ="inline-block";
}

function zoomIn8(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[7];
y.style.display ="inline-block";
}

function zoomIn9(){
var x = document.querySelectorAll(".images .onImageIcon");
var y =x[8];
y.style.display ="inline-block";
}



// onmousout effect of zoom
function zoomOut1(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[0];
   y.style.display ="none";
   }

function zoomOut2(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[1];
   y.style.display ="none";
   }


function zoomOut3(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[2];
   y.style.display ="none";
   }

function zoomOut4(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[3];
   y.style.display ="none";
   }

function zoomOut5(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[4];
   y.style.display ="none";
   }

function zoomOut6(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[5];
   y.style.display ="none";
   }

function zoomOut7(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[6];
   y.style.display ="none";
   }

function zoomOut8(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[7];
   y.style.display ="none";
   }

function zoomOut9(){
   var x = document.querySelectorAll(".images .onImageIcon");
   var y =x[8];
   y.style.display ="none";
   }



//.........................................harmburg .............................//
function myHamburg(){
let xham = document.getElementById("abc");
if(xham.style.display === "block"){
   xham.style.display = "none";
}else{
   xham.style.display = "block"
}

}






//..........................................header.............................................//
let flag = 2;




function changeSlide(x){
flag = flag + x;
slideshow(flag);

}


   slideshow(flag);
   function slideshow(num){
   let x = document.getElementsByClassName("slide");
   if(num == x.length){
      flag = 0;
      num = 0;
   }
   if(num < 0){
      flag = x.length -1;
      num = x.length -1;
   }
   for(items of x){
      items.style.display = "none"
   }
   x[num].style.display = "block";
}















// function my(){
// var x = document.querySelectorAll(".images .onImageIcon");
// for(let i=0 ; i<x.length ; i++){
//    console.log(i);
// }
// }