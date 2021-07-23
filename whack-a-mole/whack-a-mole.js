  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")


//
//at the start
//
addTags();
arr = table_to_array("table");
var randomIndex = getRandom(arr)
addImg();

//
//
//meat of the program
//
//
function addImg(){
  var img = document.createElement('img');
  img.src = "mole.png";
  img.id = "img";
  img.onclick = runMoleRun;
  var element = document.getElementsByClassName("moles")[randomIndex];
  element.appendChild(img)
}
function runMoleRun(){
  //
  //audio section
  //
  var audio = new Audio();
  audio.src = "whack-audio.wav";
  audio.play();
  //
  //changing to a new place
  //
 document.getElementsByClassName("moles")[randomIndex].innerHTML ="";
 randomIndex = getRandom(arr) 
 addImg();
}
//
//
//
//constant functions from now on 
//
//
// function to add class to td tags
function addTags(){
var elm = document.getElementsByTagName('td')
var length = elm.length;
for (var i = 0; i < length; i++) {
  elm[i].className += "moles";
}
}

// copied from stackoverflow
function table_to_array(table_id) {
  myData = document.getElementById(table_id).rows
  //console.log(myData)
  my_liste = []
  for (var i = 0; i < myData.length; i++) {
          el = myData[i].children
          my_el = []
          for (var j = 0; j < el.length; j++) {
                  my_el.push(el[j].innerText);
          }
          my_liste.push(my_el)

  }
  return my_liste
}
function getRandom(array){
    let len  = array.length* array.length;
    let randomNumber = Math.floor(Math.random() * len);
    return randomNumber;
}
