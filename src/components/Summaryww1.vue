<template>
    <div class="Summary">
      <div class="subtitle">
        <p class="subtitle__presentation"> La Première Guerre mondiale, aussi appelée la <span class="span_important">Grande Guerre</span>, 
            est un conflit militaire impliquant dans un premier temps les puissances européennes et 
            s'étendant ensuite à plusieurs continents, qui s'est déroulé de 1914 à 1918.
        </p>
        <p class="subtitle__info"> 
          Le conflit a débuté à l'ancienne mode, avec cavaliers en gants blancs et fantassins en uniformes colorés (pantalons rouge chez les Français).
          Très vite, il change de nature. Des armes et des techniques nouvelles apparaissent au fil des mois : gaz de combat, chars d'assaut, mitrailleuses, barbelés, aviation...
        </p>
        <div>
          <video class="tankWorldWar__img" src="../assets/Video/WW1_Video.mp4" autoplay muted loop type="video/mp4"></video>
        </div>
        <p class="subtitle__info"> 
          Cette montée en puissance des moyens de guerre et de destruction massive, aura pour conséquences l'augmentation du nombre de victimes militaires
          au cours de cette première guerre mondiale.
        </p>
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
      width: 95%;
      height: auto;
      margin-top: 15px;
      margin-bottom: 15px;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;
    }
  }
  </style>
  