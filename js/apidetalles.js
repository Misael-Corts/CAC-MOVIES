document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (movieId) {
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyZGRiY2JkYTBhNmFiMmEwMTI2YmIwN2U3Zjk3OSIsInN1YiI6IjY2NTI0NmFhMjkzYTVhODE3MTMzNjUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aZBlN8GWB0o0KdeWaKyD98pmocR-3MqmMwtwYW7kQ_c';
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`;
        const movieDetailsContainer = document.getElementById('detallePelicula');

        fetchMovieDetails(apiUrl, accessToken, movieDetailsContainer);
    } else {
        // Manejar el caso en el que no se proporciona un ID de película
        console.error('No se proporcionó un ID de película.');
    }
});

function fetchMovieDetails(apiUrl, accessToken, container) {
    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(movie => {
        container.innerHTML = '';

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;
        movieTitle.classList.add('titulo-pelicula');

        const movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview;
        movieOverview.classList.add('descripcion-pelicula');

        const movieImg = document.createElement('img');
        movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImg.alt = movie.title;
        movieImg.classList.add('imagen-pelicula'); 

        container.appendChild(movieImg);
        container.appendChild(movieTitle);
        container.appendChild(movieOverview);


    })
    .catch(error => {
        console.error('Error al obtener los detalles de la película:', error);
        container.innerHTML = '<p>Ocurrió un error al cargar los detalles de la película. Por favor, intenta nuevamente más tarde.</p>';
    });
}