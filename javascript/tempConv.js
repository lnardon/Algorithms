function celsiusToFahrenheit(c){
    let result = c * 9/5 + 32;
    return result;
}

function fahrenheitToCelsius(f){
    let result = (f - 32)/(9/5);
    return result;
}

function kelvinToCelsius(k){
    let result = k - 273.15;
    return result;
}

function celsiusToKelvin(k){
    let result = k + 273.15;
    return result;
}

function fahrenheitToKelvin(f){
    let result = (f - 32) * 5/9 + 273.15;
    return result;
}

function kelvinToFahrenheit(k){
    let result = (k - 273.15) * 9/5 + 32;
    return result;
}

console.log(fahrenheitToKelvin(100));