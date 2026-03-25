//! ===== Exercise 1 : Giphy API =====

async function fetchGiphy1() {
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

fetchGiphy1();

//! ===== Exercise 2 : Giphy API =====

async function fetchGiphy2() {
  const url = `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=${apiKey}`;

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

fetchGiphy2();

//! ===== Exercise 3 : Async function =====

