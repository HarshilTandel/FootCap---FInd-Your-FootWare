

document.querySelector('.shop-now button').addEventListener('click', function() {
    alert('Item added to cart!');
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider-container');
    const sliderDotsContainer = document.querySelector('.slider-dots');
    let scrollInterval; // Variable to store interval for automatic scrolling
    let currentIndex = 0; // Current index of the active slide

    const cardWidth = sliderContainer.querySelector('.product-card').offsetWidth;
    const cardsCount = sliderContainer.children.length;

    // Create pagination dots
    for (let i = 0; i < cardsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', function() {
            goToSlide(i);
        });
        sliderDotsContainer.appendChild(dot);
    }

    // Highlight active dot
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Function to scroll to specific slide
    function goToSlide(index) {
        currentIndex = index;
        const scrollAmount = currentIndex * cardWidth;
        sliderContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateDots();
    }

    // Event listener for next button
    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= cardsCount) {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    });

    // Event listener for previous button
    prevButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cardsCount - 1;
        }
        goToSlide(currentIndex);
    });

    // Automatic scrolling
    function startAutoScroll() {
        scrollInterval = setInterval(function() {
            currentIndex++;
            if (currentIndex >= cardsCount) {
                currentIndex = 0;
            }
            goToSlide(currentIndex);
        }, 5000); // Adjust interval as needed (e.g., 5000 milliseconds = 5 seconds)
    }

    // Start automatic scrolling on page load
    startAutoScroll();

    // Pause automatic scrolling on hover
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(scrollInterval);
    });

    // Resume automatic scrolling on mouse leave
    sliderContainer.addEventListener('mouseleave', function() {
        startAutoScroll();
    });

    // Keyboard navigation (optional)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cardsCount - 1;
            }
            goToSlide(currentIndex);
        } else if (event.key === 'ArrowRight') {
            currentIndex++;
            if (currentIndex >= cardsCount) {
                currentIndex = 0;
            }
            goToSlide(currentIndex);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var arrowUpButton = document.getElementById('arrowUpButton');
    var lastScrollTop = 0;

    // Show/hide the button based on scroll direction
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            arrowUpButton.style.opacity = '0';
            arrowUpButton.style.bottom = '-60px'; // Hide below viewport
        } else {
            // Scroll up
            arrowUpButton.style.opacity = '1';
            arrowUpButton.style.bottom = '20px'; // Show button
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Smooth scroll to the top when the button is clicked
    arrowUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Scale down after click
        arrowUpButton.style.transform = 'scale(0.8)';
    });

    // Reset scale after animation ends
    arrowUpButton.addEventListener('transitionend', function() {
        arrowUpButton.style.transform = 'scale(1)';
    });
});

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
