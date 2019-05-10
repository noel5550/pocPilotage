<template>
    <div>
        <b-container fluid style="padding : 0 !important">
           
            <b-table 
            small 
            :items="sousTables" 
            :fields="fields"
            :striped ="striped"
            :hover ="hover"
            >
            <!-- thead-class="hidden_header">                 -->
            <template slot="details" slot-scope="row">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Fermer' : 'Ouvrir'}} Details
                </b-button>
            </template>

            <template slot="row-details" slot-scope="row">

                <!-- <tabJour :typeGrid="typeGrid" :gridLib="gridLib" :numJour="numJour"></tabJour> -->
                <b-card>
                <!-- <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>d1:</b></b-col>
                    <b-col>{{ row.item.d1 }}</b-col>
                </b-row> -->

                <b-row class="mb-2">
                    <b-col sm="12" class="text-sm-center">
                        <prog-bar :data= row.item></prog-bar>
                    </b-col>
                    <!-- <progBar 
                        :tableProg="'Activité ' + typeGrid.toString()"
                        :ligneProg= row.item.lib
                        :jourProg= numJour>                        
                    </progBar> -->
                   
                </b-row>

                <!-- <b-row class="mb-3">
                    <b-col sm="3" class="text-sm-right"><b>d3:</b></b-col>
                    <b-col>{{ row.item.d3 }}</b-col>
                </b-row> -->
                </b-card>
                        
            </template>
            </b-table>  
           
        </b-container>
    <!-- <table class="table table-striped table-bordered table-hover">
        
        <tbody>
        <template v-for="row in testing" >
            <tr v-bind:key="row.id" @click="row.contentVisible = !row.contentVisible">
            <td>{{row.id}}</td>
            <td>{{row.name}}</td>
            </tr>
            <tr v-bind:key="row.id" v-if="row.contentVisible">
            <td :colspan="columns.length" >
                <div class="accordian-body">
                afasfafs
                </div>
            </td>
            </tr>
        </template>
        </tbody>
    </table> -->
    
    </div> 
</template>

<script>
import progBar from './ProgBar.vue'
export default {
    data() {
        return{
            // testing: [
            //     {
            //         id: 1, 
            //         name: "Customer 1",
            //         contentVisible: false
               
            //     },
            //     {
            //         id: 2, 
            //         name: "Customer 1",
            //         contentVisible: false
                    
            //     },
            //     {
            //         id: 3, 
            //         name: "Customer 3",
            //         contentVisible: false
                    
            //     },
            // ], 
            // columns: ["id", "name"],
            striped: true,
            hover : true,
        }
  },
  props: {
      sousTables: Array,
      fields: Array,
      typeGrid: Number,
      numJour: String,
  }, 

  components: {
      progBar,
  }
}
</script>

<style>
.hidden_header {
  display: none;
}

.b-table{
  padding:0 !important;
  /* margin-right:0 !important; */

}

</style>
