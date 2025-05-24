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

// Beast Mode form button
const subscribeButton = document.querySelector('.email-form button');

subscribeButton.addEventListener('click', function() {
    const emailInput = document.querySelector('.email-form input');
    const notification = document.getElementById('notification');
    
    if (emailInput.value.trim() === '') {
        alert("Lütfen bir e-posta adresi girin!");
        return;
    }

    // Bildirimi göster
    notification.innerText = `${emailInput.value} adresiyle başarıyla abone olundu!`;
    notification.style.display = 'block';

    // 3 saniye sonra bildirimi gizle
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Formu sıfırla
    emailInput.value = '';
});

// Equipment Carousel Data
const equipmentData = [
    {
        id: 1,
        name: 'Bench Press',
        image: 'https://cdn.shopify.com/s/files/1/1497/9682/files/2_a09de347-1652-4b84-96bf-fdc8bbc42481.jpg?v=1648825457',
        description: 'Bench press, göğüs kaslarınızı geliştirmek için en etkili egzersizlerden biridir. Doğru teknik ile yapıldığında üst vücut gücünüzü artırır.',
        link: 'bench-press-page.html'
    },
    {
        id: 2,
        name: 'Leg Press',
        image: 'https://static.wixstatic.com/media/00b9a7_782fcc0599064216a8dc977dafd13449~mv2.gif',
        description: 'Leg press, bacak kaslarınızı güçlendirmek için mükemmel bir alettir. Quadriceps, hamstring ve gluteal kasları hedefler.',
        link: 'leg-press-page.html'
    },
    {
        id: 3,
        name: 'Lat Pulldown',
        image: 'https://static.wixstatic.com/media/00b9a7_3c45162b8d1546459c3f0edc685d1772~mv2.gif',
        description: 'Lat pulldown, sırt kaslarınızı, özellikle latissimus dorsi kasını geliştirmek için ideal bir egzersizdir.',
        link: 'lat-pulldown-page.html'
    },
    {
        id: 4,
        name: 'Smith Machine',
        image: 'https://static.wixstatic.com/media/00b9a7_0569c161590146aa853c09903fbe165c~mv2.gif',
        description: 'Smith machine, güvenli bir şekilde ağırlık çalışmanızı sağlayan çok yönlü bir ekipmandır. Squat, bench press ve birçok egzersiz için kullanılabilir.',
        link: 'smith-machine-page.html'
    },
    {
        id: 5,
        name: 'Cable Machine',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-face-pull.gif',
        description: 'Cable crossover, göğüs kaslarınızı farklı açılardan çalıştırmanıza olanak tanıyan çok yönlü bir ekipmandır.',
        link: 'cable-crossover-page.html'
    },
    {
        id: 6,
        name: 'Bicep Curl Machine',
        image: 'https://i.pinimg.com/originals/b6/ea/17/b6ea17377640b9bb77068888388b5d0a.gif',
        description: 'Bicep curl machine, kollarınızın ön kısmındaki biceps kaslarını hedefleyen özel bir ekipmandır.',
        link: 'bicep-curl-page.html'
    }
];

// Items per page
const itemsPerPage = 3;
let currentPage = 0;

// Initialize Carousel
function initCarousel() {
    const carousel = document.getElementById('equipmentCarousel');
    const controls = document.getElementById('carouselControls');
    
    // Calculate total pages
    const totalPages = Math.ceil(equipmentData.length / itemsPerPage);
    
    // Create pagination dots
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.dataset.page = i;
        dot.addEventListener('click', () => {
            currentPage = parseInt(dot.dataset.page);
            updateCarousel();
        });
        controls.appendChild(dot);
    }
    
    // Initial render
    updateCarousel();
}

// Update Carousel Items
function updateCarousel() {
    const carousel = document.getElementById('equipmentCarousel');
    const controls = document.getElementById('carouselControls');
    const dots = controls.querySelectorAll('.carousel-dot');
    
    // Clear carousel
    carousel.innerHTML = '';
    
    // Update pagination dots
    dots.forEach((dot, index) => {
        if (parseInt(dot.dataset.page) === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Calculate start and end index
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, equipmentData.length);
    
    // Add items to carousel
    for (let i = startIndex; i < endIndex; i++) {
        const equipment = equipmentData[i];
        const card = document.createElement('div');
        card.className = 'equipment-card';
        card.innerHTML = `
            <div class="equipment-image">
                <img src="${equipment.image}" alt="${equipment.name}">
            </div>
            <div class="equipment-info">
                <h3>${equipment.name}</h3>
                <p>${equipment.description}</p>
                <a href="${equipment.link}" class="btn">İncele</a>
            </div>
        `;
        carousel.appendChild(card);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    
    // Auto slide every 5 seconds
    setInterval(() => {
        const totalPages = Math.ceil(equipmentData.length / itemsPerPage);
        currentPage = (currentPage + 1) % totalPages;
        updateCarousel();
    }, 5000);
});
// Canlı Destek Dinamik Cevaplar
function toggleLiveSupport() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const userMessage = document.getElementById('userMessage').value.trim();
    if (userMessage) quickReply(userMessage);
}

function quickReply(message) {
    const chatBody = document.getElementById('chatBody');
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user-message';
    userMsgDiv.innerText = message;
    chatBody.appendChild(userMsgDiv);

    setTimeout(() => {
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'message bot-message';
        
        if (message.includes('Alışverişte')) botMsgDiv.innerText = "Siparişinizde sorun mu var? Lütfen sipariş numaranızı paylaşın.";
        else if (message.includes('Spor aletleri')) botMsgDiv.innerText = "Spor aletleri hakkında detaylı bilgi almak için Aletler sayfamızı ziyaret edebilirsiniz.";
        else if (message.includes('garanti')) botMsgDiv.innerText = "Ürünlerimiz 2 yıl garantilidir. Detaylı bilgi için İletişim sayfamıza göz atabilirsiniz.";
        else if (message.includes('İletişim')) botMsgDiv.innerText = "İletişim bilgilerimiz: 0542 313 8502 - info@fitnesspower.com";
        else botMsgDiv.innerText = "Size en kısa sürede geri dönüş yapacağız. Anlayışınız için teşekkürler.";

        chatBody.appendChild(botMsgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    document.getElementById('userMessage').value = '';
}
