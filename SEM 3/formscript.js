document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let valid = true;
    
    function showError(inputId, errorId, condition) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        if (condition) {
            error.classList.remove("hidden");
            input.classList.add("border-red-500");
            valid = false;
        } else {
            error.classList.add("hidden");
            input.classList.remove("border-red-500");
        }
    }
    
    showError("fname", "error-fname", /\d/.test(document.getElementById("fname").value));
    showError("lname", "error-lname", /\d/.test(document.getElementById("lname").value));
    showError("username", "error-username", document.getElementById("username").value.trim() === "");
    showError("email", "error-email", !document.getElementById("email").value.includes("@"));
    showError("password", "error-password", document.getElementById("password").value.length < 6);
    showError("confirm-password", "error-confirm-password", document.getElementById("password").value !== document.getElementById("confirm-password").value);
    
    if (valid) {
        alert("Form submitted successfully!")
        event.target.submit();
    }
});