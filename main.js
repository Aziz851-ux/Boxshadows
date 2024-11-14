const cards = document.querySelector(".cards");
const inputSearch = document.querySelector(".input-search");

async function getShadows() {
  try {
    const respons = await fetch("shadows.json");
    const data = await respons.json();
    console.log(data);
    data.forEach((i, id) => {
      let card = `<div class="card" style="${i.shadow}">
        <p class="number">${id + 1}</p>
      </div>`;
      cards.innerHTML += card;
    });
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.addEventListener("click", () => {
        let boxS = "box-shadow:" + card.style.boxShadow;
        navigator.clipboard.writeText(boxS);
        alert("Box Shadow Successfully Copied");
      });
    });

    inputSearch.addEventListener("input", (e) => {
      const inputValue = e.target.value.toLowerCase();
      allCards.forEach((card) => {
        const cardText = card.querySelector(".number").innerText.toLowerCase();

        if (cardText.includes(inputValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  } catch (error) {}
}

getShadows();
