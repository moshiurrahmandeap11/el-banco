const cashOutButton = document.getElementById("cash-out-btn");
cashOutButton.addEventListener('click', function(event){
    event.preventDefault()
    const cashOutPin = document.getElementById("cashout-pin").value;
    const cashOutAmount = document.getElementById('cashout-amount').value;
    const availableBalance = document.getElementById("available-balance").innerText;
    const mainBalance = Number(availableBalance)
    if(Number(cashOutAmount) && parseInt(cashOutPin)){
        if(parseInt(cashOutPin) === 1234){
            const cash = mainBalance - cashOutAmount;
            if(Number(cashOutAmount) > mainBalance){
                alert('please enter valid amount')
                return;
            }
            alert('Cash Out Successfully Done!')
            document.getElementById("available-balance").innerText = cash;
        } else {
            alert('Incorrect Pin')
        }
    } else {
        alert('enter a valid amount')
    }
})

const logOut = document.getElementById("logout");
logOut.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./index.html";
});