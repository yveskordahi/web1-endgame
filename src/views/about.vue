<template>
    <div class="about">
      <p class="subtitle__info">
        "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. 
        Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. 
        Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié”
      </p>
      <router-link class="Discover__btn" to="/Summary">Retour</router-link>
    </div>
  </template>
  
  <script>
  
  </script>
  
  
  <style lang="scss">
      .about {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
      }

      .subtitle__info {
        margin-top: 0;
        margin-bottom: 40px;
        width: 40%;
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

    .Discover__btn {
      display:inline-block;
      border:0.1em solid #FFFFFF;
      padding: 5px 17px;
      border-radius:0.12em;
      box-sizing: border-box;
      text-decoration:none;
      font-weight:300;
      color:#FFFFFF;
      text-align:center;
      transition: all 0.2s;
      background-color: transparent;
      cursor: pointer;
      font-size: 15px;
      opacity: 0;
    animation: opacity 2s ease .3s forwards;
    }

    .Discover__btn:hover{
      color:#000000;
      background-color:#FFFFFF;
    }
  </style>