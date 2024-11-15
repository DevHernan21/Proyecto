// Obtener el formulario de login
const loginForm = document.getElementById('login-form');

// Agregar evento de envío del formulario
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar las credenciales (este es un ejemplo simple, en la práctica usarías una base de datos)
  if (username === 'admin' && password === 'password') {
    // Redirigir al usuario a la pantalla principal
    window.location.href = 'main.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});