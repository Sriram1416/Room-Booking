// script.js

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const room = document.getElementById('room').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (!name || !email || !room || !checkin || !checkout) {
        alert('Please fill in all fields!');
        return;
    }

    alert(`Booking confirmed for ${name} in a ${room} room from ${checkin} to ${checkout}.`);

    // Optionally, reset the form after submission
    document.getElementById('booking-form').reset();
});
