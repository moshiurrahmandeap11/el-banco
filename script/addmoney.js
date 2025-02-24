const addMoney = document.getElementById('add-money')
addMoney.addEventListener('click', function(event){
    event.preventDefault();
    const addAmount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    const mainBalance = document.getElementById("available-balance");
    const availableBalance = Number(mainBalance.innerText)
    if(Number(addAmount) && Number(pin)){
        if (Number(pin) === 1234) {
          alert("added successfully");
          const sum = availableBalance + Number(addAmount);
          document.getElementById("available-balance").innerText = sum;
        } else {
          alert("incorrect pin number!");
        }
    } else{
        alert('enter a valid amount')
    }
    
})

const logOut = document.getElementById('logout')
logOut.addEventListener('click', function(event){
    event.preventDefault()
    window.location.href='./index.html'
})