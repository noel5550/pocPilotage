<template>
    <div>

      <b-container fluid style="padding : 0 !important; ">
      <div v-bind:key="index" v-for="(type, index) in listeTypes" >
        <b-button 
          :class="type"
          id="un"
          block href="#" 
          v-b-toggle="type + activite"
          variant="primary"
          >
          {{libActiv}} : {{type}}

        </b-button>
        <b-collapse v-bind:id="type + activite" class="mt-2" style="margin-top: 0 !important">
        <div v-bind:key="index" v-for="(jour, index) in listeJ"  >
          <tabJour :libType ="type" :libActivite="activite" :typeGrid="typeGrid" :gridLib="gridLib" :numJour="jour"></tabJour>
        </div>
        <div style="padding :5px"></div>
        </b-collapse>
      </div>
      </b-container>
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
        libActiv: String,
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

<style scoped>
.FRN{
    background-color:rgb(3, 126, 126)
}
.FRN:hover{
    background-color:rgba(3, 126, 126, 0.658)
}

.PDV{
    background-color:#0FBB8A
}
.PDV:hover{
    background-color:rgba(15, 187, 138, 0.61)
}
</style>
