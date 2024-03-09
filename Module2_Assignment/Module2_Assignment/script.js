function performAddition() {
    var num1 = parseFloat(document.getElementById('addNum1').value);
    var num2 = parseFloat(document.getElementById('addNum2').value);
    var result = num1 + num2;
    document.getElementById('addResult').innerHTML = 'Result: ' + result;
}

function performMultiplication() {
    var num1 = parseFloat(document.getElementById('multNum1').value);
    var num2 = parseFloat(document.getElementById('multNum2').value);
    var result = num1 * num2;
    document.getElementById('multResult').innerHTML = 'Result: ' + result;
}