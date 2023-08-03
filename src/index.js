import './index.css';
import addScore from './modulefiles/add-score.js';
import refreshScores from './modulefiles/refreshscore.js';

const REFRESH = document.getElementById('scores-refresh');
const ADDSCORE = document.getElementById('add-score');

document.addEventListener('DOMContentLoaded', () => {
  refreshScores();
});

REFRESH.addEventListener('click', () => {
  refreshScores();
});

ADDSCORE.addEventListener('click', (e) => {
  e.preventDefault();
  const USERNAME = document.getElementById('name').value;
  const USERSCORE = document.getElementById('score').value;
  addScore(USERNAME, USERSCORE);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});
