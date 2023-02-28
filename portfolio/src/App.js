import './App.css';
import mypicture from './img/me.png';

function App() {
  return (
    <div className="App">
      <main class="flex bg-black h-screen flex-col content-center justify-center">
        <div class="flex space-x-28 justify-center">
          <div>
            <h1 class="text-8xl text-white">Christian Borggård</h1>
          </div>
          <img src={mypicture} alt="me" class="w-1/3"></img>
        </div>
      </main>
    </div>
  );
}

export default App;
