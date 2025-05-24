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
        function validateForm() {
            let isValid = true;
            
            // Ad doğrulama
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (name.value.trim() === '') {
                nameError.textContent = 'Lütfen adınızı giriniz';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // E-posta doğrulama
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@(gmail\.com|outlook\.com)$/i;
            
            if (email.value.trim() === '') {
                emailError.textContent = 'Lütfen e-posta adresinizi giriniz';
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                emailError.textContent = 'Lütfen geçerli bir Gmail veya Outlook e-posta adresi giriniz';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Konu doğrulama
            const subject = document.getElementById('subject');
            const subjectError = document.getElementById('subjectError');
            if (subject.value.trim() === '') {
                subjectError.textContent = 'Lütfen bir konu giriniz';
                isValid = false;
            } else {
                subjectError.textContent = '';
            }
            
            // Mesaj doğrulama
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (message.value.trim() === '') {
                messageError.textContent = 'Lütfen mesajınızı giriniz';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            return isValid;
        }
        
