
let cart = []; // tableau panier

// Sélection de tous les boutons "Ajouter au panier"
const buttons = document.querySelectorAll('.menu button');

// Ajouter un produit au panier
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const title = item.querySelector('h5').innerText;
        const price = 10; // remplacer par le prix réel si disponible
        const img = item.querySelector('img').src; // récupérer l'image
        cart.push({title, price, img});
        updateCart();
    });
});

// Mettre à jour l'affichage du panier
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement('li');

        // Image
        const img = document.createElement('img');
        img.src = item.img;
        li.appendChild(img);

        // Info titre + prix
        const info = document.createElement('div');
        info.className = 'item-info';
        info.innerHTML = `<strong>${item.title}</strong><span>${item.price} DT</span>`;
        li.appendChild(info);

        // Bouton supprimer
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Supprimer';
        removeBtn.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        li.appendChild(removeBtn);

        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}

// Afficher / masquer le mini-panier
const cartLink = document.getElementById('cart-link');
const miniCart = document.getElementById('mini-cart');
const closeCart = document.getElementById('close-cart');

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    miniCart.style.display = 'block';
});

closeCart.addEventListener('click', () => {
    miniCart.style.display = 'none';
});

