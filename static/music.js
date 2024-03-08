document.addEventListener('DOMContentLoaded', function() {
  getInstruments();
});

const instruments = [
  { name: "guitar", image: "static/images/guitar.jpg" },
  { name: "bass", image: "static/images/bass.jpg" },
  { name: "drums", image: "static/images/drums.jpg" },
  { name: "synth", image: "static/images/synth.jpg" },
  { name: "drum machine", image: "static/images/drum-machine.jpg" },
  { name: "sampler", image: "static/images/sampler.jpg" }
];

// Function to randomly select a genre

function getInstruments() {
  const imageContainer = document.getElementById('instrument-image-container');
  imageContainer.innerHTML = '';

  instruments.forEach(({ name, image }) => {
    const card = createCard(name, image);
    imageContainer.appendChild(card);
  })
}

function createCard(name, image) {
  const card = document.createElement("div");
  card.className = 'instrument-card';

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  const imgElement = document.createElement('img');
  imgElement.src = image;

  card.appendChild(nameElement);
  card.appendChild(imgElement);
  return card;
}

