// Probabilities for each category
const probabilities = {
    "Special Grade": 0.0025,
    "Legendary": 0.0275,
    "Rare": 0.07,
    "Uncommon": 0.20,
    "Common": 0.70
};

// Colors for each category
const colors = {
    "Special Grade": "special",
    "Legendary": "legendary",
    "Rare": "rare",
    "Uncommon": "uncommon",
    "Common": "common"
};

// Calculate and display probabilities
function calculateProbabilities() {
    const spinsInput = document.getElementById("spinsInput");
    const spins = parseInt(spinsInput.value);

    const resultsContent = document.getElementById("resultsContent");
    resultsContent.innerHTML = "";

    if (!spins || spins < 1) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error";
        errorMessage.textContent = "Please enter a valid number of spins.";
        resultsContent.appendChild(errorMessage);
        return;
    }

    // Calculate and display results for valid input
    for (const [category, probability] of Object.entries(probabilities)) {
        const chance = 1 - Math.pow(1 - probability, spins);
        const percentage = (chance * 100).toFixed(2);
        const colorClass = colors[category];

        const resultElement = document.createElement("div");
        resultElement.className = `result ${colorClass}`;
        resultElement.textContent = `${category}: ${percentage}%`;
        resultsContent.appendChild(resultElement);
    }
}