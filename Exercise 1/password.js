function validate() {
    if (document.getElementById("password1").value.length < 8) {
        
        alert("Your password is too short!");
    }
    else if (!(document.getElementById("password1").value == document.getElementById("password2").value)) {
        
        alert("Your passwords are not the same!");
    }    
}