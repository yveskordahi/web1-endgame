<template>
    <div class="SliderBattleWW1">
      <h1>{{ msg }}</h1>
      <h1>Les pertes des grandes batailles de la première guerre mondiale</h1>
      <div class="subtitle">
        <p class="subtitle__info">La plupart des batailles les plus importantes eurent lieu sur le Front de l’Est.</p>
      </div>
      <div class="carousel">
        <div class="carousel-inner">
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel-item">
              <p class="battle__title">Bataille de Verdun</p>
              <p class="battle__info">La bataille de Verdun durera 10 mois et sera l'une des batailles les plus sanglantes et meurtrières de la première guerre mondiale</p>
              <p class="battle__subtitle"><span class="span_important">163.000</span> Français morts</p>
                <img src="../assets/Img/battle-verdun.jpg">
                <p class="battle__title2">Bataille de la marne</p>
            </div>
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item">
              <p class="battle__title">Bataille de la Marne</p>
              <p class="battle__info">La bataille de la Marne intervient dans un contexte marqué par la progression de l’armée allemande qui, après avoir envahi la Belgique en août, débouche sur les plaines du nord de la France.</p>
              <p class="battle__subtitle"><span class="span_important">227.000</span> Français morts</p>
                <img src="../assets/Img/bataille_marne.jpg">
                <p class="battle__title2">Bataille de la marne</p>
            </div>
            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item">
              <p class="battle__title">Bataille de la Somme</p>
              <p class="battle__info">La bataille de la Somme, en 1916 lors de la Première Guerre mondiale, a opposé les Alliés britanniques et français aux Allemands, à proximité du fleuve Somme, essentiellement dans le département de même nom.</p>
              <p class="battle__subtitle"><span class="span_important">200.000</span> Français morts</p>
                <img src="../assets/Img/battle_somme.jpg">
                <p class="battle__title2">Bataille de la marne</p>
            </div>
            <label for="carousel-3" class="carousel-control prev control-1">‹</label>
            <label for="carousel-2" class="carousel-control next control-1">›</label>
            <label for="carousel-1" class="carousel-control prev control-2">‹</label>
            <label for="carousel-3" class="carousel-control next control-2">›</label>
            <label for="carousel-2" class="carousel-control prev control-3">‹</label>
            <label for="carousel-1" class="carousel-control next control-3">›</label>
            <ol class="carousel-indicators">
                <li>
                    <label for="carousel-1" class="carousel-bullet">•</label>
                </li>
                <li>
                    <label for="carousel-2" class="carousel-bullet">•</label>
                </li>
                <li>
                    <label for="carousel-3" class="carousel-bullet">•</label>
                </li>
            </ol>
        </div>
    </div>
    <div class="arrow_sliderbattle">
    <router-link class="items__link" to="/MapFranceww1"><img class="next__page-arrow"  src="../assets/Img/back.svg" alt="arrow"></router-link>
    <router-link class="items__link" to="/AgeSoldier"><img class="next__page-arrow"  src="../assets/Img/next.svg" alt="arrow"></router-link>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Slider_battleww1',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped lang="scss">
    .SliderBattleWW1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

h1 {
        padding: 15px;
        color: white;
        margin-bottom: 0;
        margin-top: 10px;

        @media screen and (max-width: 600px) {
            font-size: 22px
        }
       }

    .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .subtitle__info {
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
    }

.battle__title {
  color: white;
}

.battle__title2 {
  color: #181818;
}

.battle__subtitle {
  font-size: 15px;
  color: white;
  opacity: 0.7;
  margin-top: 5px;
}

.battle__info {
  margin: 0;
  line-height: 1.5;
  font-size: 16px;
  color: #b6b6b6;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 600px) {
    font-size: 13px;
    padding-left: 3px;
    padding-right: 3px;
    
  }

  @media screen and (max-width: 330px) {
    font-size: 12px;
  }
}

.span_important {
    font-weight: 600;
    color: rgb(40, 167, 218);
  }

.carousel {
    position: relative;
    box-shadow: 0px 1px 6px rgba(240, 240, 240, 0.64);
    margin-top: 26px;
    width: 700px;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;

    @media screen and (max-width: 800px) {
      width: 90%;
    }
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item img {
    display: block;
    height: auto;
    max-width: 100%;
}

.carousel-control {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.carousel-control.prev {
    left: 2%;
}

.carousel-control.next {
    right: 2%;
}

.carousel-control:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #428bca;
}

#title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}

.arrow_sliderbattle {
  display: flex;
  margin-top: 20px;
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
  </style>
  