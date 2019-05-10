<template>
  <div>
    <!-- <p>-------------------------------------------------------------------------------------------</p> -->
    <b-progress  height="2rem">
      <b-progress-bar :max="max" :value="value" :variant= variant >
        Progrès: <strong>{{ value.toFixed(0) }} / {{ max }}</strong>
      </b-progress-bar>
    </b-progress>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
        data: Object,
    },
    computed:{
        // max(){

        //     return this.$store.getters.maxDate(this.tableProg,this.ligneProg, this.jourProg);
        // },
        // value(){
        //     return this.$store.getters.currentDate(this.tableProg,this.ligneProg, this.jourProg);
        // },
        max(){
          return this.data.temps;
        },

        value(){
          return this.data.d2;
        },
        variant(){
            if(this.max<this.value){
                return 'danger';
            }else if(this.max == this.value){ 
                return 'success';
            }else{
                return 'info';
            }
        }
    }
  }
</script>
