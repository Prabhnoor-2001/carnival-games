  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var headIterator = 0;
var bodyIterator = 0;
var pantsIterator = 0;

// head =0;
// body = 1;
// pants =2;

var bodyPartIterator = 0;

console.log("Dress The Clown!")
Start()

function Start(){
  document.addEventListener("keydown",function(e){
                switch(e.key){
                  case "ArrowRight":
                    if(bodyPartIterator===0){
                    changeHeadRight();}
                    else if (bodyPartIterator===1){
                      changeBodyRight();}
                    
                    else{
                      changePantsRight();
                    }
                    break;
                    
                  case "ArrowLeft":
                    if(bodyPartIterator===0){
                      changeHeadLeft();}
                      else if (bodyPartIterator===1){
                        changeBodyLeft();}
                      
                      else{
                        changePantsLeft();
                      }
                      break;
                }

  },false);
  document.addEventListener("keydown",function(e){//change the part of the body that is changing
    switch(e.key){
      case "ArrowDown":
        if(bodyPartIterator==2){
          bodyPartIterator=0;

          
        }
        else{bodyPartIterator++
          console.log(bodyPartIterator);
          }
          break;
      case "ArrowUp":
            if(bodyPartIterator==0){
              bodyPartIterator=2;
    
              
            }
            else{bodyPartIterator--;
              console.log(bodyPartIterator);}
            break;
    }
  },false)
}


function changeHeadLeft(){
  var headNext = `head${headIterator}.png`;
  var head = document.getElementById("head");
  head.src = "./images/"+headNext;
  if(headIterator===0){
    headIterator= 5;
  }
  else{
    headIterator-=1;
  }
}

function changeHeadRight(){
  var headNext = `head${headIterator}.png`;
  var head = document.getElementById("head");
  head.src = "./images/"+headNext;
  if(headIterator===5){
    headIterator= 0;
  }
  else{
    headIterator+=1;
  }
}
function changeBodyLeft(){
  bodyNext = `body${bodyIterator}.png`;
  var body = document.getElementById("body");
  body.src = "./images/"+bodyNext;
  if(bodyIterator===5){
    bodyIterator= 0;
  }
  else{
    bodyIterator+=1;
  }
}
function changeBodyRight(){
  bodyNext = `body${bodyIterator}.png`;
  var body = document.getElementById("body");
  body.src = "./images/"+bodyNext;
  if(bodyIterator===0){
    bodyIterator= 5;
  }
  else{
    bodyIterator-=1;
  }
}

function changePantsLeft(){
  pantsNext = `shoes${pantsIterator}.png`;
  var pant = document.getElementById("shoes");
  pant.src = "./images/"+pantsNext;
  if(pantsIterator===5){
    pantsIterator= 0;
  }
  else{
    pantsIterator+=1;
  }
}
function changePantsRight(){
  pantsNext = `shoes${pantsIterator}.png`;
  var pant = document.getElementById("shoes");
  pant.src = "./images/"+pantsNext;
  if(pantsIterator===0){
    pantsIterator= 5;
  }
  else{
    pantsIterator-=1;
  }
}

