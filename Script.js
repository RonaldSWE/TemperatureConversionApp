const textBox = document.getElementById("textBox");
const ToFahrenheit = document.getElementById("ToFahrenheit");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");
let temp;

const convert = () => {
  if (ToFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (ToCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Pls select a unit";
  }
};
