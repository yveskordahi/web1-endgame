<template>
  <div>
    <Summaryww2/>
  </div>
</template>

<script>
import Summaryww2 from '@/components/ww2/Summaryww2.vue';

export default {
  components: {
    Summaryww2
  }
}
</script>


<style lang="scss">
  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  
  .background__img {
    background: url(../assets/Img/Baitaille-de-la-somme3.jpg) center no-repeat ; 
    -webkit-background-size: cover;
    background-size: cover;
    height: 470px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    animation: opacity 2s ease 0s forwards;

    @media screen and (max-width: 600px) {
        height: 220px
    }

    h1 {
      font-size: 40px;
      color: white;
      opacity: 0;
      animation: opacity 2s ease .3s forwards;

      @media screen and (max-width: 1200px) {
        font-size: 30px;
      }

      @media screen and (max-width: 900px) {
        font-size: 25px;
      }
    }
  }
</style>