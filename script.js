// Game states
let GRAVITY = 5;
let BIRD_POS = 0;
let JUMP = 50;
let SCORE = 0;

// Game elements
let bird = document.querySelector('.bird');
let pipes = [...document.querySelectorAll('.pipe')];
let score = document.querySelector('.score span');

function play() {}

function collided(source, target) {}

function gameOver() {}

window.onload = play;
