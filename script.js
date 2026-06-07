// Countdown Timer

const eventDate =
new Date("August 15, 2026 09:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes`;

},1000);


// Registration Form Validation

document
.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const branch =
    document.getElementById("branch").value.trim();

    if(name === "" || email === "" || branch === ""){
        alert("Please fill all fields!");
        return;
    }

    alert("Registration Successful!");

    document.getElementById("registrationForm").reset();

});


// Dark Mode

document
.getElementById("darkBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});