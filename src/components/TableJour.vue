<template>
    <div> 
    <b-container fluid>

      <!-- <b-card-header header-tag="header" class="p-1" role="tab">   -->
        <b-button 

            id="un"
			block href="#" 
			v-b-toggle="numJour.toString() + typeGrid.toString()"
			variant="primary"
            style="background-color:Teal">
            Jour {{numJour}} | Nombre de tâches : {{nbTaches}} | Nombre de retards : {{nbRetards}}
        </b-button>
      <!-- </b-card-header> -->
      <b-collapse v-bind:id="numJour.toString() + typeGrid.toString()" class="mt-2" visible>
      <b-tab :title="gridLib" active>
            <div id="EnteteGrid" ref="EnteteGrid" style="margin-top:10px;">
            </div>
            <b-table 
                small 
                :items="items" 
                :fields="fields" 
                :striped ="striped"
                :hover ="hover">
                <template slot="details" slot-scope="row">
                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? 'Fermer' : 'Ouvrir'}} Details
                    </b-button>
                </template>

                <template slot="row-details" slot-scope="row">
                    <sousTaches :sousTables= row.item.sousTaches :fields= fields :typeGrid= typeGrid :numJour= numJour>      
                    </sousTaches>
                    <!-- <tabJour :typeGrid="typeGrid" :gridLib="gridLib" :numJour="numJour"></tabJour> -->
                    <b-card>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>d1:</b></b-col>
                        <b-col>{{ row.item.d1 }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>d2:</b></b-col>
                        <progBar 
                            :data= row.item>                        
                        </progBar>
                    </b-row>

                    <b-row class="mb-3">
                        <b-col sm="3" class="text-sm-right"><b>d3:</b></b-col>
                        <b-col>{{ row.item.d3 }}</b-col>
                    </b-row>
                    </b-card>
                    
                </template>

            </b-table>
            <envoieMessage :idBouton = numJour.toString() :msgBouton = "'Alerter tâches'"></envoieMessage>
      </b-tab>  
      </b-collapse>
      
    
    </b-container>
    
      
   <!-- <vue-csv-import url="../assets/dataSql.csv" :map-fields="['Lib', 'nom']">
   </vue-csv-import> -->
   
  </div>
</template>

<script>
import envoieMessage from './envoieMessage.vue'
import progBar from './ProgBar.vue'
import sousTaches from './SousTaches.vue'

export default {
    name: 'tabJour',

    props: {
        typeGrid: Number,
        gridLib: String,
        numJour: String,
    },
    
    data() {
      return {
          striped: true,
          hover : true,
          

      }
    },

    components: {
        envoieMessage,
        progBar,
        sousTaches,
    },

    computed:{
        fields(){
            return this.$store.getters.getFields;
        },
        items(){
            var dataTable = [];
            dataTable = this.$store.getters.getRowData('Activité ' + this.typeGrid, this.numJour);
               // if(this.typeGrid==1){    
            //     dataTable = this.$store.getters.getRowData1;

            // }else if(this.typeGrid==2){
            //     dataTable = this.$store.getters.getRowData2;
            // }else if(this.typeGrid==3){
            //     dataTable = this.$store.getters.getRowData3;
            // }
            // console.log(this.typeGrid);
            // console.log(this.gridLib);
            // console.log("=====================================");
            return dataTable;
        },
        // libelle(){
        //     return this.$store.getters.getLibelle;
        // },
        // activite(){
        //     if(this.typeGrid==1){    
        //         return this.$store.getters.getActivite1;
        //     }else if(this.typeGrid==2){
        //         return this.$store.getters.getActivite2;
        //     }else if(this.typeGrid==3){
        //         return this.$store.getters.getActivite3;
        //     }
            
        // },
        // nbRetards(){
        //     if(this.typeGrid==1){    
        //         return this.$store.getters.getRetards1;
        //     }else if(this.typeGrid==2){
        //         return this.$store.getters.getRetards2;
        //     }else if(this.typeGrid==3){
        //         return this.$store.getters.getRetards3;
        //     }
        // },

        nbTaches(){
           return this.$store.getters.getNbTaches('Activité ' + this.typeGrid, this.numJour);
        },

        nbRetards(){
           return this.$store.getters.getNbRetards('Activité ' + this.typeGrid, this.numJour);
        },
        
    },

}
</script>

<style>

</style>

