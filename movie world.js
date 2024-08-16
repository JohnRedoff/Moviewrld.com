

const movies = [
    { title: "The Flash", year: 2023, image: "https://th.bing.com/th/id/OIP.lTX-7ODfAcFzA5PQnoFq0gHaDt?w=319&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Mad Mask", year: 2024, image: "https://cdn.kinocheck.com/i/6sy5p288io.jpg" },
    { title: "The Dark Knight", year: 2008, image: "https://th.bing.com/th/id/OIP.69uwwQxo_iLSSA0vt9Lb0wHaE7?w=1820&h=1213&rs=1&pid=ImgDetMain" },
    { title: "Dispicable Me 4", year: 2024, image: "https://th.bing.com/th/id/OIP.qEpJmIbKQjvoZG-UvtOPoAAAAA?rs=1&pid=ImgDetMain" },
    { title: "Beverly Hill Cop: Axel F", year: 2024, image: "https://th.bing.com/th/id/OIP.2Ueq8QT0vR_aXdiaRgu8AwHaK-?rs=1&pid=ImgDetMain" },
    { title: "Falcon And The Wintew Soldier", year: 2020, image: "https://th.bing.com/th/id/R.bb6a156d998e7dcfba8fd4d2adc983d0?rik=m20pc1RlkjXfhg&pid=ImgRaw&r=0" },
    { title: "Hawkeye", year: 2020, image: "https://th.bing.com/th/id/OIP.1BMD_Yr8j7vJlPQPMSyNuwAAAA?rs=1&pid=ImgDetMain" },
    { title: "Seal Team", year:2024, image: "https://cartermatt.com/wp-content/uploads/2024/08/SEAL-Team-season-7-1.webp" },
    { title: "Wish", year: 2024, image: "https://th.bing.com/th/id/OIP.PyqhAhgwjmmLvdHz945oRQAAAA?pid=ImgDet&w=179&h=238&c=7&dpr=1.3" },
    { title: "Deadpool & Wolverine", year: 2024, image: "https://serieshd.wiki/wp-content/uploads/2024/07/Deadpool-Wolverine-2024.jpg" },
    { title: "Godzilla X Kong: The New Empire", year: 2024, image: "https://th.bing.com/th/id/OIP.5014mUVI0WF8uQK4ZRuZ9AHaKh?rs=1&pid=ImgDetMain" },
    { title: "Uncharted", year: 2022, image: "https://th.bing.com/th/id/OIP.PX80bNPzpQhSBa0jewbhiQHaK-?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Bad Boys:Ride or Die", year: 2024, image: "https://image.tmdb.org/t/p/original/3lqnULXaNm4eSd1zqcknEj4CSP2.jpg" },
];

const movieList = document.getElementById('movie-list');
const searchBar = document.getElementById('search-bar');

function displayMovies(moviesToShow) {
    movieList.innerHTML = '';
    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">${movie.year}</div>
            </div>
        `;
        movieList.appendChild(movieCard);
    });
}

function filterMovies(searchTerm) {
    return movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

searchBar.addEventListener('input', (e) => {
    const filteredMovies = filterMovies(e.target.value);
    displayMovies(filteredMovies);
});


displayMovies(movies);

movieCard.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-year">${movie.year}</div>
    </div>
`;
 
const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const slides = Array.from(slider.children);
        const slideCount = slides.length;
        let slideIndex = 0;

        // Set initial position
        slider.style.transform = 'translateX(0)';

        function moveToSlide(index) {
            if (index < 0) {
                slideIndex = slideCount - 1;
            } else if (index >= slideCount) {
                slideIndex = 0;
            } else {
                slideIndex = index;
            }
            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            moveToSlide(slideIndex - 1);
        });

        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            moveToSlide(slideIndex + 1);
        });

        // Auto-slide
        function autoSlide() {
            moveToSlide(slideIndex + 1);
        }

        let slideInterval = setInterval(autoSlide, 3000);

        // Pause auto-slide on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(autoSlide, 3000);
        });