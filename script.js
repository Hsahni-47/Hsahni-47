document.getElementById('learn-more').addEventListener('click', function () {
    alert('Welcome to my portfolio! Scroll down to the contact section.');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
