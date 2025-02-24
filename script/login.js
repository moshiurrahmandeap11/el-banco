const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function(event) {
  event.preventDefault()
  const accountNumber = document.getElementById("account-number").value;
  const accountPin = document.getElementById("account-pin").value;
  if(accountNumber.length === 11){
    if(Number(accountPin) === 1234){
        window.location.href='./main.html'
    } else{
        alert('pin wrong');
    }
  } else {
    alert('please!Enter a valid Number.');
  }


});



