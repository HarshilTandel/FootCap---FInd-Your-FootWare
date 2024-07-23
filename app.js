document.addEventListener('DOMContentLoaded', function() {

    const shopNowButton = document.querySelector('.shop-now button');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    }


    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider-container');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    if (sliderContainer && prevButton && nextButton && sliderDotsContainer) {
        let scrollInterval; 
        let currentIndex = 0; 

        const cardWidth = sliderContainer.querySelector('.product-card').offsetWidth;
        const cardsCount = sliderContainer.children.length;

        for (let i = 0; i < cardsCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', function() {
                goToSlide(i);
            });
            sliderDotsContainer.appendChild(dot);
        }

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

        nextButton.addEventListener('click', function() {
            currentIndex++;
            if (currentIndex >= cardsCount) {
                currentIndex = 0;
            }
            goToSlide(currentIndex);
        });

        prevButton.addEventListener('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cardsCount - 1;
            }
            goToSlide(currentIndex);
        });

        function startAutoScroll() {
            scrollInterval = setInterval(function() {
                currentIndex++;
                if (currentIndex >= cardsCount) {
                    currentIndex = 0;
                }
                goToSlide(currentIndex);
            }, 5000); 
        }

        startAutoScroll();

        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(scrollInterval);
        });

        sliderContainer.addEventListener('mouseleave', function() {
            startAutoScroll();
        });

        
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
    }

    const arrowUpButton = document.getElementById('arrowUpButton');
    if (arrowUpButton) {
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
              
                arrowUpButton.style.opacity = '0';
                arrowUpButton.style.bottom = '-60px';
            } else {
              
                arrowUpButton.style.opacity = '1';
                arrowUpButton.style.bottom = '20px'; 
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        arrowUpButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });


            arrowUpButton.style.transform = 'scale(0.8)';
        });

        arrowUpButton.addEventListener('transitionend', function() {
            arrowUpButton.style.transform = 'scale(1)';
        });
    }


    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('active');
        });
    }
});
