<template>
    <div>
        <div v-bind:key="index" v-for="(jour, index) in listeJ" >
            <tabJour :libActivite="activite" :typeGrid="typeGrid" :gridLib="gridLib" :numJour="jour"></tabJour>
        </div>
        
    </div>
    
</template>

<script>
    // import envoieMessage from './envoieMessage.vue'
    // import progBar from './ProgBar.vue'
    import tabJour from './TableJour.vue';
    
  export default {

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
