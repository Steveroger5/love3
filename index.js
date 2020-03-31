
  document.querySelector(".img1").addEventListener("mouseenter",function handleenter(){
     var audio=new Audio("songs/Duji-Vaar-Pyar-1.mp3");
     audio.play();
     // setTimeout(function(){audio.pause();},17500);
     document.querySelector(".img1").addEventListener("mouseleave",function(){
       audio.pause();
     });
  });
  document.querySelector(".img2").addEventListener("mouseenter",function handleenter(){
     var audio=new Audio("songs/type3.mp3");
     audio.play();
     // setTimeout(function(){audio.pause();},10000);
    document.querySelector(".img2").addEventListener("mouseleave",function(){
      audio.pause();
    });
  });
  document.querySelector(".img3").addEventListener("mouseenter",function handleenter(){
     var audio=new Audio("songs/Dusk-Till-Dawn-Zayn_Sia.mp3");
     audio.play();
     // setTimeout(function(){audio.pause();},10000);
     document.querySelector(".img3").addEventListener("mouseleave",function(){
       audio.pause();
     });
  });
  document.querySelector(".img4").addEventListener("mouseenter",function handleenter(){
     var audio=new Audio("songs/type2.mp3");
     audio.play();
     // setTimeout(function(){audio.pause();},10000);
     document.querySelector(".img4").addEventListener("mouseleave",function(){
       audio.pause();
     });
  });
$("#submit").click(handle);
function handle(){
  var first=document.querySelector("#input1").value;
  var second=document.querySelector("#input2").value;
  var random=Math.floor(Math.random()*(70)+30);
  document.querySelector("#main").innerHTML="love copatibilty of "+first+" and "+second+" is "+random+"%";
  $("#main").css("visibility","visible");
  if(random>70){
    $("#max").css("visibility","visible");
    $("#middle").css("visibility","hidden");
    $("#low").css("visibility","hidden");
  }
  if(random>50&&random<70){
    $("#max").css("visibility","hidden");
    $("#middle").css("visibility","visible");
    $("#low").css("visibility","hidden");
  }
  if(random<50){
    $("#max").css("visibility","hidden");
    $("#middle").css("visibility","hidden");
    $("#low").css("visibility","visible");
  }
}
