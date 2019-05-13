<template>
    <div> 
    <b-container fluid style="padding : 0 !important; margin-left:5px; margin-right:5px;">

      <!-- <b-card-header header-tag="header" class="p-1" role="tab">   -->
        <b-button 
            v-show="items!=null"
            :class="type"
            id="un"
			block href="#" 
			v-b-toggle="numJour.toString() + typeGrid.toString()"
			variant="primary">
            <!-- style="background-color:Teal"> -->
           {{numJour}} | Nombre de tâches : {{nbTaches}} | Nombre de retards : {{nbRetards}}
        </b-button>
      <!-- </b-card-header> -->
      <b-collapse v-bind:id="numJour.toString() + typeGrid.toString()" class="mt-2" visible>
      <b-tab :title="gridLib" active>
            <div id="EnteteGrid" ref="EnteteGrid" style="margin-top:10px;">
            </div>
            <b-table 
                v-show="items!=null"
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

                <template slot="row-details" slot-scope="row" style="float: right">
                    <!-- <tbody> -->
                    <b-row class="mt"   >
                    <b-col cols="12" sm="12" >
                    <sousTaches :sousTables= row.item.sousTaches :fields= fields :typeGrid= typeGrid :numJour= numJour>      
                    </sousTaches>


                    </b-col>
                    
                    </b-row>

                    <!-- </tbody> -->
                    <!-- <tabJour :typeGrid="typeGrid" :gridLib="gridLib" :numJour="numJour"></tabJour> -->
                    <b-card>
                    <!-- <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>d1:</b></b-col>
                        <b-col>{{ row.item.d1 }}</b-col>
                    </b-row> -->

                    <b-row class="mb-2">
                        <b-col sm="12" class="text-sm-center">
                        <progBar 
                            :data= row.item>                        
                        </progBar>
                        </b-col>
                    </b-row>

                    <!-- <b-row class="mb-3">
                        <b-col sm="3" class="text-sm-right"><b>d3:</b></b-col>
                        <b-col>{{ row.item.d3 }}</b-col>
                    </b-row> -->
                    </b-card>
                    
                </template>

            </b-table>
            <!-- <envoieMessage :idBouton = numJour.toString() :msgBouton = "'Alerter tâches'"></envoieMessage> -->
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
        libActivite: String,
        libType: String,
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
            dataTable = this.$store.getters.getRowData('Activité ' + this.typeGrid, this.numJour, this.libType);
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

        type(){
            if(this.$store.getters.getType(this.libActivite, this.numJour)=="FRN") {
                return 'FRN';
            }else{
                return 'PDV';
            }
            
        },
        
    },

}
</script>

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

