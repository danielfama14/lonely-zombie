// toggleLogin.js

function toggleLogin() {
    const gameCanvas = document.getElementById('game');
    const loginForm = document.querySelector('.row');
  
    // Toggle the visibility of the game canvas and login form
    if (gameCanvas.style.display === 'none' || gameCanvas.style.display === '') {
      gameCanvas.style.display = 'block';
      loginForm.style.display = 'none';
    } else {
      gameCanvas.style.display = 'none';
      loginForm.style.display = 'block';
    }
  }
  