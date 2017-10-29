
function addTwoNumbers(){
    var numberOne = parseInt(document.getElementById("number-box-one").value);
    var numberTwo = parseInt(document.getElementById("number-box-two").value);
    var total = document.getElementById("sum-of-numbers");
    
    //Result
    total.value = numberOne + numberTwo;
}

