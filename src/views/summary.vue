<template>
  <section class="container">
    <div class="summary__container">
      <div class="summary__FirstPart">
        <div class="FirstPart__content">
          <h1 class="FirstPart__title">La Grande Guerre</h1>
          <p class="FirstPart__subtitle">Des Hommes et des Femmes mobilisés pour une guerre totale au front comme à l'arrière</p>
          <router-link class="Discover__btn" to="/FirstWorldWar">En savoir plus</router-link>
        </div>
      </div>
      <div class="summary__SecondPart">
        <div class="SecondPart__content">
          <h1 class="SecondPart__title">Une guerre d’anéantissement</h1>
          <p class="SecondPart__subtitle">Un bilan humain qui dépasse en horreur celui de la première guerre mondiale</p>
          <router-link class="Discover__btn" to="/SecondWorldWar">En savoir plus</router-link>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="navbar__items">
        <div class="items__archive">
          <router-link class="items__link" to="/archives">Archives</router-link>
        </div>
        <div class="items__setting">
          <router-link class="items__link" to="/about">A propos</router-link>
          <a class="items__link" href="#">Fr</a>
          <a class="items__link" href="#"><img class="icon_sound" src="../assets/Img/icon_sound.svg" alt="icon sound"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


</script>

<style scoped lang="scss" >
  .container {
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #181818;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;
  }

  .summary__container {
    display: flex;
    height: 100%;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }

    .summary__FirstPart {
      height: calc(100% - 100px);
      width: 50%;
      background: url(../assets/Img/trench-scene-bg-FirstPart1-compress.jpg) no-repeat; 
      -webkit-background-size: cover;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 1000px rgba(192,192,192,0.4) inset;
      transition: all .3s;

      @media screen and (max-width: 1000px) {
          width: 100%;
          height: calc(90% - 100px);
      }

      .FirstPart__content {
        color: white;
        font-size: 25px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .FirstPart__title {
          margin-bottom: 10px;
          text-shadow: 1px 1px 4px rgb(53, 53, 53);
        }

        .FirstPart__subtitle {
          margin-top: 0;
          padding-top: 0;
          font-size: 20px;
          width: 80%;
          text-shadow: 1px 1px 4px rgb(53, 53, 53);

          @media screen and (max-width: 500px) {
            width: 100%;
          }
        }

        @media screen and (max-width: 1280px) {
          .FirstPart__title {
              font-size: 25px;
          }

          .FirstPart__subtitle {
              font-size: 18px;
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
          background-color: rgba(0,0,0,0.3);
          cursor: pointer;
          font-size: 15px;
        }

        .Discover__btn:hover{
          color:#000000;
          background-color:#FFFFFF;
        }
      }
    }

    .summary__FirstPart:hover {
      box-shadow: 0 0 0 1000px rgba(255,255,255,0.15) inset;
    }

    .summary__SecondPart {
      height: calc(100% - 100px);
      width: 50%;
      background: url(../assets/Img/Winston_Churchill_and_General_Charles_de_Gaulle_walk_down_the_Avenue_des_Champs-Elysee_duirng_the_French_Armistice_Day_parade_in_Paris,_11_November_1944._BU1292.jpg) no-repeat; 
      -webkit-background-size: cover;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 1000px rgba(192, 192, 192, 0.4) inset;
      transition: all .3s;

      @media screen and (max-width: 1000px) {
          width: 100%;
      }
    }

    .SecondPart__content {
        color: white;
        font-size: 25px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .SecondPart__title {
          margin-bottom: 10px;
          text-shadow: 1px 1px 4px rgb(53, 53, 53);
        }

        .SecondPart__subtitle {
          margin-top: 0;
          padding-top: 0;
          font-size: 20px;
          width: 80%;
          text-shadow: 1px 1px 4px rgb(53, 53, 53);

          @media screen and (max-width: 500px) {
            width: 100%;
          }
        }

        @media screen and (max-width: 1280px) {
          .SecondPart__title {
              font-size: 25px;
          }

          .SecondPart__subtitle {
              font-size: 18px;
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
          background-color: rgba(0,0,0,0.3);
          cursor: pointer;
          font-size: 15px;
        }

        .Discover__btn:hover{
          color:#000000;
          background-color:#FFFFFF;
        }
      }
  }
  
  .summary__SecondPart:hover {
    box-shadow: 0 0 0 1000px rgba(255,255,255,0.15) inset;
  }

  .navbar {
    height: 100px;
    width: 100%;
    background-color: #181818;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 1000px) {
        height: 80px;
    }

    @media screen and (max-width: 600px) {
        height: 60px;
    }

    .navbar__items {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .items__archive {
        margin-left: 30px;

        @media screen and (max-width: 600px) {
          margin-left: 15px;
        }

        .items__link {
          color: white;
          text-decoration: none;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 15px;
          }
        }
      }

      .items__setting {
        margin-right: 30px;
        display: flex;

        @media screen and (max-width: 600px) {
          margin-right: 0px;
        }

        .items__link {
          padding-right: 15px;
          color: white;
          text-decoration: none;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 15px;
          }
        }
      }
    }
  }

  .icon_sound {
    width: 22px;
  }
</style>