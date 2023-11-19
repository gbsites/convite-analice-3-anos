import intro_video from './assets/intro-video.mp4';
import card_img from './assets/card-img.png';

import './App.scss';

function App() {

  return (
    <>
      <div className="video_container">
        <video autoPlay muted loop>
          <source src={intro_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

          <hr />

        </div>

        <h5>
          Uma mensagem real de Elsa:
        </h5>

        <p>
          Os ventos do Norte trazem a notícia de que o terceiro aniversário da princesa Analice será comemorado com alegria e magia, onde risadas e diversão derreterão até o coração mais gelado.

        </p>

      </div >
    </>
  );
}

export default App;
