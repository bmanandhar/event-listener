console.log("eventListener is listening!");

// Add your event handlers here

document.getElementById("redButton").addEventListener("click", turnRed);
document.getElementById("blueButton").addEventListener("click", turnBlue);

document.getElementById("whiteButton").addEventListener("click", turnWhite);
document.getElementById("yellowButton").addEventListener("click", turnYellow);


function turnRed () {
  document.querySelector('body').className = 'red-theme';
}
function turnWhite () {
  document.querySelector('body').className = 'white-theme';
}
function turnBlue () {
  document.querySelector('body').className = 'blue-theme';
}
function turnYellow () {
  document.querySelector('body').className = 'yellow-theme';
}


var emailInputFld = document.getElementById("email");
emailInputFld.addEventListener('click', checkInputFld);

var subscribeBtn = document.getElementById("subscribe");
subscribeBtn.addEventListener("click", checkInputFld);


function checkInputFld(event){
  console.log(event.type);
  if(emailInputFld.value.length===0){
    document.getElementById("message").innerText = "Please enter a valid email."
  }
  else {
    document.getElementById("message").innerText = "Good Job!"
  }

}