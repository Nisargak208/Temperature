function convertToFar() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = `${celsius}°C is equal to ${fahrenheit}°F`;
}
