document.getElementById("myForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); // Prevent page reload
    
    let name = document.getElementById("name").value;
    
    document.getElementById("message").innerText = 
        "Submitted Successfully, " + name + "!";
    
    // Optional: Clear form
    document.getElementById("myForm").reset();
});