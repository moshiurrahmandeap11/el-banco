const payBillButton = document.getElementById('paybill-btn');
payBillButton.addEventListener('click', function(event){
    event.preventDefault()
    const payBillAmount = document.getElementById('paybill-amount').value;
    const convertedAmount = Number(payBillAmount);
    const payBillPin = document.getElementById('paybill-pin').value;
    const convertedPin = parseInt(payBillPin);
    const mainBalance = document.getElementById("available-balance").innerText;
    const convertedBalance = Number(mainBalance);
    if (convertedAmount && convertedPin){
        if(convertedPin === 1234){
            const paymath = convertedBalance - convertedAmount;
            if(convertedAmount > convertedBalance){
                alert('enter a valid amount')
                return;
            }
            alert('pay bill done successfully.')
            document.getElementById("available-balance").innerText = paymath;
        } else {
            alert('incorrect pin')
        }
    } else{
        alert('fill out the fields.')
    }
})