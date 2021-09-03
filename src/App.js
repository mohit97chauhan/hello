import logo from './logo.svg';
import './App.css';
import './Stylesheets.css'
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Login from './components/Login';
import Game from './components/Game';
import Horn from './components/Horn';
import Minister from './components/Minister';
import Robot from './components/Robot';
import Temp from './components/Temp';
function App() {
  return (
    <div>
    <div class='headerb'>
     <div class='header'>
    <span class='navbar'>
      <Navbar />
      </span>
      <span class='dest'> 
      <Destination/>
      </span>
      <span class="bro">
      <Login/>
      </span>
      </div>
      <div>
        <div class="game">
          <Game/>
        </div>
      </div>
    </div>
    <div class="horn"><Horn/>
      <Minister/> 
    </div>
    {/* <Robot/> */}
    <Temp/>
    </div>
  );
}

export default App;
