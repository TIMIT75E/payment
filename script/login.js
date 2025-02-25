document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const acNumber = document.getElementById("ac-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    const convertPin = parseInt(pinNumber)
    if (acNumber.length === 11){
        if(convertPin===1234){
            window.location.href="./main.html"
        }
        else{
            alert("Invalid PIN")
        }
    }
    else{
        alert("Invalid Account Number")
    }
})