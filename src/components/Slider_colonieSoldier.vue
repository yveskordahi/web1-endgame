<template>
    <div class="Slider_colonieSoldier">
      <h1>{{ msg }}</h1>
      <div class="subtitle">
        <p class="subtitle__info">
          Lors du lancement des commémorations du centenaire de la Première guerre mondiale, 
          le président François Hollande avait tenu à saluer les soldats africains "qui ont pris part à une guerre qui avait pu ne pas être la leur". 
          Malgré cette reconnaissance officielle, l’engagement de ces combattants reste encore très méconnu.</p>
      </div>
      <div class="carousel1">
        <div class="carousel1-inner">
            <input class="carousel1-open" type="radio" id="carousel-11" name="carousel1" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel1-item">
              <p class="battle__title">Les tirailleurs marocains</p>
              <p class="battle__subtitle"><span class="span_important">12.000</span> morts</p>
                <img src="../assets/Img/tirailleur_marocains.jpg">
                <p class="battle__title2">Les tirailleurs algériens</p>
            </div>
            <input class="carousel1-open" type="radio" id="carousel-21" name="carousel1" aria-hidden="true" hidden="">
            <div class="carousel1-item">
              <p class="battle__title">Les tirailleurs algériens</p>
              <p class="battle__subtitle"><span class="span_important">28.000</span> morts</p>
                <img src="../assets/Img/tirailleur_algerien.jpg">
                <p class="battle__title2">Bataille de la marne</p>
            </div>
            <input class="carousel1-open" type="radio" id="carousel-31" name="carousel1" aria-hidden="true" hidden="">
            <div class="carousel1-item">
              <p class="battle__title">Les tirailleurs sénégalais</p>
              <p class="battle__subtitle"><span class="span_important">30.000</span> morts</p>
                <img src="../assets/Img/tirailleurs_senegalais.jpg">
                <p class="battle__title2">Bataille de la marne</p>
            </div>
            <label for="carousel-31" class="carousel-control1 prev1 control-11">‹</label>
            <label for="carousel-21" class="carousel-control1 next1 control-11">›</label>
            <label for="carousel-11" class="carousel-control1 prev1 control-21">‹</label>
            <label for="carousel-31" class="carousel-control1 next1 control-21">›</label>
            <label for="carousel-21" class="carousel-control1 prev1 control-31">‹</label>
            <label for="carousel-11" class="carousel-control1 next1 control-31">›</label>
            <ol class="carousel-indicators1">
                <li>
                    <label for="carousel-11" class="carousel-bullet1">•</label>
                </li>
                <li>
                    <label for="carousel-21" class="carousel-bullet1">•</label>
                </li>
                <li>
                    <label for="carousel-31" class="carousel-bullet1">•</label>
                </li>
            </ol>
        </div>
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
    .Slider_colonieSoldier {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

h1 {
        padding: 15px;
        color: white;
        margin-bottom: 0;

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

.span_important {
    font-weight: 600;
    color: rgb(40, 167, 218);
  }

.carousel1 {
    position: relative;
    box-shadow: 0px 1px 6px rgba(240, 240, 240, 0.64);
    margin-top: 26px;
    width: 700px;

    @media screen and (max-width: 800px) {
      width: 90%;
    }
}

.carousel1-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel1-open:checked + .carousel1-item {
    position: static;
    opacity: 100;
}

.carousel1-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel1-item img {
    display: block;
    height: auto;
    max-width: 100%;
}

.carousel-control1 {
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

.carousel-control1.prev1 {
    left: 2%;
}

.carousel-control1.next1 {
    right: 2%;
}

.carousel-control1:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-11:checked ~ .control-11,
#carousel-21:checked ~ .control-21,
#carousel-31:checked ~ .control-31 {
    display: block;
}

.carousel-indicators1 {
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

.carousel-indicators1 li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet1 {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet1:hover {
    color: #aaaaaa;
}

#carousel-11:checked ~ .control-11 ~ .carousel-indicators1 li:nth-child(1) .carousel-bullet1,
#carousel-21:checked ~ .control-21 ~ .carousel-indicators1 li:nth-child(2) .carousel-bullet1,
#carousel-31:checked ~ .control-31 ~ .carousel-indicators1 li:nth-child(3) .carousel-bullet1 {
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
  </style>
  