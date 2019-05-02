<template>
    <div>
        <div v-bind:key="index" v-for="(jour, index) in listeJ">
            <tabJour :typeGrid="typeGrid" :gridLib="gridLib" :numJour="jour"></tabJour>
        </div>
    </div>
    
</template>

<script>
    // import envoieMessage from './envoieMessage.vue'
    // import progBar from './ProgBar.vue'
    import tabJour from './TableJour.vue'

    
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
            return this.$store.getters.getListeJours(this.activite);
            // console.log(this.activite)
        }
    }
    
  }
</script>