  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
var uniOne = 1;
var uniTwo =1;
var unithree = 1;
var alertforOne = 1;
onClick();
function onClick(){
  document.getElementById("1").addEventListener("click", function(e){ //    for the first unicorn
              if(uniOne%4===0){
                   alert("unicorny kun says uno chan")
                  }
              else{
              var unicorn1 = document.getElementById("1");
              unicorn1.src =  "./images/unicorn-"+uniOne+".png";
              console.log(alertforOne)
              if(uniOne===4){
                alert("sfsfn")
              }
              else{uniOne++;
              alertforOne++}
  }
              
  },false);

  document.getElementById("2").addEventListener("click", function(e){ //    for the first unicorn
    if(uniTwo%4===0){
         alert("unicorny kun says dos chan")
        }
    else{
    var unicorn2 = document.getElementById("2");
    unicorn2.src =  "./images/unicorn-"+uniTwo+".png";
    console.log(alertforOne)
    if(uniTwo===4){
      alert("sfsfn")
    }
    else{uniTwo++;
    alertforOne++}
}
    
},false);

document.getElementById("3").addEventListener("click", function(e){ //    for the first unicorn
  if(unithree%4===0){
       alert("unicorny kun says byebye")
      }
  else{
  var unicorn3 = document.getElementById("3");
  unicorn3.src =  "./images/unicorn-"+unithree+".png";
  console.log(alertforOne)
  if(unithree===4){
    alert("sfsfn")
  }
  else{unithree++;
  alertforOne++}
}
  
},false);

}