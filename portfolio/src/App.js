import './App.css';
import mypicture from './img/me.png';

function App() {
  return (
    <div className="App">
      <main class="flex bg-black h-screen flex-col content-center justify-center">
        <div class="flex space-x-28 justify-center">
          <div class='bg-pink px-10 py-7'>
            <h1 class="text-7xl text-white font-sans font-bold">Christian Borggård</h1>
            <p class="mt-8 text-2xl text-white text-left">Hej! Mit navn er Christian Borggård. Jeg er færdiguddannet<br></br>
            multimediedesigner og på nuværende tidspunkt ved at tage<br></br>
            topup som webudvikler. Jeg er mest specialiseret inden for<br></br>
            frontend men er ivrigt i gang med at udvikle mine evner i at<br></br>
            oplære udførelse af backend. Jeg er passioneret i at forbedre<br></br>
            mine evner til at skabe bedre og nemme brugeroplevelser.</p>
            <p class="mt-10 font-bold text-3xl text-white text-left">Kontakt oplysninger</p>
            <p class="mt-3 text-2xl text-white text-left">Email: christianborggaard@gmail.com</p>
            <p class="mt-2 text-2xl text-white text-left">Telefon: +45 23659693</p>
          </div>
          <img src={mypicture} alt="me" class="w-1/3"></img>
        </div>
      </main>
    </div>
  );
}

export default App;
