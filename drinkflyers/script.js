// script.js

const productCards = document.querySelectorAll('.product-card img');

productCards.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    img.parentElement.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    img.parentElement.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});



const productCardsX = document.querySelectorAll('.product-cardx img');

productCardsX.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    img.parentElement.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    img.parentElement.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});








// Existing toggleMenu function should remain:
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// SLIDER LOGIC START
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code for toggleMenu() ...

    const sliderContent = document.querySelector('.slider-content');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');

    if (!sliderContent || cards.length === 0) return; // Exit if elements not found

    const cardWidth = cards[0].offsetWidth + 20; // Card width + margin (10px on each side)
    const cardsPerView = 3; // Number of cards visible at once on desktop

    nextButton.addEventListener('click', () => {
        // Calculate the scroll distance (e.g., one card width)
        const scrollAmount = cardWidth; 
        
        // Scroll the container
        sliderContent.scrollLeft += scrollAmount;

        // Optional: Loop back to the start if near the end (requires more complex logic for perfect loop)
        // For simplicity, we'll let it stop at the end.
    });

    prevButton.addEventListener('click', () => {
        // Calculate the scroll distance (e.g., one card width)
        const scrollAmount = cardWidth; 
        
        // Scroll the container
        sliderContent.scrollLeft -= scrollAmount;
    });

    // For better functionality, you might want to scroll by the whole view width
    // nextButton.addEventListener('click', () => {
    //     const scrollAmount = sliderContent.clientWidth;
    //     sliderContent.scrollLeft += scrollAmount;
    // });
    
    // prevButton.addEventListener('click', () => {
    //     const scrollAmount = sliderContent.clientWidth;
    //     sliderContent.scrollLeft -= scrollAmount;
    // });
    
});
// SLIDER LOGIC END



document.addEventListener('DOMContentLoaded', () => {
    // Select all the question elements
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Get the parent .faq-item of the clicked question
            const faqItem = question.closest('.faq-item');
            
            // Toggle the 'active' class on the parent item
            faqItem.classList.toggle('active');
        });
    });
});


function signInClick(event) {
    event.preventDefault(); // Prevent form submission
    alert("Sign In button clicked!");
}



function signUpClick(event) {
    event.preventDefault(); // Prevent form submission
    alert("Registered successfully!");
}


function cart() {
   window.location.href = "cart.html";
}


function payment(){
    alert("Payment successful!");
}

function increaseQty(btn){
    const span = btn.previousElementSibling;
    span.textContent = parseInt(span.textContent) + 1;
    updateTotal();
}

function decreaseQty(btn){
    const span = btn.nextElementSibling;
    if(parseInt(span.textContent) > 1){
        span.textContent = parseInt(span.textContent) - 1;
        updateTotal();
    }
}

function removeItem(btn){
    const item = btn.closest('.cart-item');
    item.remove();
    updateTotal();
}

function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('$',''));
        const qty = parseInt(item.querySelector('.quantity-box span').textContent);
        total += price * qty;
    });
    document.getElementById('subtotal').textContent = '$' + total.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}
