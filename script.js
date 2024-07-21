function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      
      alert(`Logged in as ${email}`);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-container input');
  
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.backgroundColor = '#f0f0f0';
      });
      input.addEventListener('blur', () => {
        input.style.backgroundColor = '#fff';
      });
    });
  });
  