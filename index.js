document.addEventListener('DOMContentLoaded', () => {
    const animalListContainer = document.getElementById('animal-list');
    const animalDetailsContainer = document.getElementById('animal-details');
    const resetButton = document.getElementById('reset-button');

    // Function to fetch data from the server
    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    // Function to render animal list
    const renderAnimalList = async () => {
        const animals = await fetchData('http://localhost:3000/characters');

        animals.forEach(animal => {
            const animalName = document.createElement('div');
            animalName.innerText = animal.name;

            // Event listener for clicking on an animal name
            animalName.addEventListener('click', () => {
                renderAnimalDetails(animal.id);
            });

            animalListContainer.appendChild(animalName);
        });
    };

    // Function to render animal details
    const renderAnimalDetails = async (animalId) => {
        const animalDetails = await fetchData(`http://localhost:3000/characters/${animalId}`);
        animalDetailsContainer.innerHTML = `
            <h2>${animalDetails.name}</h2>
            <img src="${animalDetails.image}" alt="${animalDetails.name}">
            <p>Votes: ${animalDetails.votes}</p>
        `;
    };

    // Event listener for the reset button
    resetButton.addEventListener('click', () => {
        // Implement code to reset votes (bonus deliverable)
        console.log('Resetting votes...');
    });

    // Initial rendering of the animal list
    renderAnimalList();
});

