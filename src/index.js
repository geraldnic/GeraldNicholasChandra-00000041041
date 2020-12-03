import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var jam = 0;
var menit = 0;
var detik = 0;

function plusJam(){
  jam += 1;
  jamcek();
  document.getElementById("jam").innerHTML = jam;
  }

function plusMenit(){
  menit += 1;
  menitcek();
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("jam").innerHTML = jam;
}

function plusDetik(){
  detik += 1;
  detikcek();
  document.getElementById("detik").innerHTML = detik;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("jam").innerHTML = jam;
}

function detikcek(){
  if(detik<0){
    detik = 0;
  }
  if(detik>59){
    detik = 0;
    menit += 1;
  }
  if(menit>59){
    menit = 0;
    jam += 1;
  }
}

function menitcek(){
  if(menit<0){
    menit = 0;
  }
  if(menit>59){
    menit = 0;
    jam += 1;
  }
}

function jamcek(){
  if(jam<0){
    jam = 0;
  }
}

function minusDetik(){
  detik -= 1;
  detikcek();
  document.getElementById("detik").innerHTML = detik;
}

function minusMenit(){
  menit -= 1;
  menitcek();
  document.getElementById("menit").innerHTML = menit;
}

function minusJam(){
  jam -= 1;
  jamcek();
  document.getElementById("jam").innerHTML = jam;
}

function reset(){
  document.getElementById("jam").innerHTML = 0;
  document.getElementById("menit").innerHTML = 0;
  document.getElementById("detik").innerHTML = 0;
}

const Test = () => {
  return (

    <div className="main text-center">
      <div className="judul">SIMPLE COUNTDOWN</div>
      <div className="info" id="info"></div>
      <div className="up" id="up">
      <svg onClick={plusJam} width="50px" height="50px" viewBox="0 0 16 16" class="up-jam text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
<svg onClick={plusMenit} width="50px" height="50px" viewBox="0 0 16 16" class="up-menit text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
<svg onClick={plusDetik} width="50px" height="50px" viewBox="0 0 16 16" class="up-detik text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
      </div>
      <div class="waktu">
        <div class="jam" id="jam">0</div>
        <div class="menit" id="menit">0</div>
        <div class="detik" id="detik">0</div>
      </div>
      <div class="down">
      <svg onClick={minusJam} width="50px" height="50px" viewBox="0 0 16 16" class="down-jam bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
      <svg onClick={minusMenit} width="50px" height="50px" viewBox="0 0 16 16" class="down-menit bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
      <svg onClick={minusDetik} width="50px" height="50px" viewBox="0 0 16 16" class="down-detik bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
      </div>
      <button class="btn btn-success" id="start">START</button>
      <button class="btn btn-warning" id="reset" onClick={reset}>RESET</button>
    </div>
  );
}


ReactDOM.render(
  <Test></Test>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
