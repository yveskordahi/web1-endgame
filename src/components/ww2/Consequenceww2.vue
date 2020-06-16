<template>
    <div class="Consequenceww2">
        <h1>{{ msg }}</h1>
        <h1>L’impact des pertes de la seconde guerre mondiale en France</h1>
      <div class="subtitle">
        <p class="subtitle__info">Sur le plan humain, la Seconde Guerre mondiale est la guerre la plus meurtrière de tous les temps, avec plus de 55 millions de victimes. Ces pertes humaines engendrent une forte baisse de la population active. 
          En France, la reprise de la natalité a été curieusement amorcée avant même la fin de la seconde guerre mondiale. </p>
      </div>
      <div class="container">

        <ul class="timeline">
          <li>
            <h3>Impact démographique</h3>
            <p>Après 1945, la remontée de la courbe de la natalité est, certes, due à un effet de rattrapage 
              (retour des prisonniers) et à la conjoncture mondiale. Néanmoins, l’origine de ce regain de vitalité démographique réside déjà
              et cela vaut encore aujourd’hui dans des dispositions favorables à l’enfant et à la famille organisées, cette fois, en un vaste système.      
            </p>
          </li>
          <!-- <li>
            <h3>La natalité</h3>
            <p>En France, on évalue le nombre des naissances « annulées » par la guerre à <span class="span_important">1,6 million</span>.  <br>
              <img src="../../assets/Img/baby_firstWorldWar.webp" alt="baby of the first world war"> <br>
              L'effondrement de la natalité pendant la 1ère guerre mondiale a plusieurs causes : couples séparés ; mariages différés ; comportements malthusiens renforcés par l'incertitude du lendemain. <br>
              cet effondrement a accentué le déclin démographique et la dénatalité correspondant à la fin de la transition démographique et à la montée du malthusianisme. 
     La population française n'a retrouvéson niveau d'avant la 1ère guerre mondiale qu'au début des années 1950. 
            </p>
          </li> -->
          <li>
            <h3>Les orphelins</h3>
            <p>
             <span class="span_important">200 000 </span> C'est le nombre d'orphelins français à la fin du conflit. <br>
             <img src="../../assets/Img/orphelins_ww2.png" alt="Image enfants orpehlins ww1"> <br>
             Au lendemain de la guerre, les organisations juives de France se retrouvèrent face au désarroi de nombreux orphelins, 
             fils et filles de déportés juifs, la plupart d'origine polonaise, russe, roumaine mais également salonicienne ou apatride (Allemands du Reich). 
             Diverses associations, actives depuis l'entre-deux-guerres, organisèrent des structures afin de les recueillir, de leur donner une éducation et 
             une formation pratique, de les insérer dans la société française tout en leur offrant la possibilité de se rattacher au judaïsme. 
            </p>
          </li>
          <li>
            <h3>Les femmes au lendemain de la guerre</h3>
            <p>
              <img src="../../assets/Img/femmes_ww2.jpg" alt="les veuves de la ww1"> <br>
              Elles sont <span class="span_important">400 000</span> veuves au lendemain de la guerre.
              Cependant à la fin de ce second conflit, les femmes seront récompensées par plus que de simple mots par le Générale de Gaulle.
              Le plus grand rôle occupé par les femme restait dans la médecine, aux fronts essentiellement. Sans elles, rien aurait pu réussir, les Français seraient tombés un a un sans pouvoir se relever. Leur rôle a été décisif.
              Pour beaucoup, le droit de vote fût accordé aux femmes en « récompense » de leur participation dans la résistance. Mais ce fût un parcours plus difficile qu'il n'y paraît. Les femmes se sont battue. Le droit de vote ne sera accordé aux française que par une ordonnance de 1944, par le Général de Gaulle. Le 20 avril et le 13 mai 1945, les femmes participent pour la première fois à des élections municipales.  

Sans vote
            </p>
          </li>
          <li>
            <h3>Impact économique</h3>
            <p>Les victimes civiles et militaires, le déficit des naissances et l'émigration ont entraîné une baisse de la population française d'environ <span class="span_important">1,5 millions</span> de personnes.
              L'économie était dévastée.
              La production agricole avait chuté d'un tiers par rapport à 1938, ce qui provoquait une situation de pénurie et de gros problèmes de ravitaillement.
              La production industrielle était inférieure de moitié, tandis que les infrastructures de transport étaient endommagées.
              La situation financière était très mauvaise en raison de l'alourdissement du déficit budgétaire et de l'inflation ( les prix ont quadruplé de 1938 à 1944 ) et le marché noir s'est développé, tandis que le franc se dépréciait. </p>
          </li>
          <li>
            <h3>Les trentes glorieuses</h3>
            <p>De 1945 à 1973, La France a connu la plus forte expansion économique de son histoire et l'une des plus élevée du monde industriel.
              L'économiste français, Jean Fourastié, lui a donné le nom de <span class="span_important">«Trente Glorieuses »</span>.
              Cette croissance soutenue s'est accompagnée de profondes mutations de l'appareil de production et de services.
              Dans l'agriculture, les exploitations se sont progressivement agrandies et modernisées, les rendements et la productivité ont augmenté.
               Les conditions de vie du monde paysan se sont améliorées, grâce à la garantie des prix obtenue dans le cadre de la Politique agricole commune ( PAC ) adoptée en 1962 au sein de la CEE.
              Dans l'industrie, les entreprises françaises se sont concentrées, internationalisées et modernisées afin de faire face à une concurrence accrue du fait de la libération des échanges en Europe ( suppression des droits de douane dans la CEE ) et dans le monde ( accords du GATT ).
              Dans la distribution enfin, les magasins à grande surface se sont multipliés.
            </p>
          </li>
        </ul>
      </div>
      <router-link class="items__link" to="/AgeSoldierww2"><img class="next__page-arrow"  src="../../assets/Img/back.svg" alt="arrow"></router-link>
    <router-link class="items__link" to="/Slider_colonieSoldierww2"><img class="next__page-arrow"  src="../../assets/Img/next.svg" alt="arrow"></router-link>
    </div>
  </template>

  
  
  <script>
  export default {
    name: 'Consequenceww2',
    props: {
      msg: String
    },
    }
  </script>
  
  <style scoped lang="scss">
    * {
    box-sizing: border-box;
    }

    img {
      width: 65%;
      height: auto;
      padding-top: 10px;
      padding-bottom: 10px;

      @media screen and (max-width: 900px) {
        width: 95%
        }
    }
      .Consequenceww2 {
          box-sizing: border-box;
      }

      h1 {
        padding: 15px;
        color: white;
        margin-bottom: 0;
        margin-top: 10px;
        opacity: 0;
        animation: opacity 2s ease .3s forwards;


        @media screen and (max-width: 600px) {
            font-size: 22px;
            margin-top: 30px;
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

  h3 {
	font-family: sans-serif;
  color: #67b7dc;
  }

  .span_important {
    font-weight: 600;
    color: rgb(40, 167, 218);
  }

.container {
	max-width:800px;
	margin:50px auto;
  opacity: 0;
  animation: opacity 2s ease .3s forwards;
}

.timeline{
  display:flex;
	flex-direction:column;
	list-style:none;
	padding-top: 20px;
	padding-bottom: 20px;
  position: inherit;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}


.timeline:before{
  display: none;
}

.timeline li{
	border-top:1px solid #ccc;
	min-height:100px;
	margin-bottom:20px;
	padding: 20px 40px;
	text-align: left;
	transition:.3s;
  width: 100%;
  text-align: center;
  padding: 0;
  position: inherit;
  transform: translateX(0);
}

.timeline li:before {
  display: none;
}

.timeline h3 {
	font-size:28px;
	margin-bottom: 10px;
}

.timeline p {
  line-height: 1.5;
  font-size: 16px;
  color: #b6b6b6;
}

.timeline li:nth-child(2n) {
	align-self: flex-end;
  text-align: center;
  transform: translateX(0);

  @media screen and (max-width: 1000px) {
  text-align: center;
  transform: translateX(0);
  }
}
.timeline li:nth-child(2n):before {
	left: 0;
  transform: translate(-50%,-50%);
}
.timeline li.visible {
	opacity:1;
	transform:translateX(0);
}

.hr__end {
  width: 90%;
}

.items__link {
    color: white;
    text-decoration: none;
    opacity: 0;
    animation: opacity 2s ease .3s forwards;
  }

  .next__page-arrow {
    width: 52px;
    padding: 10px;
    margin-bottom: 35px;
  }
  </style>
  