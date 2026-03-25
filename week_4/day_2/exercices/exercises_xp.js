//! ===== Exercise 1 : Giphy API =====

async function fetchGiphy() {
  const apiKey = "24jHidEC5k20mIfR0VHWpgmPwXE1QyWz";
  const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchGiphy();
