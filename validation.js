
function validate() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("emailID").value;

    if (fname === "") {
        alert("Please provide your first name!");
        document.getElementById("fname").focus();
        return false;
    }

    if (email === "") {
        alert("Please provide your email address!");
        document.getElementById("emailID").focus();
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please provide a valid email address!");
            document.getElementById("emailID").focus();
            return false;
        }
    }

    // Additional validation logic can be added here if needed.

    return true;
}
