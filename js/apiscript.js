document.addEventListener("DOMContentLoaded", () => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyZGRiY2JkYTBhNmFiMmEwMTI2YmIwN2U3Zjk3OSIsInN1YiI6IjY2NTI0NmFhMjkzYTVhODE3MTMzNjUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aZBlN8GWB0o0KdeWaKyD98pmocR-3MqmMwtwYW7kQ_c';
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1`;
    const moviesContainer = document.getElementById('moviesContainer');

    fetchMovies(apiUrl, accessToken, moviesContainer);
});

function fetchMovies(apiUrl, accessToken, container) {
    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        container.innerHTML = '';

        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const movieImage = document.createElement('img');
            movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;

          
            const detailsLink = document.createElement('a');
            detailsLink.href = `api_detalles.html?id=${movie.id}`; 
            detailsLink.textContent = 'Ver detalles';
            detailsLink.classList.add('ver-detalles');

            movieElement.appendChild(movieImage);
            movieElement.appendChild(movieTitle);
            movieElement.appendChild(detailsLink);
            container.appendChild(movieElement);
        });
    })
    .catch(error => {
        console.error('Error al obtener las películas:', error);
        container.innerHTML = '<p>Ocurrió un error al cargar las películas. Por favor, intenta nuevamente más tarde.</p>';
    });
}

