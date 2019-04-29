<template>
  <div id="my-container">
    <div class="my-3">
      <b-button-group>
        <b-button 
          :id="'popover-reactive-'+idBouton" 
          style="background-color:Teal"
          variant="primary" 
          ref="button"
          @click="popoverShow = !popoverShow"
          
        >
          {{msgBouton}}
        </b-button>
        <b-button variant="outline-info"  title="Mettre à jour la table">
           <img src="../assets/icon-refresh-128.png" height="22"/>
        </b-button>
      </b-button-group>
      
    </div>


    <b-popover
      :target="'popover-reactive-'+idBouton"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      container="auto"
      ref="popover"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden">

      <div>
        <b-form-group
          label="Tâche"
          label-for="popover-input-1"
          label-cols="3"
          :state="input1state"
          class="mb-1"
          description="Signalez la tâche en retard"
          invalid-feedback="This field is required">
          <b-form-input
            ref="input1"
            id="popover-input-1"
            v-model="input1"
            :state="input1state"
            size="sm">
          </b-form-input>
        </b-form-group>
        <b-button @click="onClose" size="sm" variant="danger">Cancel</b-button>
        <b-button @click="onOk" size="sm" variant="info" style="background-color: Teal">Ok</b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        input1state: null,
        input2: '',
        input2state: null,
        options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
        input1Return: '',
        input2Return: '',
        popoverShow: false
      }
    },

    props: {
      msgBouton : String,
      idBouton : String
    },
    watch: {
      input1(val) {
        if (val) {
          this.input1state = true
        }
      },
      input2(val) {
        if (val) {
          this.input2state = true
        }
      }
    },
    methods: {
      onClose() {
        this.popoverShow = false
      },
      onOk() {
        if (!this.input1) {
          this.input1state = false
        }
        if (!this.input2) {
          this.input2state = false
        }
        if (this.input1 && this.input2) {
          this.onClose()
          // Return our popover form results
          this.input1Return = this.input1
          this.input2Return = this.input2
        }
      },
      onShow() {
        this.input1 = ''
        this.input2 = ''
        this.input1state = null
        this.input2state = null
        this.input1Return = ''
        this.input2Return = ''
      },
      onShown() {
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        this.$nextTick(() => {
          this.$nextTick(() => {
            ;(ref.$el || ref).focus()
          })
        })
      }
    }
  }
</script>
