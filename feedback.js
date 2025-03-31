document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        preview();
    }
});

function updateRating(value) {
    document.getElementById('ratingValue').textContent = value;
}

function previewForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var rating = document.querySelector('input[name="satisfaction"]:checked').value;
    var navigate = document.querySelector('input[name="informative"]:checked').value;
    var improvements = document.getElementById('improvement').value;
    var updates = document.getElementById('updates').value;
    var comments = document.getElementById('additional-requests').value;

    document.getElementById('name-input').textContent = name;
    document.getElementById('email-input').textContent = email;
    document.getElementById('rating-input').textContent = rating;
    document.getElementById('navigate-input').textContent = navigate;
    document.getElementById('improvements-input').textContent = improvements;
    document.getElementById('updates-input').textContent = updates;
    document.getElementById('comments-input').textContent = comments;

    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('preview').classList.remove('hidden');
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="satisfaction"]:checked');
    const navigate = document.querySelector('input[name="informative"]:checked');
    const updates = document.getElementById('updates').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!name) {
        alert('Name is required');
        isValid = false;
    }
    if (!email || !emailPattern.test(email)) {
        alert('A valid email is required');
        isValid = false;
    }
    if (!rating) {
        alert('Rating is required');
        isValid = false;
    }
    if (!navigate) {
        alert('Navigation ease is required');
        isValid = false;
    }
    if (!updates) {
        alert('Update preference is required');
        isValid = false;
    }
    return isValid;
}

function editFeedback() {
    document.getElementById('preview').classList.add('hidden');
    document.getElementById('feedbackForm').classList.remove('hidden');
}

function submitFeedback() {
    document.getElementById('preview').classList.add('hidden');
    document.getElementById('submitmessage').classList.remove('hidden');
}

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var rating = document.querySelector('input[name="satisfaction"]:checked').value;
    var navigate = document.querySelector('input[name="informative"]:checked').value;
    var improvements = document.getElementById('improvement').value;
    var updates = document.getElementById('updates').value;
    var comments = document.getElementById('additional-requests').value;

    var subject = "Feedback Form Submission";
    var body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ARating: ${rating}%0D%0ANavigation: ${navigate}%0D%0AImprovements: ${improvements}%0D%0AUpdates: ${updates}%0D%0AComments: ${comments}`;

    var gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dinaya.20231211@iit.ac.lk&su=${encodeURIComponent(subject)}&body=${body}`;

    window.open(gmailLink, '_blank');
}
