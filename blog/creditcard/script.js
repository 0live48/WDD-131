document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');

    // Function to format the card number input
    cardNumberInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // Add a space after every 4 digits
        value = value.match(/.{1,4}/g)?.join(' ') || value;

        // Update the input value
        event.target.value = value;
    });

    // Simple form submission handler (for demonstration)
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Payment form submitted (Data validation passed in browser)!');
        // In a real application, you would send the data to a server here.
    });
});