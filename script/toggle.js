document.getElementById("cashout").style.display = "none";
document.getElementById("addMoney").style.display = "none";
document.getElementById("transfer-mony").style.display = "none";
document.getElementById("Pay-Bill").style.display = "none";


document.getElementById("cashout-box").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("transfer-mony").style.display = "none";
    document.getElementById("Pay-Bill").style.display = "none";

})
document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("addMoney").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-mony").style.display = "none";
    document.getElementById("Pay-Bill").style.display = "none";
})
document.getElementById("transfer-box").addEventListener("click", function () {
    document.getElementById("transfer-mony").style.display = "block";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("Pay-Bill").style.display = "none";
})
document.getElementById("pay-bill-box").addEventListener("click", function () {
    document.getElementById("Pay-Bill").style.display = "block";
    document.getElementById("transfer-mony").style.display = "none";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("cashout").style.display = "none";
})