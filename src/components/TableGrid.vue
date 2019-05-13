<template>
    <div>
      <div v-bind:key="index" v-for="(type, index) in listeTypes" >
        <b-button 
          :class="type"
          id="un"
          block href="#" 
          v-b-toggle="type + activite"
          variant="primary">
          {{type}}
        </b-button>
        <b-collapse v-bind:id="type + activite" class="mt-2">
        <div v-bind:key="index" v-for="(jour, index) in listeJ" >
          <tabJour :libType ="type" :libActivite="activite" :typeGrid="typeGrid" :gridLib="gridLib" :numJour="jour"></tabJour>
        </div>
        </b-collapse>
      </div>
    </div>
    
</template>

<script>
    // import envoieMessage from './envoieMessage.vue'
    // import progBar from './ProgBar.vue'
    import tabJour from './TableJour.vue';
    
  export default {

    data(){
      return{
        listeTypes : ["PDV", "FRN"],
      }
    },

    components: {
        tabJour,
    },

    props: {
        typeGrid: Number,
        gridLib: String,
        activite: String,
    },

    computed: {
        listeJ(){
          //console.log("!!!!!!!!!!!!!!!!!!!L'ACTIVITE EST ICI "+this.activite)
            return this.$store.getters.getListeJours(this.activite);
            
        },
    }
    
  }

</script>

<style scoped>
  .gtasklist{
    font-size: 1px;
  }
</style>
