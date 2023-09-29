// Import User.js model
import { User } from '../../models'; // Adjust the path as needed

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/highscores/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete profile');
    }
  }
};

document
  .querySelector('.highestScores-list')
  .addEventListener('click', delButtonHandler);

// Use User model to fetch highest scores
const fetchHighestScores = async () => {
  try {
    const response = await fetch('/api/users/highest-scores'); // Adjust the API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch highest scores');
    }

    const data = await response.json();
    const highestScores = data.highestScores;

    // Render the highestScores in the profile.handlebars template
    const highestScoresContainer = document.querySelector('.highestScores-list');
    if (highestScores.length > 0) {
      highestScoresContainer.innerHTML = ''; // Clear existing content

      highestScores.forEach((score) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'row mb-2';
        scoreItem.innerHTML = `
          <div class="col-md-8">
            <h4><a href="/users/${score.id}">${score.name}</a></h4>
          </div>
          <div class="col-md-4">
            <button class="btn btn-sm btn-danger" data-id="${score.id}">DELETE</button>
          </div>
        `;
        highestScoresContainer.appendChild(scoreItem);
      });
    } else {
      // Display a message if there are no highest scores
      highestScoresContainer.innerHTML = '<p>No highest scores available.</p>';
    }
  } catch (error) {
    console.error(error);
    alert('Failed to fetch highest scores');
  }
};

// Call the fetchHighestScores function to load highest scores on page load
fetchHighestScores();