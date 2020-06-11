<template>
  <div class="wrapper">
    <div class="video-container">
        <video autoplay muted loop>
            <source src="../assets/Video/vid.mp4" type="video/mp4">
        </video>
        <audio id="background_audio" autoplay="true" loop="loop" muted="true">
            <source src="../assets/Sound/WorldWar.mp3" type="audio/mp3">
            If you are reading this, it is because your browser does not support the audio element.
        </audio>
    </div>

    <div class="video-overlay">
        <h1>Des hommes et des femmes au services de la France </h1>
        <p>subtitle</p>
        <router-link class="Discover__btn" to="/Summary">Découvrir</router-link>
        <button class="sound__btn" v-on:click="mute()">1</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
  methods: {
    greet: function mute(){
      if(document.getElementById('background_audio').muted == false){
        document.getElementById('background_audio').muted = true;
      } else {
        document.getElementById('background_audio').muted = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
    background-color: rgba(0,0,0,0.8);
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
    font-size: 1.5rem;

    h1 {
      margin: 0;
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
    }

    .Discover__btn:hover{
      color:#000000;
      background-color:#FFFFFF;
    }

    .sound__btn {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
}

p{
    margin-top: 10px;
    font-weight: 100;
    text-decoration: capitalize;
}

</style>