const transferMoneyButton = document.getElementById("transfer-money-button");
transferMoneyButton.addEventListener('click', function(event){
    event.preventDefault()
    const transferMoneyPin = document.getElementById("transfer-pin").value;
    const transferPin = parseInt(transferMoneyPin)
    const transferMoneyAmount = document.getElementById("trasfer-amount").value;
    const transferMoney = Number(transferMoneyAmount)
    const transferAvailableBalance = document.getElementById("available-balance").innerText;
    const transferMainBalance = Number(transferAvailableBalance)

    if (transferMoney && transferPin){
        if(transferPin === 1234){
            const math = transferMainBalance - transferMoney;
            if(transferMoney > transferMainBalance){
                alert('enter amount correctly')
                return
            }
            alert('Transfer money successfully done!') 
            document.getElementById("available-balance").innerText = math;
        } else{
            alert('incorrect pin!')
        }
    } else{
        alert('enter field correctly!')
    }
})