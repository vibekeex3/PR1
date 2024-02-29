
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            var nameInput = document.querySelector("input[name='name']");
            var emailInput = document.querySelector("input[name='email']");
            var phoneInput = document.querySelector("input[name='phone']");

            // Check if name is "ironhack"
            if (nameInput.value.trim().toLowerCase() === "ironhack") {
                alert("You cannot be Ironhack, because I am Ironhack.");
                return; // Exit the function
            }

            // Check if email is invalid
            if (emailInput.value.trim() !== "" && !isValidEmail(emailInput.value.trim())) {
                alert("Invalid email address.");
                return; // Exit the function
            }

            // Check if phone number is invalid (just a simple check for now)
            if (phoneInput.value.trim() !== "" && !isValidPhoneNumber(phoneInput.value.trim())) { //retrieves the value of the phone number input field, removes leading and trailing whitespace using the trim() method, and checks if it's not an empty string.
                alert("Invalid phone number.");
                return; // Exit the function
            }

            // If all checks pass, you can proceed with form submission
            alert("Form submitted successfully!");
            form.submit(); // Submit the form
        });

        // Function to validate email address
        function isValidEmail(email) {
            // This is a simple regex for email validation
            var emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(email);
        }

        // Function to validate phone number
        function isValidPhoneNumber(phone) {
            // This is a simple regex for phone number validation
            var phoneRegex = /^\d{9}$/; // ^: asserts the start of the string. \d: Matches any digit (0-9).{9}: Specifies that exactly 9 digits are required. $: Asserts the end of the string.
            return phoneRegex.test(phone);
        }
    });
