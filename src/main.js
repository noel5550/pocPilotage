import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import { VueCsvImport } from 'vue-csv-import';

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.config.productionTip = false;
export const eventBus = new Vue();

new Vue({
  components: { VueCsvImport },
  el: "#app",
  router,
  store,
  created(){
    this.$store.dispatch('populate');
  },
  render: h => h(App)
});
