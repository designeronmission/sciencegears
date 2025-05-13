        // Initialize Hero Slider
        const heroSwiper = new Swiper('.hero-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        

        // Animation on Scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.about-feature, .product-card, .testimonial-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
        });
        
        
        
        

   
        // Animate elements when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.feature-card, .team-card, .stats-item').forEach(card => {
            observer.observe(card);
        });



        document.addEventListener('DOMContentLoaded', function() {
            const track = document.getElementById('products-track');
            const leftButton = document.getElementById('scroll-left');
            const rightButton = document.getElementById('scroll-right');
            const productCards = document.querySelectorAll('.product-card');
            const cardWidth = productCards[0].offsetWidth + 20; // width + gap
            
            let currentPosition = 0;
            const maxScroll = (productCards.length * cardWidth) - track.offsetWidth;
            
            function updateButtons() {
                leftButton.disabled = currentPosition === 0;
                rightButton.disabled = currentPosition >= maxScroll;
                
                if (leftButton.disabled) {
                    leftButton.classList.add('disabled');
                } else {
                    leftButton.classList.remove('disabled');
                }
                
                if (rightButton.disabled) {
                    rightButton.classList.add('disabled');
                } else {
                    rightButton.classList.remove('disabled');
                }
            }
            
            leftButton.addEventListener('click', function() {
                if (currentPosition > 0) {
                    currentPosition = Math.max(currentPosition - cardWidth * 2, 0);
                    track.style.transform = `translateX(-${currentPosition}px)`;
                    updateButtons();
                }
            });
            
            rightButton.addEventListener('click', function() {
                if (currentPosition < maxScroll) {
                    currentPosition = Math.min(currentPosition + cardWidth * 2, maxScroll);
                    track.style.transform = `translateX(-${currentPosition}px)`;
                    updateButtons();
                }
            });
            
            // Initialize buttons
            updateButtons();
            
            // Handle window resize
            window.addEventListener('resize', function() {
                const newMaxScroll = (productCards.length * cardWidth) - track.offsetWidth;
                if (currentPosition > newMaxScroll) {
                    currentPosition = newMaxScroll;
                    track.style.transform = `translateX(-${currentPosition}px)`;
                }
                maxScroll = newMaxScroll;
                updateButtons();
            });
        });




/* navigations */
        
 // Toggle search bar
 document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('searchToggle');
    const searchExpandable = document.getElementById('searchExpandable');
    
    if (searchToggle && searchExpandable) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            searchExpandable.classList.toggle('show');
        });
    }
    
    // Close search when clicking outside
    document.addEventListener('click', function() {
        if (searchExpandable) {
            searchExpandable.classList.remove('show');
        }
    });
    
    // Prevent search from closing when clicking inside
    if (searchExpandable) {
        searchExpandable.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            document.querySelector('.main-navbar').classList.add('scrolled');
        } else {
            document.querySelector('.main-navbar').classList.remove('scrolled');
        }
    });
});




/* products */


document.addEventListener('DOMContentLoaded', function() {
    // Mobile filter toggle
    const filterToggle = document.getElementById('filterToggle');
    const filterSidebar = document.querySelector('.filter-sidebar-container');
    const filterOverlay = document.getElementById('filterOverlay');
    
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            filterSidebar.classList.toggle('active');
            filterOverlay.classList.toggle('active');
            document.body.style.overflow = filterSidebar.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    if (filterOverlay) {
        filterOverlay.addEventListener('click', function() {
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    

    
    // Sort functionality
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // Here you would implement actual sorting logic
            console.log('Sorted by:', this.value);
            
            // For demo purposes, just show a notification
            showNotification(`Sorted by: ${this.options[this.selectedIndex].text}`);
        });
    }
    
    // Product card hover effects
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '2';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // Apply filters button
    document.querySelector('.btn-apply-filters').addEventListener('click', function(e) {
        e.preventDefault();
        // Close mobile filter if open
        if (filterSidebar.classList.contains('active')) {
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Show notification
        showNotification('Filters applied successfully');
    });
    
    // Reset filters button
    document.querySelector('.btn-reset-filters').addEventListener('click', function(e) {
        e.preventDefault();
        resetFilters();
    });
    
    // Clear all filters button
    document.querySelector('.clear-filters-btn').addEventListener('click', function(e) {
        e.preventDefault();
        resetFilters();
    });
    
    // Function to reset all filters
    function resetFilters() {
        // Reset category filter
        document.querySelectorAll('.filter-options a.active').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('.filter-options a:first-child').classList.add('active');
        
        // Reset price range
        if (priceMin && priceMax) {
            priceMin.value = 2000;
            priceMax.value = 8000;
            minValue.textContent = '2000';
            maxValue.textContent = '8000';
        }
        
        // Show notification
        showNotification('All filters have been reset');
    }
    
    // Function to show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = 'var(--primary-blue)';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '30px';
        notification.style.zIndex = '100';
        notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        notification.style.fontSize = '0.9rem';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => notification.remove(), 500);
        }, 2000);
    }
});




/* product-details */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile filter toggle
    const filterToggle = document.getElementById('filterToggle');
    const filterSidebar = document.querySelector('.filter-sidebar');
    const filterOverlay = document.getElementById('filterOverlay');
    
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            filterSidebar.classList.add('active');
            filterOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (filterOverlay) {
        filterOverlay.addEventListener('click', function() {
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Clear all filters
    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Remove active class from all filter options
            document.querySelectorAll('.filter-options li a.active').forEach(item => {
                item.classList.remove('active');
            });
            
            // Reset price slider
            document.getElementById('priceMin').value = 2000;
            document.getElementById('priceMax').value = 8000;
            document.getElementById('minValue').textContent = '2000';
            document.getElementById('maxValue').textContent = '8000';
            
            // Reset sort dropdown
            document.getElementById('sort').value = 'popular';
        });
    }
    
    // Filter option selection
    document.querySelectorAll('.filter-options li a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // For categories, remove active from all and add to clicked
            if (this.closest('.filter-group').querySelector('h3').textContent === 'Categories') {
                document.querySelectorAll('.filter-options li a').forEach(link => {
                    link.classList.remove('active');
                });
            }
            
            this.classList.toggle('active');
        });
    });
    
    // Price slider functionality
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');
    
    if (priceMin && priceMax) {
        [priceMin, priceMax].forEach(slider => {
            slider.addEventListener('input', function() {
                // Ensure min doesn't exceed max and vice versa
                if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
                    if (this === priceMin) {
                        priceMax.value = priceMin.value;
                        maxValue.textContent = priceMin.value;
                    } else {
                        priceMin.value = priceMax.value;
                        minValue.textContent = priceMax.value;
                    }
                }
                
                minValue.textContent = priceMin.value;
                maxValue.textContent = priceMax.value;
            });
        });
    }
    
    // Apply filters button
    const applyFiltersBtn = document.querySelector('.btn-apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            // Get all selected filters
            const selectedCategories = Array.from(document.querySelectorAll('.filter-group:first-child .filter-options li a.active')).map(item => item.textContent.trim().split(' ')[0]);
            const minPrice = parseInt(priceMin.value);
            const maxPrice = parseInt(priceMax.value);
            const selectedBrands = Array.from(document.querySelectorAll('.filter-group:nth-child(3) .filter-options li a.active')).map(item => item.textContent.trim());
            const selectedFeatures = Array.from(document.querySelectorAll('.filter-group:nth-child(4) .filter-options li a.active')).map(item => item.textContent.trim());
            const selectedAvailability = Array.from(document.querySelectorAll('.filter-group:nth-child(5) .filter-options li a.active')).map(item => item.textContent.trim());
            const sortBy = document.getElementById('sort').value;
            
            // Here you would typically make an AJAX request to your backend with these filter parameters
            // For this example, we'll just log them and simulate filtering
            console.log('Applying filters:', {
                categories: selectedCategories,
                priceRange: [minPrice, maxPrice],
                brands: selectedBrands,
                features: selectedFeatures,
                availability: selectedAvailability,
                sortBy: sortBy
            });
            
            // Simulate filtering by hiding non-matching products
            filterProducts(selectedCategories, minPrice, maxPrice, selectedBrands, selectedFeatures, selectedAvailability, sortBy);
            
            // Close mobile filter if open
            filterSidebar.classList.remove('active');
            filterOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Show toast notification
            showToast('Filters applied successfully!');
        });
    }
    
    // Reset filters button
    const resetFiltersBtn = document.querySelector('.btn-reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            // Clear all filters (same as clear button)
            document.querySelectorAll('.filter-options li a.active').forEach(item => {
                item.classList.remove('active');
            });
            
            document.getElementById('priceMin').value = 2000;
            document.getElementById('priceMax').value = 8000;
            document.getElementById('minValue').textContent = '2000';
            document.getElementById('maxValue').textContent = '8000';
            
            document.getElementById('sort').value = 'popular';
            
            // Show all products
            document.querySelectorAll('.products-cards').forEach(card => {
                card.style.display = 'block';
            });
            
            // Update showing results count
            updateShowingResults();
            
            // Show toast notification
            showToast('Filters reset successfully!');
        });
    }
    
    // Sort dropdown change
    const sortDropdown = document.getElementById('sort');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', function() {
            const sortBy = this.value;
            // Here you would typically re-sort the products
            console.log('Sorting by:', sortBy);
            sortProducts(sortBy);
        });
    }
    
    // Helper function to filter products
    function filterProducts(categories, minPrice, maxPrice, brands, features, availability, sortBy) {
        const productCards = document.querySelectorAll('.products-cards');
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const productPrice = getProductPrice(card); // You'd need to implement this
            const productCategory = card.querySelector('.product-category').textContent;
            const productBrand = 'Gamry'; // You'd need to add data attributes for brand, features, etc.
            const productFeatures = ['High Precision', 'USB Connectivity']; // Example
            const productAvailability = 'In Stock'; // Example
            
            // Check if product matches all selected filters
            const matchesCategory = categories.length === 0 || categories.some(cat => productCategory.includes(cat));
            const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;
            const matchesBrand = brands.length === 0 || brands.includes(productBrand);
            const matchesFeatures = features.length === 0 || features.every(feat => productFeatures.includes(feat));
            const matchesAvailability = availability.length === 0 || availability.includes(productAvailability);
            
            if (matchesCategory && matchesPrice && matchesBrand && matchesFeatures && matchesAvailability) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update showing results count
        updateShowingResults(visibleCount);
        
        // Sort products
        sortProducts(sortBy);
    }
    
    // Helper function to sort products
    function sortProducts(sortBy) {
        const productGrid = document.querySelector('.product-grid');
        const productCards = Array.from(document.querySelectorAll('.products-cards'));
        
        productCards.sort((a, b) => {
            switch(sortBy) {
                case 'price-low':
                    return getProductPrice(a) - getProductPrice(b);
                case 'price-high':
                    return getProductPrice(b) - getProductPrice(a);
                case 'newest':
                    // Compare dates - you'd need to add data attributes for product dates
                    return 0;
                case 'rating':
                    // Compare ratings - you'd need to add rating data
                    return 0;
                default: // 'popular'
                    return 0;
            }
        });
        
        // Re-append sorted products
        productCards.forEach(card => {
            productGrid.appendChild(card);
        });
    }
    
    // Helper function to get product price (mock implementation)
    function getProductPrice(card) {
        // In a real implementation, you'd parse the actual price from the card
        // This is just a mock that returns random prices for demonstration
        return Math.floor(Math.random() * 8000) + 1000;
    }
    
    // Helper function to update showing results count
    function updateShowingResults(visibleCount) {
        const showingResults = document.querySelector('.showing-results');
        const totalProducts = document.querySelectorAll('.products-cards').length;
        const count = visibleCount !== undefined ? visibleCount : totalProducts;
        
        if (showingResults) {
            showingResults.innerHTML = `Showing <strong>1-${count}</strong> of <strong>${totalProducts}</strong> products`;
        }
    }
    
    // Helper function to show toast notifications
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'filter-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    // Add toast styles dynamically
    const toastStyles = document.createElement('style');
    toastStyles.textContent = `
        .filter-toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #002464;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .filter-toast.show {
            opacity: 1;
            bottom: 30px;
        }
    `;
    document.head.appendChild(toastStyles);
});




// Add this to your existing JavaScript

// Search functionality
const productSearch = document.getElementById('productSearch');
const searchButton = document.getElementById('searchButton');

if (productSearch && searchButton) {
    // Search when button is clicked
    searchButton.addEventListener('click', function() {
        applyAllFilters();
    });
    
    // Search when Enter key is pressed
    productSearch.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            applyAllFilters();
        }
    });
}

// Modify the applyAllFilters function to include search
function applyAllFilters() {
    const searchTerm = productSearch.value.toLowerCase().trim();
    const selectedCategories = Array.from(document.querySelectorAll('.filter-group:nth-child(2) .filter-options li a.active')).map(item => item.textContent.trim().split(' ')[0]);
    const minPrice = parseInt(priceMin.value);
    const maxPrice = parseInt(priceMax.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-group:nth-child(4) .filter-options li a.active')).map(item => item.textContent.trim());
    const selectedFeatures = Array.from(document.querySelectorAll('.filter-group:nth-child(5) .filter-options li a.active')).map(item => item.textContent.trim());
    const selectedAvailability = Array.from(document.querySelectorAll('.filter-group:nth-child(6) .filter-options li a.active')).map(item => item.textContent.trim());
    const sortBy = document.getElementById('sort').value;
    
    filterProducts(searchTerm, selectedCategories, minPrice, maxPrice, selectedBrands, selectedFeatures, selectedAvailability, sortBy);
}

// Update the filterProducts function to include search
function filterProducts(searchTerm, categories, minPrice, maxPrice, brands, features, availability, sortBy) {
    const productCards = document.querySelectorAll('.products-cards');
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-title').textContent.toLowerCase();
        const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
        const productPrice = getProductPrice(card);
        const productCategory = card.querySelector('.product-category').textContent;
        const productBrand = 'Gamry'; // Example - should be dynamic in real implementation
        const productFeatures = ['High Precision', 'USB Connectivity']; // Example
        const productAvailability = 'In Stock'; // Example
        
        // Check if product matches search term
        const matchesSearch = searchTerm === '' || 
                             productName.includes(searchTerm) || 
                             productDescription.includes(searchTerm);
        
        // Check other filters
        const matchesCategory = categories.length === 0 || categories.some(cat => productCategory.includes(cat));
        const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;
        const matchesBrand = brands.length === 0 || brands.includes(productBrand);
        const matchesFeatures = features.length === 0 || features.every(feat => productFeatures.includes(feat));
        const matchesAvailability = availability.length === 0 || availability.includes(productAvailability);
        
        if (matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesFeatures && matchesAvailability) {
            card.style.display = 'block';
            visibleCount++;
            
            // Highlight search term in product name and description
            if (searchTerm !== '') {
                highlightText(card.querySelector('.product-title'), searchTerm);
                highlightText(card.querySelector('.product-description'), searchTerm);
            } else {
                removeHighlights(card);
            }
        } else {
            card.style.display = 'none';
            removeHighlights(card);
        }
    });
    
    updateShowingResults(visibleCount);
    sortProducts(sortBy);
}

// Helper function to highlight search terms
function highlightText(element, searchTerm) {
    const text = element.textContent;
    const highlightedText = text.replace(new RegExp(searchTerm, 'gi'), match => 
        `<span class="search-highlight">${match}</span>`
    );
    element.innerHTML = highlightedText;
}

// Helper function to remove highlights
function removeHighlights(card) {
    const highlights = card.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.textContent = parent.textContent;
    });
}





/* product-details */
// 3D Model Interaction
document.addEventListener('DOMContentLoaded', function() {
    let currentRotation = { x: 0, y: 0 };
    let currentScale = 1;
    const model = document.getElementById('product3dModel');
    
    // Rotate model function
    window.rotateModel = function(axis) {
        if (axis === 'x') {
            currentRotation.x += 20;
        } else {
            currentRotation.y += 20;
        }
        model.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg) scale(${currentScale})`;
    };
    
    // Zoom model function
    window.zoomModel = function(direction) {
        if (direction === 'in') {
            currentScale += 0.1;
        } else if (currentScale > 0.5) {
            currentScale -= 0.1;
        }
        model.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg) scale(${currentScale})`;
    };
    
    // Change model view function
    window.changeModelView = function(view) {
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        event.target.classList.add('active');
        
        // Change the image source based on view
        const viewImages = {
            'front': 'assets/products/Potentiostats/Squidstat-Plus/SquidStat-Plus_1.png',
            'side': 'assets/products/Potentiostats/Squidstat-Plus/SquidStat-Plus_2.png',
            'top': 'assets/products/Potentiostats/Squidstat-Plus/SquidStat-Plus_3.png',
            'angle': 'assets/products/Potentiostats/Squidstat-Plus/SquidStat-Plus_4.png',
            'display': 'assets/products/Potentiostats/Squidstat-Plus/SquidStat-Plus_5.png'
        };
        
        if (viewImages[view]) {
            model.src = viewImages[view];
        }
    };

    // Initialize particles.js if container exists
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }
                }
            }
        });
    }
});




// Interactive rating stars for the review form
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-label');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = this.previousElementSibling.value;
            console.log(`Selected rating: ${ratingValue} stars`);
            
            // Reset all stars
            document.querySelectorAll('.star-label').forEach(s => {
                s.innerHTML = '<i class="far fa-star"></i>';
            });
            
            // Fill stars up to the selected one
            for (let i = 0; i < ratingValue; i++) {
                stars[i].innerHTML = '<i class="fas fa-star"></i>';
            }
        });
    });
    
    // Mobile review form toggle
    const reviewFormCollapse = document.getElementById('reviewFormCollapse');
    reviewFormCollapse.addEventListener('hidden.bs.collapse', function() {
        document.querySelector('[data-bs-target="#reviewFormCollapse"]').innerHTML = 
            '<i class="fas fa-pen me-2"></i>Write Review';
    });
    reviewFormCollapse.addEventListener('shown.bs.collapse', function() {
        document.querySelector('[data-bs-target="#reviewFormCollapse"]').innerHTML = 
            '<i class="fas fa-times me-2"></i>Close';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const scrollContent = document.getElementById('scrollContent');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const dots = scrollIndicator.querySelectorAll('.scroll-dot');
    
    // Card width including gap (20px)
    const cardWidth = document.querySelector('.apple-card').offsetWidth + 20;
    let isScrolling = false;
    
    // Update scroll indicators and button states
    function updateUI() {
        const scrollPercentage = scrollContent.scrollLeft / (scrollContent.scrollWidth - scrollContent.clientWidth);
        const activeDot = Math.round(scrollPercentage * (dots.length - 1));
        
        dots.forEach((dot, index) => {
            if (index === activeDot) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Disable buttons at extremes
        scrollLeft.disabled = scrollContent.scrollLeft === 0;
        scrollRight.disabled = scrollContent.scrollLeft >= scrollContent.scrollWidth - scrollContent.clientWidth - 10;
    }
    
    // Scroll to position
    function smoothScrollTo(position) {
        if (isScrolling) return;
        
        isScrolling = true;
        scrollContent.scrollTo({
            left: position,
            behavior: 'smooth'
        });
        
        // Wait for scroll to complete
        setTimeout(() => {
            isScrolling = false;
            updateUI();
        }, 500);
    }
    
    // Scroll left button
    scrollLeft.addEventListener('click', function() {
        const newPosition = scrollContent.scrollLeft - (cardWidth * 2);
        smoothScrollTo(Math.max(0, newPosition));
    });
    
    // Scroll right button
    scrollRight.addEventListener('click', function() {
        const newPosition = scrollContent.scrollLeft + (cardWidth * 2);
        const maxScroll = scrollContent.scrollWidth - scrollContent.clientWidth;
        smoothScrollTo(Math.min(maxScroll, newPosition));
    });
    
    // Click on dots to scroll
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const scrollTo = index * (scrollContent.scrollWidth / dots.length);
            smoothScrollTo(scrollTo);
        });
    });
    
    // Update on scroll
    scrollContent.addEventListener('scroll', function() {
        if (!isScrolling) {
            updateUI();
        }
    });
    
    // Add smooth scrolling on wheel event
    scrollContent.addEventListener('wheel', function(e) {
        e.preventDefault();
        scrollContent.scrollLeft += e.deltaY * 0.6;
    });
    
    // Initialize UI state
    updateUI();
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            scrollLeft.click();
        } else if (e.key === 'ArrowRight') {
            scrollRight.click();
        }
    });
});






/* product-list */

document.addEventListener('DOMContentLoaded', function() {
    // View toggle functionality
    const gridToggle = document.querySelector('.grid-toggle');
    const listToggle = document.querySelector('.list-toggle');
    const productGrid = document.getElementById('productGrid');
    const productList = document.getElementById('productList');
    
    gridToggle.addEventListener('click', function() {
        gridToggle.classList.add('active');
        listToggle.classList.remove('active');
        productGrid.classList.add('active');
        productList.classList.remove('active');
    });
    
    listToggle.addEventListener('click', function() {
        listToggle.classList.add('active');
        gridToggle.classList.remove('active');
        productList.classList.add('active');
        productGrid.classList.remove('active');
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.products-card-list, .product-row');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const specs = card.querySelector('.product-specs').textContent.toLowerCase();
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (title.includes(searchTerm)){
                card.style.display = '';
            } else if (specs.includes(searchTerm)) {
                card.style.display = '';
            } else if (category.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Filter functionality
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    function applyFilters() {
        // Get all selected filters
        const selectedCategories = Array.from(document.querySelectorAll('#cat-1, #cat-2, #cat-3, #cat-4, #cat-5'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.toLowerCase());
        
        const selectedCurrents = Array.from(document.querySelectorAll('#current-1, #current-2, #current-3'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.toLowerCase());
        
        const selectedFeatures = Array.from(document.querySelectorAll('#feat-1, #feat-2, #feat-3, #feat-4, #feat-5'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.toLowerCase());
        
        const selectedBrands = Array.from(document.querySelectorAll('#brand-1, #brand-2, #brand-3, #brand-4, #brand-5'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.toLowerCase());
        
        productCards.forEach(card => {
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const specs = card.querySelector('.product-specs').textContent.toLowerCase();
            const features = Array.from(card.querySelectorAll('.product-features li')).map(li => li.textContent.toLowerCase());
            
            // Check if card matches all selected filters
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => category.includes(cat));
            const matchesCurrent = selectedCurrents.length === 0 || selectedCurrents.some(current => {
                if (current.includes('µa')) {
                    return features.some(feat => feat.includes('µa') || feat.includes('1ma'));
                } else if (current.includes('ma')) {
                    return features.some(feat => (feat.includes('ma') && !feat.includes('µa')) || features.some(feat => feat.includes('1a')))
                } else if (current.includes('a range')) {
                    return features.some(feat => feat.includes('a') && !feat.includes('ma') && !feat.includes('µa'));
                }
                return false;
            });
            const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.some(feature => {
                if (feature.includes('eis')) {
                    return features.some(feat => feat.includes('eis') || specs.includes('eis'));
                } else if (feature.includes('multi-channel')) {
                    return features.some(feat => feat.includes('channel')) || category.includes('multi-channel');
                } else if (feature.includes('portable')) {
                    return features.some(feat => feat.includes('portable') || specs.includes('portable'));
                } else if (feature.includes('bandwidth')) {
                    return features.some(feat => feat.includes('mhz'));
                } else if (feature.includes('floating')) {
                    return features.some(feat => feat.includes('floating'));
                }
                return false;
            });
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(brand => title.includes(brand.toLowerCase()));
            
            if (matchesCategory && matchesCurrent && matchesFeatures && matchesBrand) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Reset filter buttons
    const resetButtons = document.querySelectorAll('.filter-group button');
    resetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterGroup = this.closest('.filter-group');
            const checkboxes = filterGroup.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            applyFilters();
        });
    });
    
    // Sort dropdown functionality
    const sortDropdown = document.querySelector('.sort-dropdown button');
    sortDropdown.addEventListener('click', function() {
        // This would toggle a dropdown menu with sort options
        alert('Sort dropdown would open here with options like "Featured", "Alphabetical", etc.');
    });
    
    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active') && !this.querySelector('i')) {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // Here you would load the appropriate page of products
            }
        });
    });
});






/* megamenu */


document.addEventListener('DOMContentLoaded', function() {
    // megaproduct menu functionality
    const megaproductCategories = document.querySelectorAll('.megaproduct-category');
    const subcategoryItems = document.querySelectorAll('.subcategory-item');
    const megaproductImage = document.getElementById('megaproduct-display-image');
    const subContainers = document.querySelectorAll('.subcategories-container');
    
    // Promo text for different categories
    const promoTexts = {
        'Electrochemistry WorkStations': {
            title: 'Squidstat Plus',
            desc: '±1 A Potentiostat with EIS up to 2 MHz and 1% / 2° Accuracy at 1 mΩ.'
        },
        ' Electrochemistry Accessories': {
            title: 'L-Type Working Electrodes',
            desc: 'Glassy Carbon3, 4, 5 - Graphite 3, 4, 5 and 6'
        },
        'Battery Cycler': {
            title: 'CT-4000 – 5/10V 50mA (3 ranges)',
            desc: 'For Coin Cells, Pouch Cells, small capacity batteries, Super Capacitors, 3-Electrode System Testing etc.'
        },
        'Battery Environmental Test Chambers': {
            title: '3C All-in-one Testing System',
            desc: 'For pouch cell charging, discharging, and temperature performance.'
        },
        'Battery Cycler Accessories': {
            title: 'Alligator Clamp',
            desc: 'Suitable for applications that require connection and fixation, such as battery testing and circuit fabrication.'
        },

        



        'mens': {
            title: 'Men\'s Fashion',
            desc: 'Stylish and comfortable clothing for every occasion.'
        },
        'womens': {
            title: 'Women\'s Fashion',
            desc: 'Trendy outfits and accessories to complement your style.'
        },
        'kids': {
            title: 'Kids\' Collection',
            desc: 'Durable and comfortable clothing for your little ones.'
        },
        'footwear': {
            title: 'Footwear Collection',
            desc: 'Walk in comfort and style with our range of shoes.'
        },
        'kitchen': {
            title: 'Kitchen Essentials',
            desc: 'Make cooking easier with our innovative kitchen appliances.'
        },
        'cleaning': {
            title: 'Cleaning Solutions',
            desc: 'Keep your home spotless with our efficient cleaning tools.'
        },
        'furniture': {
            title: 'Home Furniture',
            desc: 'Stylish and functional furniture for every room.'
        },
        'skincare': {
            title: 'Skincare megaproducts',
            desc: 'Nourish your skin with our premium skincare range.'
        },
        'haircare': {
            title: 'Haircare Solutions',
            desc: 'megaproducts for all hair types to keep your locks healthy.'
        },
        'makeup': {
            title: 'Makeup Collection',
            desc: 'Enhance your natural beauty with our cosmetic megaproducts.'
        },
        'fitness': {
            title: 'Fitness Equipment',
            desc: 'Achieve your fitness goals with our quality equipment.'
        },
        'outdoor': {
            title: 'Outdoor Gear',
            desc: 'Gear up for your next adventure with our durable outdoor equipment.'
        },
        'sports': {
            title: 'Sports Equipment',
            desc: 'Professional-grade equipment for various sports.'
        },
        'toys': {
            title: 'Toys Collection',
            desc: 'Fun and educational toys for kids of all ages.'
        },
        'games': {
            title: 'Games & Puzzles',
            desc: 'Entertaining games for family and friends.'
        },
        'collectibles': {
            title: 'Collectible Items',
            desc: 'Rare and unique items for collectors.'
        }
    };
    

    
    // Handle subcategory selection
    subcategoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all subcategories
            subcategoryItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked subcategory
            this.classList.add('active');
            
            const imageUrl = this.getAttribute('data-image');
            const subcategory = this.getAttribute('data-subcategory');
            
            // Update image
            megaproductImage.src = imageUrl;
            
            // Update promo text
            updatePromoText(subcategory);
        });
    });
    
    // Function to update promo text
    function updatePromoText(subcategory) {
        const promo = document.querySelector('.megaproduct-promo');
        if (promoTexts[subcategory]) {
            promo.querySelector('h6').textContent = promoTexts[subcategory].title;
            promo.querySelector('p').textContent = promoTexts[subcategory].desc;
        }
    }
    
    // Mega menu toggle functionality
    const megaMenus = document.querySelectorAll('.mega-menu');
    
    megaMenus.forEach(menu => {
        const dropdown = menu.querySelector('.dropdown-toggle');
        const megaContent = menu.querySelector('.mega-menu-content');
        
        // Desktop hover behavior
        menu.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                menu.classList.add('show');
                dropdown.setAttribute('aria-expanded', 'true');
                megaContent.classList.add('show');
            }
        });
        
        menu.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                menu.classList.remove('show');
                dropdown.setAttribute('aria-expanded', 'false');
                megaContent.classList.remove('show');
            }
        });
        
        // Mobile click behavior
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const isExpanded = dropdown.getAttribute('aria-expanded') === 'true';
                
                // Close other mega menus
                document.querySelectorAll('.mega-menu').forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('show');
                        otherMenu.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                        otherMenu.querySelector('.mega-menu-content').classList.remove('show');
                    }
                });
                
                // Toggle current menu
                menu.classList.toggle('show', !isExpanded);
                dropdown.setAttribute('aria-expanded', !isExpanded);
                megaContent.classList.toggle('show', !isExpanded);
            }
        });
    });
    
    // Close mega menus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mega-menu') && window.innerWidth < 992) {
            document.querySelectorAll('.mega-menu').forEach(menu => {
                menu.classList.remove('show');
                menu.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                menu.querySelector('.mega-menu-content').classList.remove('show');
            });
        }
    });
});








// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
















// Responsive adjustments for sidebar
function handleSidebar() {
    const sidebar = document.querySelector('.sidebar-sticky');
    if (window.innerWidth < 992) {
        sidebar.style.position = 'static';
        sidebar.style.height = 'auto';
    } else {
        sidebar.style.position = 'sticky';
        sidebar.style.height = 'calc(100vh - 40px)';
    }
}

// Run on load and resize
window.addEventListener('load', handleSidebar);
window.addEventListener('resize', handleSidebar);



    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });











    document.getElementById('searchInput').addEventListener('keyup', function () {
        const filter = this.value.toLowerCase();
        const questions = document.querySelectorAll('.accordion-item');
      
        questions.forEach(q => {
          const text = q.getAttribute('data-question').toLowerCase();
          q.style.display = text.includes(filter) ? '' : 'none';
        });
      });
      
      document.getElementById('addQuestionForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const userQuestion = document.getElementById('userQuestion').value.trim();
        if (!userQuestion) return;
      
        alert("Thank you! Your question has been submitted.");
        this.reset();
      });
      





      document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.nav-link');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.querySelector('.active-indicator').style.display = 'none';
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                this.querySelector('.active-indicator').style.display = 'block';
                
                // Hide all sections
                document.querySelectorAll('.tab-section').forEach(section => {
                    section.classList.remove('active-section');
                });
                
                // Show corresponding section
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active-section');
            });
        });
    });









    
        document.addEventListener('DOMContentLoaded', function() {
    // Make the horizontal scroll work with mouse drag
    const brandScroller = document.querySelector('.brand-scroller');
    const brandTrack = document.querySelector('.brand-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    brandScroller.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - brandScroller.offsetLeft;
        scrollLeft = brandScroller.scrollLeft;
        brandTrack.style.animationPlayState = 'paused';
        brandScroller.style.cursor = 'grabbing';
    });

    brandScroller.addEventListener('mouseleave', () => {
        isDown = false;
        brandScroller.style.cursor = 'grab';
    });

    brandScroller.addEventListener('mouseup', () => {
        isDown = false;
        brandScroller.style.cursor = 'grab';
        // Restart animation after a delay if not manually scrolling
        setTimeout(() => {
            if (!isDown) {
                brandTrack.style.animationPlayState = 'running';
            }
        }, 2000);
    });

    brandScroller.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - brandScroller.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        brandScroller.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    brandScroller.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - brandScroller.offsetLeft;
        scrollLeft = brandScroller.scrollLeft;
        brandTrack.style.animationPlayState = 'paused';
    });

    brandScroller.addEventListener('touchend', () => {
        isDown = false;
        // Restart animation after a delay if not manually scrolling
        setTimeout(() => {
            if (!isDown) {
                brandTrack.style.animationPlayState = 'running';
            }
        }, 2000);
    });

    brandScroller.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - brandScroller.offsetLeft;
        const walk = (x - startX) * 2;
        brandScroller.scrollLeft = scrollLeft - walk;
    });
});