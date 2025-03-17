document.addEventListener('DOMContentLoaded', () => {
  // Form submission handling
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
      return;
    }

    // Simulate form submission (for demo purposes)
    alert(`Thank you, ${name}! We will get back to you shortly.`);
    
    // Reset form
    contactForm.reset();
  });
});

const footer = document.getElementById('site-footer');
footer.addEventListener('mouseover', () => {
  console.log('Thanks for visiting The Fieldstead!');
});

footer.addEventListener('mouseout', () => {
  console.log('Hope to see you again soon!');
});
