const getBonusButton = document.getElementById('get-bonus')
getBonusButton.addEventListener('click', function(event){
    event.preventDefault()
    const couponCode = document.getElementById("coupon-code").value;
    const mainBalance = document.getElementById("available-balance").innerText;
    const covertedMainBalance = Number(mainBalance);
    if(couponCode == "moshiur1234"){
        // discount
        const bonus = covertedMainBalance * 10 / 100;
        alert('bonus add to your balance successfully!')
        const totalBonus = covertedMainBalance + bonus;
        document.getElementById("available-balance").innerText = totalBonus;
    } else{
        alert('knock moshiur papa')
    }
})