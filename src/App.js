import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main text-center ISENG">
      <div className="judul">SIMPLE COUNTDOWN</div>
      <div className="info" id="info"></div>
      <div className="up" id="up">
      <svg width="50px" height="50px" viewBox="0 0 16 16" class="btn-jam text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
<svg width="50px" height="50px" viewBox="0 0 16 16" class="btn-menit text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
<svg width="50px" height="50px" viewBox="0 0 16 16" class="btn-detik text-left bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
      </div>
    </div>
  );
}

export default App;
