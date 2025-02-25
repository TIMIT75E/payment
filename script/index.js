document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("Amount").value;
    const conveertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMianBalance = parseFloat(mainBalance)



    if (amount) {
        if (convertedPin === 1234) {
            const sum = convertedMianBalance + conveertedAmount;
            document.getElementById('main-balance').innerText = sum;
            alert(`${amount} Money Added `)
        }
        else {
            alert("Invalid PIN")
        }
    }
    else {
        alert("Please Enter Your Amount")
    }
})