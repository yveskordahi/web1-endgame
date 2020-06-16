<template>
    <div class="Summary">
      <div class="wrapper">
        <div class="video-container">
            <video autoplay muted loop>
                <source src="../assets/Video/Video_introww1.mp4" type="video/mp4">
            </video>
        </div>
    
        <div class="video-overlay">
          <h1>La première guerre mondiale</h1>
            <div class="subtitle">
              <p class="subtitle__presentation"> La Première Guerre mondiale, aussi appelée la <span class="span_important">Grande Guerre</span>, 
                est un conflit militaire impliquant dans un premier temps les puissances européennes et 
                s'étendant ensuite à plusieurs continents, qui s'est déroulé de 1914 à 1918. 
              </p>
              <p class="subtitle__info"> 
                Cette montée en puissance des moyens de guerre et de destruction massive, aura pour conséquences l'augmentation du nombre de victimes militaires
                au cours de cette première guerre mondiale.
              </p>
              <div class="arrow_sliderbattle">
                <router-link class="items__link" to="/Summary"><img class="next__page-arrow"  src="../assets/Img/back.svg" alt="arrow"></router-link>
                <router-link class="items__link" to="/MapFranceww1"><img class="next__page-arrow"  src="../assets/Img/next.svg" alt="arrow"></router-link>
              </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Summaryww1',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped lang="scss">
    h1 {
  padding: 15px;
  margin: 0;
  margin-top: 20px;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 25px
  }
}

  .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .subtitle__presentation {
      width: 50%;
      margin: 0;
      line-height: 1.5;
      font-size: 16px;
      color: #b6b6b6;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;

      @media screen and (max-width: 1450px) {
          width: 75%;
      }

      @media screen and (max-width: 900px) {
          width: 90%;
      }
    }

    .subtitle__info {
      width: 50%;
      line-height: 1.5;
      font-size: 16px;
      color: #b6b6b6;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;

      @media screen and (max-width: 1450px) {
          width: 75%;
      }

      @media screen and (max-width: 900px) {
          width: 90%;
      }
    }

    .span_important {
    font-weight: 600;
    color: rgb(40, 167, 218);
    }

    .tankWorldWar__img {
      height: 520px;
      margin-top: 15px;
      margin-bottom: 15px;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;

      @media screen and (max-width: 800px) {
          width: 90%;
          height: auto;
      }
    }
  }

  .items__link {
    color: white;
    text-decoration: none;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;
  }

  .next__page-arrow {
    width: 30px;
    padding: 10px;
  }

  .wrapper{
    position: absolute;
    width: 100%;
    height: 100%;

    .video-container{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .video-container:after{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    animation: bg-color 2s ease 2s forwards;

    @keyframes bg-color {
      from {
        background-color: rgba(0,0,0,0);
      }

      to {
        background-color: rgba(0,0,0,0.7);
      }
    }
}

    .video-container video{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 56.25vw;
        min-width: 177.6vh;
        min-height: 100vh;
        transform: translate(-50%, -50%);
    }
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-direction: column;
    opacity: 0;
    animation: opacity 2s ease 2s forwards;

    @keyframes opacity {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
}
  </style>
  