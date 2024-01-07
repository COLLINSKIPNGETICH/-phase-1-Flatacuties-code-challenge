// flatacuties index.js
document.addEventListener('DOMContentLoaded', () => {
  const charactersListContainer = document.getElementById('characters-list');
  const characterDetailsContainer = document.getElementById('character-details');

  // Challenge 1
  fetchCharacters();

  function fetchCharacters() {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(characters => {
        charactersListContainer.innerHTML = '';
        characters.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');
          characterCard.innerText = character.name;
          characterCard.addEventListener('click', () => showCharacterDetails(character.id));
          charactersListContainer.appendChild(characterCard);
        });
      });
  }

  // Challenge 2
  function showCharacterDetails(characterId) {
    fetch(`http://localhost:3000/characters/${characterId}`)
      .then(response => response.json())
      .then(character => {
        characterDetailsContainer.innerHTML = `
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
          <p>Votes: ${character.votes}</p>
          <button id="vote-btn">Vote</button>
        `;

        const voteBtn = document.getElementById('vote-btn');
        voteBtn.addEventListener('click', () => voteForCharacter(characterId));
      });
  }

  // Challenge 3
  function voteForCharacter(characterId) {
    fetch(`http://localhost:3000/characters/${characterId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ votes: 1 }),
    })
      .then(() => {
        fetchCharacters();
        showCharacterDetails(characterId); 
      });
  }
});
