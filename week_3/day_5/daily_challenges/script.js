const API_URL =
  "https://v6.exchangerate-api.com/v6/b4f053da748574410abde35f/latest/USD";

let rates = {};

async function fetchRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    rates = data.conversion_rates;
  } catch (error) {
    console.error("Failed to fetch rates:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("currency-converter");
  const fromSelect = document.getElementById("from-currency");
  const toSelect = document.getElementById("to-currency");
  const amountInput = document.getElementById("amount");
  const resultDiv = document.getElementById("result");
  const switchBtn = document.querySelector(".switch-btn");

  await fetchRates();

  form.addEventListener("submit", e => {
    e.preventDefault();

    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 0) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }
    console.log(amount, to, from, rates);
    const converted = ((amount * rates[to]) / rates[from]).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
  });

  switchBtn.addEventListener("click", () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
  });
});
