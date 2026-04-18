document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".text", {
        strings: ["GenAI Engineer", "LLM Application Developer", "Full Stack Developer", "AI System Builder"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Message sent successfully!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Message sent successfully!');
        });
    });
});

