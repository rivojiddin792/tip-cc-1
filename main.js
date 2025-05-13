let bill = document.getElementById("sum");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("totalPerPerson");
let custom = document.querySelector(".custom-tip");
let reset = document.getElementById("reset");

document.querySelector(".tip-btn_1").onclick = () => calculate(5);
document.querySelector(".tip-btn_2").onclick = () => calculate(10);
document.querySelector(".tip-btn_3").onclick = () => calculate(15);
document.querySelector(".tip-btn_4").onclick = () => calculate(25);
document.querySelector(".tip-btn_5").onclick = () => calculate(50);

custom.oninput = () => {
  calculate(custom.value);
};  
function calculate(percent) {
  let sum = bill.value * 1;   
  let tip = (sum * percent) / 100;
  let totalSum = sum + tip;

  tipAmount.textContent = "$" + tip.toFixed(2);
  total.textContent = "$" + totalSum.toFixed(2);
}
    
reset.onclick = () => {
  bill.value = "";
  custom.value = "";
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
};
