const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifForm = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const gifContainer = document.getElementById("gifContainer");

gifForm.addEventListener("submit", async e => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(searchTerm)}`,
    );
    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;

    const gifWrapper = document.createElement("div");
    gifWrapper.style.marginBottom = "10px";

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = searchTerm;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => gifWrapper.remove());

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteBtn);
    gifContainer.appendChild(gifWrapper);

    // searchInput.value = "";
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
