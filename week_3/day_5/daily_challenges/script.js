const rates = {
  EUR: { EUR: 1, USD: 1.15, GBP: 0.86, JPY: 162.5 },
  USD: { EUR: 0.87, USD: 1, GBP: 0.79, JPY: 150.5 },
  GBP: { EUR: 1.17, USD: 1.26, GBP: 1, JPY: 190.2 },
  JPY: { EUR: 0.0062, USD: 0.0066, GBP: 0.0053, JPY: 1 },
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("currency-converter");
  const fromSelect = document.getElementById("from-currency");
  const toSelect = document.getElementById("to-currency");
  const amountInput = document.getElementById("amount");
  const resultDiv = document.getElementById("result");
  const switchBtn = document.querySelector(".switch-btn");
  console.log(fromSelect.value);
  form.addEventListener("submit", e => {
    e.preventDefault();

    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 0) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }

    const rate = rates[from][to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
  });

  switchBtn.addEventListener("click", () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
  });
});
