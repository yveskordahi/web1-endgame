<template>
  <div>
    <!-- <div class="background__img">
      <h1>La Seconde Guerre Mondiale</h1>
    </div> -->
    <Summaryww2/>
    <!-- <MapFranceww2 msg="Les pertes militaires par régions françaises"/>
    <Slider_battleww2 msg="Les pertes des grandes batailles de la première guerre mondiale"/>
    <AgeSoldierww2 msg="35% des morts parmi la “classe 14”"/>
    <Consequenceww2 msg="L’impact de ces pertes sur la France"/>
    <Slider_colonieSoldierww2 msg="Les pertes issus de colonies françaises"/>
    <MapWW2 msg="Les pertes de la première guerre mondiale dans le monde"/> -->
  </div>
</template>

<script>
import Summaryww2 from '@/components/ww2/Summaryww2.vue';
// import MapWW2 from '@/components/ww2/MapWW2.vue';
// import MapFranceww2 from '@/components/ww2/MapFranceww2.vue';
// import Slider_battleww2 from '@/components/ww2/Slider_battleww2.vue';
// import AgeSoldierww2 from '@/components/ww2/AgeSoldier2.vue';
// import Consequenceww2 from '@/components/ww2/Consequenceww2.vue';
// import Slider_colonieSoldierww2 from '@/components/ww2/Slider_colonieSoldier.vue';
export default {
  components: {
    Summaryww2
    // MapWW2,
    // MapFranceww2,
    // Slider_battleww2,
    // AgeSoldierww2,
    // Consequenceww2,
    // Slider_colonieSoldierww2
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