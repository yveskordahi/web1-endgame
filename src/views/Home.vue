<template>
  <div class="wrapper">
    <div class="video-container">
        <video autoplay muted loop>
            <source src="../assets/Video/vid.mp4" type="video/mp4">
        </video>
    </div>

    <div class="video-overlay">
        <h1>Des hommes et des femmes au services de la France </h1>
        <p>Les deux plus grandes guerres de l'histoire causer la mort de millions de personnes, découvrez ici l'impact de ces pertes en France.</p>
        <router-link class="Discover__btn" to="/Summary">Découvrir</router-link>
    </div>
  </div>
</template>

<script>

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

    h1 {
      margin: 0;
      font-size: 38px;

      @media screen and (max-width: 1400px) {
      font-size: 30px;
      }

      @media screen and (max-width: 820px) {
      font-size: 26px;
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
    width: 50%;
    opacity: 0.7;
    font-size: 20px;
    line-height: 1.4;

    @media screen and (max-width: 1300px) {
      width: 90%;
    }

    @media screen and (max-width: 820px) {
      font-size: 15px;
    }
}

</style>