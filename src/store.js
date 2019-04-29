import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bigTable: [
      {
        libele: "Activité 1",
        tab: [
          { lib: "Tache 1", temps: 5, d1: "test", d2: 3, d3: "3545", etat: 1 },
          { lib: "Tache 2", temps: 2, d1: "...", d2: 4, d3: "dddd", etat: 0 },
          {
            lib: "Tache 3",
            temps: 10,
            d1: "bzefz",
            d2: 10,
            d3: "...",
            etat: 2
          },
          { lib: "Tache 4", temps: 3, d1: "...", d2: 0, d3: "...", etat: 1 },
          { lib: "Tache 5", temps: 3, d1: "...", d2: 6, d3: "...", etat: 0 },
          { lib: "Tache 6", temps: 8, d1: "...", d2: 5, d3: "...", etat: 1 },
          { lib: "Tache 7", temps: 12, d1: "...", d2: 12, d3: "...", etat: 2 },
          { lib: "Tache 8", temps: 7, d1: "...", d2: 6, d3: "...", etat: 1 }
        ]
      },
      {
        libele: "Activité 2",
        tab: [
          { lib: "Tache 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1 },
          { lib: "Tache 2", temps: 2, d1: "...", d2: 4, d3: "...", etat: 0 },
          {
            lib: "Tache 3",
            temps: 17,
            d1: "sfzef",
            d2: 20,
            d3: "...",
            etat: 0
          },
          { lib: "Tache 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2 },
          { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736", etat: 1 }
        ]
      },
      {
        libele: "Activité 3",
        tab: [
          { lib: "Tache 1", temps: 6, d1: "...", d2: 6, d3: "555", etat: 2 },
          { lib: "Tache 2", temps: 7, d1: "rzarze", d2: 6, d3: "...", etat: 1 },
          { lib: "Tache 3", temps: 2, d1: "...", d2: 9, d3: "...", etat: 0 }
        ]
      }
    ],

    headers: [{ nom: "Libellé" }, { nom: "Temps Restant" }, { nom: "Etat" }],

    sidebarOpen: false,

    fields: [
      { key: "lib", sortable: true },
      { key: "temps", sortable: true },
      { key: "details", sortable: false },
      { key: "etat", sortable: true }
    ]
  },

  getters: {
    sidebarOpen: state => state.sidebarOpen,

    getFields(state) {
      return state.fields;
    },

    getRowData1(state) {
      var dataRet = state.bigTable[0].tab;
      dataRet.forEach(element => {
        if (element.etat == 0) {
          element._rowVariant = "danger";
          element.etat = "En retard";
        } else if (element.etat == 1) {
          element.etat = "En cours";
        } else if (element.etat == 2) {
          element.etat = "A temps";
          element._rowVariant = "success";
        }
      });

      return dataRet;
    },
    getRowData2(state) {
      var dataRet = state.bigTable[1].tab;
      dataRet.forEach(element => {
        if (element.etat == 0) {
          element._rowVariant = "danger";
          element.etat = "En retard";
        } else if (element.etat == 1) {
          element.etat = "En cours";
        } else if (element.etat == 2) {
          element.etat = "A temps";
          element._rowVariant = "success";
        }
      });

      return dataRet;
    },

    getRowData3(state) {
      var dataRet = state.bigTable[2].tab;
      dataRet.forEach(element => {
        if (element.etat == 0) {
          element._rowVariant = "danger";
          element.etat = "En retard";
        } else if (element.etat == 1) {
          element.etat = "En cours";
        } else if (element.etat == 2) {
          element.etat = "A temps";
          element._rowVariant = "success";
        }
      });

      return dataRet;
    },

    maxDate: state => (table, ligne) => {
      var res = null;
      state.bigTable[table].tab.forEach(elem => {
        if (elem.lib == ligne) {
          res = elem.temps;
        }
      });
      return res;
    },

    currentDate: state => (table, ligne) => {
      var res = null;
      state.bigTable[table].tab.forEach(elem => {
        if (elem.lib == ligne) {
          res = elem.d2;
        }
      });
      return res;
    }
  },
  mutations: {
    toggle_sidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggle_sidebar");
    },

    max: (context, payload) => {
      return context.commit("maxDate", payload);
    },
    current: (context, payload) => {
      return context.commit("currentDate", payload);
    }
  }
});
