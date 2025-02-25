document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    const convertAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
   
   
   
   
    if (amount) {
        if (convertPin === 1234) {
            const sum = convertedMainBalance - convertAmount;
            document.getElementById('main-balance').innerText = sum;
                alert(`${amount} Succesfully Cashout `)
        }
        else {
            alert("Enter Your Valid PIN")
        }
    }
    else{
        alert("Please Enter Your Amount")
    }
})