        // Product Data
        const products = [
            {
                id: 1,
                name: 'MuscleCloth Pro Fitness Ağırlık Eldiveni',
                price: 685.90,
                image: 'https://supplementler.mncdn.com/Assets/Supplementler/Thumbs/musclecloth_pro_fitness_arlk_eldiveni_siyah_79944.jpeg',
                description: 'Antrenman sırasında ellerinizi koruyacak ve daha iyi kavrama sağlayacak premium kalite fitness eldiveni.'
            },
            {
                id: 2,
                name: 'HardLine Protein Tozu - Çikolata (1kg)',
                price: 949.90,
                image: 'https://www.hardlinenutrition.com/image/cache/catalog/proteinler/vmax-protein/hardline-vmax-bitkisel-protein-tozu-908gr-cikolata-500x500.png',
                description: 'Kas gelişimini desteklemek için yüksek kaliteli Hard Line protein tozu. Her serviste 24g protein içerir.'
            },
            {
                id: 3,
                name: 'Black Deer Pilates Yoga Kamp Matı Egzersiz Minderi Kaymaz Taban 180x55 cm 8mm',
                price: 299.90,
                image: 'https://m.media-amazon.com/images/I/41XFOG+b-YL._AC_SX679_.jpg',
                description: 'Kaymaz yüzeyi ve ekstra kalınlığı ile yoga, pilates ve her türlü zemin egzersizi için ideal mat.'
            },
            {
                id: 4,
                name: 'USR Ayarlanabilir Dambıl Seti',
                price: 7358.90,
                image: 'https://m.media-amazon.com/images/I/51Lgu51BsSL.__AC_SX300_SY300_QL70_ML2_.jpg',
                description: '2.5kg-25kg arası ayarlanabilir ağırlıklı kompakt dambıl seti. Ev kullanımı için mükemmel çözüm.'
            },
            {
                id: 5,
                name: 'Samsung Galaxy Fit3 Akıllı Saat',
                price: 2899.90,
                image: 'https://productimages.hepsiburada.net/s/559/424-600/110000621990891.jpg/format:webp',
                description: 'Adım sayınızı, kalp atış hızınızı, uyku kalitenizi ve daha fazlasını takip edebileceğiniz akıllı bileklik.'
            },
            {
                id: 6,
                name: 'Hardline BCAA Matrix 40S 600 Gr',
                price: 949.90,
                image: 'https://supplementler.mncdn.com/Assets/Supplementler/Thumbs/hardline_bcaa_matrix_40s_600_gr_84433.jpeg',
                description: 'Antrenman performansını artıran ve kas yorgunluğunu azaltan amino asit takviyesi.'
            },
            {
                id: 7,
                name: 'Slipt Unisex Tırtıklı Foam Roller CKS-44 (Mavi)',
                price: 349.90,
                image: 'https://m.media-amazon.com/images/I/31jfuZJKFjL.__AC_SY445_SX342_QL70_ML2_.jpg',
                description: 'Kas ağrılarını azaltmak ve esnekliği artırmak için özel tasarım masaj silindiri.'
            },
            {
                id: 8,
                name: 'Red Bull 250 ml 24 lü Paket Enerji Içeceği',
                price: 1800.90,
                image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQCES-tMfyy8hPS4qGe92HRFWneHPVeEphMCfXQYe0aQElb8NevsJHKPtqROJroH8M895L4e84MctVMS1cH1YxOhyk4FOwLAKmfEZxURAf-b0EmqjDU6TzB1g&usqp=CAE',
                description: 'Antrenman sırasında kaybedilen elektrolitleri yerine koyan ve enerji sağlayan sporcu içeceği.'
            },
            {
                id: 9,
                name: 'Professional Weight Lifting Belt - Profesyonel Ağırlık Kaldırma Kemeri Fitness Kemerii',
                price: 499.90,
                image: 'https://m.media-amazon.com/images/I/71bs+kkWZTL._AC_SX300_SY300_.jpg',
                description: 'Ağır kaldırma egzersizleri sırasında bel desteği sağlayan profesyonel ağırlık kemeri.'
            },
            {
                id: 10,
                name: 'Dynamic 1DYAKGYMBALL Pilates Topu, Unisex, Pembe, 65 cm',
                price: 199.90,
                image: 'https://m.media-amazon.com/images/I/61IRZ0V2eEL.__AC_SX300_SY300_QL70_ML2_.jpg',
                description: 'Core kaslarını güçlendirmek ve denge geliştirmek için ideal, patlama önleyici fitness topu.'
            },
            {
                id: 11,
                name: 'DOMYOS Koşu Bandı - Katlanır - %10 Motorlu Eğim - RUN500',
                price: 36999.90,
                image: 'https://contents.mediadecathlon.com/p2544966/k$094c2f605cc932357646d771743046ef/sq/kosu-bandi-katlanir-10-motorlu-egim-run500.jpg?format=auto&f=720x720',
                description: 'Ev kullanımı için kompakt, katlanabilir koşu bandı. 12 farklı program ve kalp atış hızı ölçümü.'
            },
            {
                id: 12,
                name: 'Nike BA5567-010 Y Nk Gym Club Çanta',
                price: 799.90,
                image: 'https://productimages.hepsiburada.net/s/18/424-600/9794708471858.jpg/format:webp',
                description: 'Dayanıklı malzemeden üretilmiş, birden fazla bölmesi olan geniş kapasiteli spor çantası.'
            }
        ];

        // Initialize cart
        let cart = [];

        // DOM Ready
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize product grid
            initProducts();
            
            // Initialize cart functionality
            initCart();
            
            // Initialize search functionality
            initSearch();
        });

        // Initialize Products
        function initProducts() {
            const productsGrid = document.getElementById('productsGrid');
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                // Create quantity options
                let quantityOptions = '';
                for (let i = 1; i <= 10; i++) {
                    quantityOptions += `<option value="${i}">${i}</option>`;
                }
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-price">${product.price.toLocaleString('tr-TR')} TL</div>
                        <div class="quantity-selector">
                            <span>Adet:</span>
                            <select class="product-quantity">
                                ${quantityOptions}
                            </select>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">Sepete Ekle</button>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }

        // Add to Cart
        function addToCart(event) {
            const productId = parseInt(event.target.dataset.id);
            const productCard = event.target.closest('.product-card');
            const quantitySelect = productCard.querySelector('.product-quantity');
            const quantity = parseInt(quantitySelect.value);
            
            // Find the product
            const product = products.find(p => p.id === productId);
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                // Update quantity
                existingItem.quantity += quantity;
            } else {
                // Add new item
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }
            
            // Update cart UI
            updateCart();
            
            // Show notification
            showNotification(`${product.name} sepete eklendi!`);
        }

        // Update Cart
        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            const cartCount = document.getElementById('cartCount');
            const cartTotal = document.getElementById('cartTotal');
            
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Clear cart items
            cartItems.innerHTML = '';
            
            // Add items to cart panel
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="cart-empty">Sepetiniz boş</div>';
            } else {
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price.toLocaleString('tr-TR')} TL</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <div class="remove-item" data-id="${item.id}">✕</div>
                    `;
                    cartItems.appendChild(cartItem);
                });
                
                // Add event listeners for quantity buttons
                document.querySelectorAll('.decrease-btn').forEach(btn => {
                    btn.addEventListener('click', decreaseQuantity);
                });
                
                document.querySelectorAll('.increase-btn').forEach(btn => {
                    btn.addEventListener('click', increaseQuantity);
                });
                
                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', removeFromCart);
                });
            }
            
            // Update total
            const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            cartTotal.textContent = `Toplam: ${total.toLocaleString('tr-TR')} TL`;
        }

        // Decrease Quantity
        function decreaseQuantity(event) {
            const productId = parseInt(event.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // Remove item if quantity becomes 0
                cart = cart.filter(item => item.id !== productId);
            }
            
            updateCart();
        }

        // Increase Quantity
        function increaseQuantity(event) {
            const productId = parseInt(event.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            
            item.quantity++;
            updateCart();
        }

        // Remove from Cart
        function removeFromCart(event) {
            const productId = parseInt(event.target.dataset.id);
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Initialize Cart Functionality
        function initCart() {
            const cartBubble = document.getElementById('cartBubble');
            const cartPanel = document.getElementById('cartPanel');
            const closeCart = document.getElementById('closeCart');
            const overlay = document.getElementById('overlay');
            
            // Open cart panel
            cartBubble.addEventListener('click', () => {
                cartPanel.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close cart panel
            closeCart.addEventListener('click', closeCartPanel);
            overlay.addEventListener('click', closeCartPanel);
            
            function closeCartPanel() {
                cartPanel.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Initialize Search Functionality
        function initSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');
            
            searchInput.addEventListener('keyup', function() {
                const searchTerm = searchInput.value.toLowerCase();
                
                if (searchTerm.length < 2) {
                    searchResults.innerHTML = '';
                    return;
                }
                
                const filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                
                // Display results
                searchResults.innerHTML = '';
                
                if (filteredProducts.length === 0) {
                    searchResults.innerHTML = '<p>Sonuç bulunamadı</p>';
                } else {
                    filteredProducts.forEach(product => {
                        const result = document.createElement('div');
                        result.className = 'search-result';
                        result.innerHTML = `
                            <p>${product.name} - ${product.price.toLocaleString('tr-TR')} TL</p>
                        `;
                        result.addEventListener('click', () => {
                            // Scroll to the product
                            const productElement = document.querySelector(`.add-to-cart[data-id="${product.id}"]`).closest('.product-card');
                            productElement.scrollIntoView({ behavior: 'smooth' });
                            
                            // Highlight the product
                            productElement.style.boxShadow = '0 0 0 3px #ff4500';
                            setTimeout(() => {
                                productElement.style.boxShadow = '';
                            }, 2000);
                            
                            // Close search
                            document.getElementById('searchContainer').classList.remove('active');
                        });
                        searchResults.appendChild(result);
                    });
                }
            });
        }

        // Toggle search functionality
        function toggleSearch() {
            const searchContainer = document.getElementById('searchContainer');
            searchContainer.classList.toggle('active');
            
            if (searchContainer.classList.contains('active')) {
                document.getElementById('searchInput').focus();
            }
        }

        // Show Notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.style.display = 'block';
            }, 100);
            
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
                // Remove from DOM after animation
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 3000);
        }
        
