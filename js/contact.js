// Contact Form Handler - Saves to Google Sheets

// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwuRdUnl0at5SZqab8dHSxLFXsRepYg4GSM6THTrShjfiWYZtGQytcry2Olw18aJxBu/exec';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formStatus = document.getElementById('formStatus');
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Get form data
    const formData = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        message: this.message.value.trim(),
        timestamp: new Date().toLocaleString()
    };
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    formStatus.style.display = 'none';
    
    try {
        // Send data to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script requires this
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Show success message
        formStatus.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        formStatus.style.color = '#00ff00';
        formStatus.style.display = 'block';
        
        // Reset form
        this.reset();
        
    } catch (error) {
        // Show error message
        formStatus.textContent = '✗ Error sending message. Please try again.';
        formStatus.style.color = '#ff0000';
        formStatus.style.display = 'block';
        console.error('Error:', error);
    } finally {
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Hide status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});
