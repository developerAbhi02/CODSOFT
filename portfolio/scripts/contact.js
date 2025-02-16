// EmailJS configuration
(function() {
    emailjs.init("So5bDasktW2Zq130R"); // Add your public key from EmailJS Account > API Keys
})();

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Prepare template parameters
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_name: "Abhishek",
        to_email: "abhi_dev02@outlook.com"
    };

    // Send email using EmailJS
    emailjs.send('service_lk8k4zs', 'template_hb4uvs2', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showNotification('Failed to send message. Please try again.', 'error');
        })
        .finally(function() {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}); 