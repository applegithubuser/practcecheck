// Get elements

// Product description section elements
const productDescriptionSection = document.getElementById("product-description");
const productImage = document.getElementById("product-image");
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const productDescriptionText = document.getElementById("product-description-text");
const purchaseButton = document.getElementById("purchase-button");

// Cart section elements
const selectedQuantityElement = document.getElementById("selected-quantity");
const totalPriceElement = document.getElementById("total-price");


// Variables of the cart
let selectedProductQuantity = 0;
let totalPrice = 0.0;
let currentProductPrice = 0.0;

// Hide product description 
productDescriptionSection.style.display = "none";


// Add event listeners to all "Buy Now" buttons
const buyNowButtons = document.querySelectorAll(".buy-now");

buyNowButtons.forEach(button => {
    button.addEventListener("click", function() {
        

        // Get parent product card
        const productCard = this.closest(".product-card");


        // Get product details
        const imageSrc = productCard.querySelector("img").src;
        const title = productCard.querySelector(".product-title").textContent;
        const priceText = productCard.querySelector(".product-price").textContent;
        const price = parseFloat(priceText.replace(/[^0-9\.]+/g, ''));
        const description = productCard.getAttribute("data-description");


        // Update product description section with selected product details
        productImage.src = imageSrc;
        productTitle.textContent = title;
        productPrice.textContent = `$${price.toFixed(2)}`;
        productDescriptionText.textContent = description;

        
        // Update current product price calculations
        currentProductPrice = price;

        // Show product description section
        productDescriptionSection.style.display = "block";

        // Scroll to product description section
        productDescriptionSection.scrollIntoView({ behavior: 'smooth' });

    });
});

// Event listener for "Purchase It" button
purchaseButton.addEventListener("click", function() {
    
    // Increase selected product quantity
    selectedProductQuantity++;

    // Update total price
    totalPrice += currentProductPrice;

    // Update the cart section with new values
    selectedQuantityElement.textContent = selectedProductQuantity;
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Scroll to the cart
    selectedQuantityElement.scrollIntoView({behavior: 'smooth'})

});



//Show popup for checkout button 

document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-button');
    const modal = document.getElementById('modal');
    const modalCloseButton = document.getElementById('modal-close-button');


    // Show modal when checkout button is clicked
    checkoutButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });


    // Hide modal when the close button is clicked
    modalCloseButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});