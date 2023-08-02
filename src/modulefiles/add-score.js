// Import the API URL from 'api.js'
import MY_API from './api.js';

// Define the 'addScore' function
const addScore = async (name, score) => {
  try {
    const response = await fetch(MY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ user: name, score }),
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    // Removed the console.error statement to avoid console output
    return null; // Return null to indicate an error
  }
};

// Export the 'addScore' function as the default export of the module
export default addScore;
