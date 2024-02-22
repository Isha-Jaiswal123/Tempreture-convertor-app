let cel = document.querySelector("#Celsius");
let fera = document.querySelector("#Fahrenheit");

cel.addEventListener("input", () => {
  fera.value = ((cel.value * 9) / 5 + 32).toFixed(2);
  if (!cel.value) fera.value = " ";
});

fera.addEventListener("input", () => {
  cel.value = (((fera.value - 32) * 5) / 9).toFixed(2);
  if (!fera.value) cel.value = " ";
});
