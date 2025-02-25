document.getElementById("addmoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("getbonus").style.display = "none";
document.getElementById("transaction-history").style.display = "none";
document.getElementById("paybill").style.display = "none";

const addMOney = document.getElementById("add-money-box");
addMOney.addEventListener("click", function () {
  document.getElementById("cashout").style.display = "none";
  document.getElementById("addmoney").style.display = "block";
  document.getElementById("latest-history").style.display = 'none';
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("getbonus").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transaction-history").style.display = "none";
});

const cashOutBox = document.getElementById("cashout-box");
cashOutBox.addEventListener("click", function () {
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("cashout").style.display = "block";
  document.getElementById("latest-history").style.display = 'none';
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("getbonus").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transaction-history").style.display = "none";
});

const transferMoneyBox = document.getElementById("transfer-money-box");
transferMoneyBox.addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById('addmoney').style.display = 'none'
  document.getElementById('cashout').style.display = 'none'
  document.getElementById('latest-history').style.display = 'none'
  document.getElementById('transfer-money').style.display = 'block'
  document.getElementById("getbonus").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transaction-history").style.display = "none";
})

const getBonus = document.getElementById("get-bonus-box");
getBonus.addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("latest-history").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById('getbonus').style.display='block'
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transaction-history").style.display = "none";
})


const transactionHistory = document.getElementById("transaction-history-box");
transactionHistory.addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("getbonus").style.display = "none";
  document.getElementById("latest-history").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transaction-history").style.display = 'block';

})


const payBillNumber = document.getElementById("pay-bill-box");
payBillNumber.addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("getbonus").style.display = "none";
  document.getElementById("latest-history").style.display = "none";
  document.getElementById('paybill').style.display = 'block'
  document.getElementById("transaction-history").style.display = "none";
})