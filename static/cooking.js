document.addEventListener('DOMContentLoaded', function() {
  getFood();
});

const foods = [
  { name: "japanese curry", image: "static/images/japanesecurry.jpg" },
  { name: "mapo tofu", image: "static/images/mapotofu.jpg" },
  { name: "miso chicken", image: "static/images/misochicken.jpg" },
  { name: "pasta", image: "static/images/pasta.jpg" },
  { name: "ramen", image: "static/images/ramen.jpg" },
  { name: "udon", image: "static/images/udon.jpg" }
];

// Function to randomly select a genre

function getFood() {
  const imageContainer = document.getElementById('food-image-container');
  imageContainer.innerHTML = '';

  foods.forEach(({ name, image }) => {
    const card = createCard(name, image);
    imageContainer.appendChild(card);
  })
}

function createCard(name, image) {
  const card = document.createElement("div");
  card.className = 'food-card';

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  const imgElement = document.createElement('img');
  imgElement.src = image;

  card.appendChild(nameElement);
  card.appendChild(imgElement);
  return card;
}