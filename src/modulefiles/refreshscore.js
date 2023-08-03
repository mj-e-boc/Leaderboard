import MY_API from './api.js';

const refreshScores = async () => {
  const SCORES_LIST = document.querySelector('.scores-list');
  const response = await fetch(MY_API);
  const data = await response.json();
  const scores = data.result;
  scores.sort((a, b) => b.score - a.score);
  SCORES_LIST.innerHTML = '';
  scores.forEach((n) => {
    SCORES_LIST.innerHTML += `
        <li class='display-name-score'>
        <p class='show-name'>${n.user}: </p>
        <p class='show-score'>${n.score}</p>
        </li>
    `;
  });
};

export default refreshScores;
