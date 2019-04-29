<template>
    <button type="button" :style="styleObject" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)" class="btn btn-outline-info large-button">
        {{ button.text }}
    </button>
</template>

<script>
export default {
   template: '#custom-button',
  data() {
    return {
      button: {
        colorBackd: '#1e2021',
        colorBackdHover: '#000000',
        text: 'Results',
        color: '#d3e0ff',
        colorHover: "#ffffff",
        borderColor: '#d3e0ff',
        borderColorHover: "#ffffff"
      },
      hoverState: false
    };
  },
  computed: {
    styleObject() {
      var modifier = '';
      if (this.hoverState)
        modifier = 'Hover';
        
      return {
        color: this.button['color' + modifier],
        backgroundColor: this.button['colorBackd' + modifier],
        borderColor: this.button['borderColor' + modifier]
      };
    },
  },
  methods: {
    updateHoverState(isHover) {
      this.hoverState = isHover;
    }
  }
}
</script>