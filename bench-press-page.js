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
// Sayfa yüklendiğinde yorumları göster
document.addEventListener('DOMContentLoaded', function() {
    displayComments();
    
    // Yorum formunu gönderme işlemi
    document.getElementById('commentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form doğrulama
        if (validateCommentForm()) {
            // Yeni yorum ekle
            addComment();
            
            // Formu sıfırla
            this.reset();
        }
    });
});

// Form doğrulama fonksiyonu
function validateCommentForm() {
    let isValid = true;
    
    // Ad doğrulama
    const userName = document.getElementById('userName');
    const nameError = document.getElementById('nameError');
    if (userName.value.trim() === '') {
        nameError.textContent = 'Lütfen adınızı giriniz';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Yorum doğrulama
    const userComment = document.getElementById('userComment');
    const commentError = document.getElementById('commentError');
    if (userComment.value.trim() === '') {
        commentError.textContent = 'Lütfen yorumunuzu giriniz';
        isValid = false;
    } else {
        commentError.textContent = '';
    }
    
    // Puan doğrulama
    const userRating = document.querySelector('input[name="userRating"]:checked');
    const ratingError = document.getElementById('ratingError');
    if (!userRating) {
        ratingError.textContent = 'Lütfen bir puan seçiniz';
        isValid = false;
    } else {
        ratingError.textContent = '';
    }
    
    return isValid;
}

// Yeni yorum ekleme fonksiyonu
function addComment() {
    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;
    const userRating = document.querySelector('input[name="userRating"]:checked').value;
    const currentDate = new Date().toLocaleDateString('tr-TR');
    
    // Yeni yorum objesi oluştur
    const newComment = {
        name: userName,
        comment: userComment,
        rating: userRating,
        date: currentDate
    };
    
    // Mevcut yorumları al
    let comments = getComments();
    
    // Yeni yorumu ekle
    comments.push(newComment);
    
    // Güncellenmiş yorumları kaydet
    localStorage.setItem('benchPressComments', JSON.stringify(comments));
    
    // Yorumları yeniden göster
    displayComments();
}

// Mevcut yorumları alma fonksiyonu
function getComments() {
    const commentsJSON = localStorage.getItem('benchPressComments');
    return commentsJSON ? JSON.parse(commentsJSON) : [];
}

// Yorumları gösterme fonksiyonu
function displayComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    const comments = getComments();
    
    // Yorumlar varsa göster, yoksa mesaj göster
    if (comments.length > 0) {
        let html = '';
        
        comments.forEach(comment => {
            const stars = '★'.repeat(comment.rating) + '☆'.repeat(5 - comment.rating);
            
            html += `
            <div class="comment">
                <div class="comment-header">
                    <span class="comment-author">${comment.name}</span>
                    <span class="comment-rating">${stars}</span>
                </div>
                <p class="comment-text">${comment.comment}</p>
                <div class="comment-date">${comment.date}</div>
            </div>
            `;
        });
        
        commentsContainer.innerHTML = html;
    } else {
        commentsContainer.innerHTML = '<div class="no-comments">Henüz yorum yapılmadı. İlk yorumu siz yapın!</div>';
    }
}
