function startTask() {
    const message = document.getElementById("message");

    // Show Processing...
    message.textContent = "Processing...";

    // After 2 seconds, show Task complete!
    setTimeout(function() {
        message.textContent = "Task complete!";
    }, 2000);
}