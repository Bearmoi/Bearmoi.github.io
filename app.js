document.getElementById('toggleIngredients').addEventListener('click', function() {
    const ingredientsSection = document.querySelector('.ingredients');
    if (ingredientsSection.style.display === 'none') {
        ingredientsSection.style.display = 'block';
    } else {
        ingredientsSection.style.display = 'none';
    }
});
