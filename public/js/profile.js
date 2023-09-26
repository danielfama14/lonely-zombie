document.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await fetch('/api/users/profile');
      const userData = await response.json();

      if (response.ok) {
          // Display the username
          const nameElement = document.querySelector('.col-md-6 h2');
          nameElement.textContent = `Welcome, ${userData.name}!`;

          // Display the highest scores
          const highScoresList = document.querySelector('.col-md-6 ul');
          highScoresList.innerHTML = '';

          userData.highScores.forEach((score) => {
              const scoreItem = document.createElement('li');
              scoreItem.textContent = `Score: ${score.score}`;
              highScoresList.appendChild(scoreItem);
          });
      } else {
          console.error('Error:', userData.message);
      }
  } catch (error) {
      console.error('An error occurred:', error);
  }
});