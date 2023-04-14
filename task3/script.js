document.getElementById('tempConverter').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;
    
    // Perform conversion
    var outputTemp;
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      outputTemp = (inputTemp * 9/5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      outputTemp = (inputTemp - 32) * 5/9;
    } else {
      outputTemp = inputTemp;
    }
    
    // Display result
    document.getElementById('outputTemp').textContent = outputTemp.toFixed(2) + ' ' + outputUnit;
  });
  