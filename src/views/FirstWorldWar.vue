<template>
  <div>
    <Summaryww1/>
    <!-- <MapFranceww1 msg="Les pertes militaires par régions françaises"/>
    <Slider_battleww1 msg="Les pertes des grandes batailles de la première guerre mondiale"/>
    <AgeSoldier msg="35% des morts parmi la “classe 14”"/>
    <Consequenceww1 msg="L’impact de ces pertes sur la France"/>
    <Slider_colonieSoldier msg="Les pertes issus de colonies françaises"/>
    <MapWW1 msg="Les pertes de la première guerre mondiale dans le monde"/> -->
  </div>
</template>

<script>
import Summaryww1 from '@/components/Summaryww1.vue';
// import MapWW1 from '@/components/MapWW1.vue';
// import MapFranceww1 from '@/components/MapFranceww1.vue';
// import Slider_battleww1 from '@/components/Slider_battleww1.vue';
// import AgeSoldier from '@/components/AgeSoldier.vue';
// import Consequenceww1 from '@/components/Consequenceww1.vue';
// import Slider_colonieSoldier from '@/components/Slider_colonieSoldier.vue';
export default {
  components: {
    Summaryww1
    // MapWW1,
    // MapFranceww1,
    // Slider_battleww1,
    // AgeSoldier,
    // Consequenceww1,
    // Slider_colonieSoldier
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

  h1 {
  padding: 15px;
  margin: 0;
  color: white;
  opacity: 0;
  animation: opacity 2s ease .3s forwards;

  @media screen and (max-width: 600px) {
    font-size: 25px
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