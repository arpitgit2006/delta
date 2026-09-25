document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    if(name == ""){
        alert("Enter Student Name");
        return;
    }
    if(email == ""){
        alert("Enter Email");
        return;
    }
    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }
    if(!/^[0-9]{10}$/.test(mobile)){
        alert("Enter valid 10 digit mobile number");
        return;
    }
    if(age < 17 || age > 60){
        alert("Enter valid age");
        return;
    }
    if(address == ""){
        alert("Enter Address");
        return;
    }
    alert("Form Submitted Successfully!");
});