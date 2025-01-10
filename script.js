const probabilities = {
    "Special Grade": 0.0025,
    "Legendary": 0.0275,
    "Rare": 0.07,
    "Uncommon": 0.20,
    "Common": 0.70
};

const colors = {
    "Special Grade": "special",
    "Legendary": "legendary",
    "Rare": "rare",
    "Uncommon": "uncommon",
    "Common": "common"
};

function calculateProbabilities() {
    const spins = parseInt(document.getElementById("spinsInput").value);
    if (!spins || spins < 1) {
        alert("Please enter a valid number of spins.");
        return;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    for (const [category, probability] of Object.entries(probabilities)) {
        const chance = 1 - Math.pow(1 - probability, spins);
        const percentage = (chance * 100).toFixed(2);
        const colorClass = colors[category];

        const resultElement = document.createElement("div");
        resultElement.className = `result ${colorClass}`;
        resultElement.textContent = `${category}: ${percentage}%`;
        resultsDiv.appendChild(resultElement);
    }
}