document.addEventListener('DOMContentLoaded', function() {
  getNature();
});

const nature = [
  { name: "camping", image: "static/images/camping.jpg" },
  { name: "hiking", image: "static/images/hiking.jpeg" },
  { name: "sailing", image: "static/images/sailing.jpg" },
  { name: "travel", image: "static/images/travel.jpg" }
];

// Function to randomly select a genre

function getNature() {
  const imageContainer = document.getElementById('nature-image-container');
  imageContainer.innerHTML = '';

  nature.forEach(({ name, image }) => {
    const card = createCard(name, image);
    imageContainer.appendChild(card);
  })
}

function createCard(name, image) {
  const card = document.createElement("div");
  card.className = 'nature-card';

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  const imgElement = document.createElement('img');
  imgElement.src = image;

  card.appendChild(nameElement);
  card.appendChild(imgElement);
  return card;
}

