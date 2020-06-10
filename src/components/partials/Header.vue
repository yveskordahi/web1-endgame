<!-- <template> -->
  <!-- <div id="nav">
    <div class="burger" @click="isOpen = !isOpen">
      <svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
    </div>
    <div class="menu" :class="isOpen ? 'menu-open' : 'menu-close'">
      <router-link @click.native="isOpen = false" to="/">Home</router-link>  -->
      <!-- @click.native car @click ne fonctionne pas sur router-link -->
      <!-- .native signifie que l'on utilise l'evenement 'click' natif de javascript et pas l'evenement 'click' de vue -->
      <!-- 'isOpen = false' car je souhaite fermer mon menu quand on clique sur un lien -->
      <!-- <router-link @click.native="isOpen = false" to="/team">l'Équipe</router-link>
       <router-link @click.native="isOpen = false" to="/contact">Contact</router-link>
    </div>
  </div> -->
<!-- </template> -->
<!-- 
<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false // Par defaut le menu n'est pas affiché
    }
  }
}
</script> -->

<style scoped lang="scss">
 body {
   margin: 0;
   padding: 0;
 }
</style>
