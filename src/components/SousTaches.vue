<template>
    <div style= "padding : 0 !important">
        <b-container fluid style="padding : 0 !important">
           
            <b-table 
            small 
            
            :items="sousTables" 
            :fields="fields"
            :striped ="striped"
            :hover ="hover"
            >
            <template slot="details" slot-scope="row">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Fermer' : 'Ouvrir'}} Details
                </b-button>
            </template>

            <template slot="row-details" slot-scope="row">

                <b-card>
                <b-row class="mb-2">
                    <b-col sm="12" class="text-sm-center">
                        <prog-bar :data= row.item></prog-bar>
                    </b-col>
                </b-row>
                </b-card>
                        
            </template>
            </b-table>  
           
        </b-container>    
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

.classname{
    padding: 0px !important;
}

</style>
