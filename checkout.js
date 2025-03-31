
var form = document.getElementById('checkoutForm');
const place = document.querySelector(".submit-btn");
const cancel = document.querySelector(".cancel-btn");

place.addEventListener('click', () => {    
    if (validateForm()) {
        displayConfirmationMessage();
        setTimeout(() => {
            window.location.href = "shop.html";
        }, 1000); 
    }else{
        alert("Enter valid data!")
    }
});

cancel.addEventListener('click', () => {
    alert("Redirecting to shop...")
    setTimeout(() => {
        window.location.href = "shop.html";
    }, 1000); 
});


function validateForm() {
    var isValid = true;
    var requiredFields = document.querySelectorAll('.inputBox input[required]');
    
    requiredFields.forEach(function(field) {
        if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

function redirectToHomepage() {
    window.location.href = 'shop.html'; 
}

function displayConfirmationMessage(){
    alert("Order has been placed!")
}