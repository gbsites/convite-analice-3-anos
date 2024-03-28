import card_img from './assets/card-img.png';

import './App.scss';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const snowContainer = document.querySelector('.snow_container');

    // params
    const snowFlakes = 150;
    const snowFlakesSpeed = 1;
    const snowFlakesOpacity = 0.5;

    for (let i = 0; i < snowFlakes; i++) {
      const snowFlake = document.createElement('div');
      snowFlake.classList.add('snow_flake');
      snowFlake.style.opacity = Math.random() * snowFlakesOpacity;
      snowFlake.style.left = Math.random() * 100 + 'vw';
      snowFlake.style.animationDuration = Math.random() * snowFlakesSpeed + 10 + 's';
      snowFlake.style.animationDelay = Math.random() * 10 + 's';

      const randomNum = Math.random() * 1.5 + 0.5;
      snowFlake.style.scale = randomNum;
      snowFlake.style.filter = `blur(${randomNum}px)`;

      snowContainer.appendChild(snowFlake);
    }

  }, []);

  return (
    <>
      <div className="snow_container"></div>
      <div className="banner_container">

        <div>
          <p>Analice</p>
          <p>3 Anos</p>
        </div>

        <img src="bg.jpg" alt="" />
      </div>

      <div className="texts">

        <h3>Você quer brincar na neve?</h3>
        <h3>Então venha embarcar nessa</h3>

        <h1>AVENTURA CONGELANTE</h1>

        <div className="card">

          <hr />

          <div className="img_container">
            <img src={card_img} alt="" />
          </div>

          <p>Dia 27/04 | 18:30h</p>

          <hr />

        </div>

        <h5>
          Uma mensagem real de Elsa:
        </h5>

        <p>
          Os ventos do Norte trazem a notícia de que o terceiro aniversário da princesa Analice será comemorado com alegria e magia, onde risadas e diversão derreterão até o coração mais gelado

        </p>

      </div >

      <div className="btns">

        <button onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5521990072664&text=Estou%20a%20caminho%20do%20Reino!"}>Confirmar Presença</button>

        <button onClick={() => window.location.href = "https://maps.app.goo.gl/dLXyBk1bwsqXbjLZ9"}>Ver Localização</button>

      </div>
    </>
  );
}

export default App;
