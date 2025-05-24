        // Toggle search functionality
        function toggleSearch() {
            const searchContainer = document.getElementById('searchContainer');
            searchContainer.classList.toggle('active');
            
            if (searchContainer.classList.contains('active')) {
                document.getElementById('searchInput').focus();
            }
        }
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                const searchTerm = searchInput.value.toLowerCase();
                
                if (searchTerm === 'bench press') {
                    window.location.href = 'bench-press-page.html';
                } else {
                    alert('Aradığınız alet bulunamadı.');
                }
            }
        });
