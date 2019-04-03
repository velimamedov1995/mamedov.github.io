let letterA = document.getElementById('button-A');
let letterS = document.getElementById('button-S');
let letterD = document.getElementById('button-D');
let letterF = document.getElementById('button-F');
let letterG = document.getElementById('button-G');
let letterH = document.getElementById('button-H');
let letterJ = document.getElementById('button-J');
let letterK = document.getElementById('button-K');

function klikerA() {
    document.getElementById('play_a').play();
};

function klikerS() {
    document.getElementById('play_s').play();
};

function klikerD() {
    document.getElementById('play_d').play();

};

function klikerF() {
    document.getElementById('play_f').play();

};

function klikerG() {
    document.getElementById('play_g').play();

};

function klikerH() {
    document.getElementById('play_h').play();

};

function klikerJ() {
    document.getElementById('play_j').play();

};

function klikerK() {
    document.getElementById('play_k').play();

};

letterA.addEventListener('click', klikerA); 
letterS.addEventListener('click', klikerS); 
letterD.addEventListener('click', klikerD);  
letterF.addEventListener('click', klikerF); 
letterG.addEventListener('click', klikerG); 
letterH.addEventListener('click', klikerH); 
letterJ.addEventListener('click', klikerJ); 
letterK.addEventListener('click', klikerK); 

//не працює 
/*
document.addEventListener('keydown', function (event){
if (event.keyCode === 65) {
    document.getElementById('play_a').play()};
else (event.keyCode === 83) {
     document.getElementById('play_s').play()};
});

*/

