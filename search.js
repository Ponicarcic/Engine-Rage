document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    search(query);
});

function search(query) {
    // Simulăm o căutare și afișăm rezultatele
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Curățăm rezultatele anterioare
    
    if (query.trim() === '') {
        resultsContainer.innerHTML = '<p>Vă rugăm să introduceți un termen de căutare.</p>';
        return;
    }
    
    var results = [
        `Rezultat pentru "${query}" 1`,
        `Rezultat pentru "${query}" 2`,
        `Rezultat pentru "${query}" 3`
    ];

    results.forEach(function(result) {
        var resultElement = document.createElement('div');
        resultElement.className = 'result';
        resultElement.textContent = result;
        resultsContainer.appendChild(resultElement);
    });
}
