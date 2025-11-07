function titre(x) {
  console.log(" Learn JavaScript with " + x);
}

titre("hafssa");





    // Add to Cart Button (simple alert)
    document.getElementById('addToCartBtn').onclick = function() {
      alert('Ajouté au panier !');
    };

    // Order Form Validation
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
      orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Get fields
        const name = orderForm.fullName.value.trim();
        const phone = orderForm.phone.value.trim();
        const address = orderForm.address.value.trim();
        const comment = orderForm.comment.value.trim();

        // Error elements
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
        const addressError = document.getElementById('addressError');
        const commentError = document.getElementById('commentError');
        const orderMessage = document.getElementById('orderMessage');

        // Reset errors
        nameError.textContent = '';
        phoneError.textContent = '';
        addressError.textContent = '';
        commentError.textContent = '';
        orderMessage.textContent = '';

        // Validate
        if (!name) {
          nameError.textContent = 'Nom requis.';
          valid = false;
        }
        if (!phone) {
          phoneError.textContent = 'Téléphone requis.';
          valid = false;
        }
        if (!address) {
          addressError.textContent = 'Adresse requise.';
          valid = false;
        }
        if (!comment) {
          commentError.textContent = 'Commentaire requis.';
          valid = false;
        }

        if (valid) {
          orderMessage.style.color = '#d4af37';
          orderMessage.textContent = 'Merci ! Votre commande a bien été envoyée ✅';
          orderForm.reset();
        }
      });
    }
 