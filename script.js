document.addEventListener('DOMContentLoaded', () => {
    // Récupérer les éléments du DOM
    const numberInput = document.getElementById('number');
    const categorySelect = document.getElementById('quoi');
    const deviseSelect = document.getElementById('devise');
    const tempsSelect = document.getElementById('temps');
    const distanceSelect = document.getElementById('distance');
    const submitButton = document.getElementById('submit');

    // Cacher les sous-menus par défaut
    deviseSelect.style.display = 'none';
    tempsSelect.style.display = 'none';
    distanceSelect.style.display = 'none';

    // Afficher les options en fonction de la catégorie sélectionnée
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;

        // Réinitialiser l'affichage
        deviseSelect.style.display = 'none';
        tempsSelect.style.display = 'none';
        distanceSelect.style.display = 'none';

        // Afficher le bon menu
        if (selectedCategory === 'Devise') {
            deviseSelect.style.display = 'block';
        } else if (selectedCategory === 'Temps') {
            tempsSelect.style.display = 'block';
        } else if (selectedCategory === 'Distance') {
            distanceSelect.style.display = 'block';
        }
    });

    // Ajouter un gestionnaire pour le bouton de soumission
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Éviter le rechargement de la page
        const inputValue = parseFloat(numberInput.value);
        const selectedCategory = categorySelect.value;

        // Vérifier si l'entrée est un nombre valide
        if (isNaN(inputValue)) {
            alert("Veuillez entrer un nombre valide !");
            return;
        }

        let result;

        // Gérer les conversions en fonction de la catégorie et des options
        if (selectedCategory === 'Devise') {
            const selectedDevise = deviseSelect.value;

            switch (selectedDevise) {
                case '€_en_$':
                    result = inputValue * 1.1; // Exemple : Taux de conversion fictif
                    alert(`${inputValue} € = ${result.toFixed(2)} $`);
                    break;
                case '$_en_€':
                    result = inputValue * 0.9; // Exemple : Taux de conversion fictif
                    alert(`${inputValue} $ = ${result.toFixed(2)} €`);
                    break;
                default:
                    alert("Veuillez choisir une conversion valide pour la devise.");
            }

        } else if (selectedCategory === 'Temps') {
            const selectedTemps = tempsSelect.value;

            switch (selectedTemps) {
                case 'secondes_en_minutes':
                    result = inputValue / 60;
                    alert(`${inputValue} secondes = ${result.toFixed(2)} minutes`);
                    break;
                case 'minutes_en_secondes':
                    result = inputValue * 60;
                    alert(`${inputValue} minutes = ${result.toFixed(2)} secondes`);
                    break;
                case 'minutes_en_heures':
                    result = inputValue / 60;
                    alert(`${inputValue} minutes = ${result.toFixed(2)} heures`);
                    break;
                case 'heures_en_minutes':
                    result = inputValue * 60;
                    alert(`${inputValue} heures = ${result.toFixed(2)} minutes`);
                    break;
                case 'heures_en_jours':
                    result = inputValue / 24;
                    alert(`${inputValue} heures = ${result.toFixed(2)} jours`);
                    break;
                case 'jours_en_heures':
                    result = inputValue * 24;
                    alert(`${inputValue} jours = ${result.toFixed(2)} heures`);
                    break;
                default:
                    alert("Veuillez choisir une conversion valide pour le temps.");
            }

        } else if (selectedCategory === 'Distance') {
            const selectedDistance = distanceSelect.value;

            switch (selectedDistance) {
                case 'mm_en_cm':
                    result = inputValue / 10;
                    alert(`${inputValue} mm = ${result.toFixed(2)} cm`);
                    break;
                case 'cm_en_mm':
                    result = inputValue * 10;
                    alert(`${inputValue} cm = ${result.toFixed(2)} mm`);
                    break;
                case 'cm_en_m':
                    result = inputValue / 100;
                    alert(`${inputValue} cm = ${result.toFixed(2)} m`);
                    break;
                case 'm_en_cm':
                    result = inputValue * 100;
                    alert(`${inputValue} m = ${result.toFixed(2)} cm`);
                    break;
                case 'm_en_km':
                    result = inputValue / 1000;
                    alert(`${inputValue} m = ${result.toFixed(2)} km`);
                    break;
                case 'km_en_m':
                    result = inputValue * 1000;
                    alert(`${inputValue} km = ${result.toFixed(2)} m`);
                    break;
                default:
                    alert("Veuillez choisir une conversion valide pour la distance.");
            }

        } else {
            alert("Veuillez sélectionner une catégorie !");
        }
    });
});
