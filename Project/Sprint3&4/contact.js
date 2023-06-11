$(function () {
    $('.textarea').autosize();                             //AUTOSIZE WIDGET
});

function validatePhoneNumber(input) {
    const phoneNumber = input.value;

    // Check if the phone number is numeric
    if (!(/^\d+$/.test(phoneNumber))) {
        document.getElementById("phoneError").textContent = "Phone number must contain only digits.";
        return;
    }

    // Check if the phone number has 10 digits
    if (phoneNumber.length !== 10) {
        document.getElementById("phoneError").textContent = "Phone number must have 10 digits.";
        return;
    }

    document.getElementById("phoneError").textContent = "";
}