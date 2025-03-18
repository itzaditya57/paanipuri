document.getElementById("showAlert").addEventListener("click", () => {
    alert("Button clicked!");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We received your message.`);
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
