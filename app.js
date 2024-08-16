// const carouselTrack = document.querySelector('.carousel-track');
// const prevButton = document.querySelector('.carousel-prev');
// const nextButton = document.querySelector('.carousel-next');
// const totalItems = document.querySelectorAll('.carousel-item').length;
// const itemsToShow = 3;  // Number of items to show at a time
// const itemWidth = 100 / itemsToShow;  // Percentage width of each item
// let currentIndex = 0;
// const autoplayInterval = 3000;  // Time in milliseconds (3 seconds)

// // Function to update carousel position
// function updateCarousel() {
//     const translateX = -currentIndex * itemWidth;
//     carouselTrack.style.transform = `translateX(${translateX}%)`;
// }

// // Next button click event
// nextButton.addEventListener('click', () => {
//     moveToNext();
// });

// // Previous button click event
// prevButton.addEventListener('click', () => {
//     moveToPrevious();
// });

// // Autoplay functionality
// let autoplay = setInterval(() => {
//     moveToNext();
// }, autoplayInterval);

// // Pause autoplay on hover
// carouselTrack.addEventListener('mouseover', () => {
//     clearInterval(autoplay);
// });

// // Resume autoplay on mouseout
// carouselTrack.addEventListener('mouseout', () => {
//     autoplay = setInterval(() => {
//         moveToNext();
//     }, autoplayInterval);
// });

// // Move to next item
// function moveToNext() {
//     if (currentIndex < totalItems - itemsToShow) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;  // Reset to the beginning
//     }
//     updateCarousel();
// }

// // Move to previous item
// function moveToPrevious() {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = totalItems - itemsToShow;  // Move to the last set
//     }
//     updateCarousel();
// }
let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 5000);
