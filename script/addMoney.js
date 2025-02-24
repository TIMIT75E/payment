document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("Amount").value;
    const conveertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMianBalance = parseFloat(mainBalance)



    if (convertedPin === 1234) {
        const sum = convertedMianBalance + conveertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
       alert("nah mamah tomar pin a vul ase")
    }
})