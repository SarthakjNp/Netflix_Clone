// Loading screen
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1500);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#141414';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, transparent)';
    }
});

// Navigation active state
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav-links a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Search functionality
const searchIcon = document.querySelector('.fa-search');
let searchActive = false;

searchIcon.addEventListener('click', function() {
    if (!searchActive) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Titles, people, genres';
        searchInput.className = 'search-input';
        this.parentNode.insertBefore(searchInput, this.nextSibling);
        searchInput.focus();
        searchActive = true;
    } else {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.remove();
        }
        searchActive = false;
    }
});

// Movie hover effect with preview
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        // Add hover effect
        this.style.transform = 'scale(1.1)';
        this.style.zIndex = '1';
        
        // Create preview tooltip (can be enhanced with video preview)
        const preview = document.createElement('div');
        preview.className = 'movie-preview';
        preview.innerHTML = `
            <h3>Movie Title</h3>
            <div class="preview-info">
                <span>98% Match</span>
                <span>2h 15m</span>
                <span>HD</span>
            </div>
            <div class="preview-genres">
                <span>Action</span>
                <span>Adventure</span>
                <span>Drama</span>
            </div>
        `;
        
        // Position the preview
        const rect = this.getBoundingClientRect();
        preview.style.position = 'absolute';
        preview.style.top = rect.bottom + 'px';
        preview.style.left = rect.left + 'px';
        preview.style.width = rect.width + 'px';
        
        document.body.appendChild(preview);
        
        // Store the preview element reference
        this.previewElement = preview;
    });
    
    card.addEventListener('mouseleave', function() {
        // Remove hover effect
        this.style.transform = 'scale(1)';
        this.style.zIndex = '0';
        
        // Remove preview
        if (this.previewElement) {
            this.previewElement.remove();
            this.previewElement = null;
        }
    });
});

// Play button functionality
document.querySelector('.play-btn').addEventListener('click', function() {
    alert('Playing Money Heist...');
    // Add your video player implementation here
});

// More Info button functionality
document.querySelector('.more-info-btn').addEventListener('click', function() {
    alert('Loading more information about Money Heist...');
    // Add your modal or new page implementation here
});

// Service Code button functionality
document.querySelector('.service-code').addEventListener('click', function() {
    const code = prompt('Please enter your service code:');
    if (code) {
        alert('Service code submitted: ' + code);
    }
});

// Add smooth scrolling for movie rows
document.querySelectorAll('.movie-row').forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        row.style.cursor = 'grabbing';
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
        row.style.cursor = 'default';
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
        row.style.cursor = 'default';
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});

// Add CSS styles for movie preview
const style = document.createElement('style');
style.textContent = `
    .movie-preview {
        background: #141414;
        border-radius: 4px;
        padding: 15px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        z-index: 2;
        margin-top: 10px;
    }
    
    .movie-preview h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
    }
    
    .preview-info {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    
    .preview-genres {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #999;
    }
    
    .preview-genres span:not(:last-child):after {
        content: "•";
        margin-left: 10px;
    }
`;
document.head.appendChild(style);

// Add CSS for search input
const searchStyle = document.createElement('style');
searchStyle.textContent = `
    .search-input {
        background: rgba(0, 0, 0, 0.75);
        border: 1px solid #fff;
        color: #fff;
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 4px;
        margin-left: 10px;
        width: 200px;
        transition: width 0.3s ease;
    }
    
    .search-input:focus {
        outline: none;
        width: 250px;
    }
    
    .loading {
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(searchStyle); 