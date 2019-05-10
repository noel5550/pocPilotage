import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bigTable: [
      {
        libele: "Activité 1",
        type: "PDV",
        jour: "Produits de la Mer Soir",
        tab: [
          { lib: "Tache Jalon 1", temps: 5, d1: "test", d2: 3, d3: "3545", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(), sousTaches: [
            { lib: "Tache 2", temps: 2, d1: "...", d2: 3, d3: "dddd", etat: 0, jour:new Date().toLocaleDateString() },
            {
              lib: "Tache 3",
              temps: 10,
              d1: "bzefz",
              d2: 10,
              d3: "...",
              etat: 2,
              jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 0, d3: "...", etat: 1, jour:new Date().toLocaleDateString()},
            { lib: "Tache 5", temps: 3, d1: "...", d2: 6, d3: "...", etat: 0, jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString()},

          ]},
          { lib: "Tache Jalon 2", temps: 8, d1: "...", d2: 5, d3: "...", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [
            { lib: "Tache 7", temps: 12, d1: "...", d2: 12, d3: "...", etat: 2, jour:new Date().toLocaleDateString() },
            { lib: "Tache 8", temps: 7, d1: "...", d2: 6, d3: "...", etat: 1, jour:new Date(new Date().setDate(new Date().getDate())).toLocaleDateString() }

          ]},
        ]
      },
      {
        libele: "Activité 1",
        type: "PDV",
        jour: "Produits de la Mer Matin",
        tab: [
          { lib: "Tache Jalon 1", temps: 5, d1: "test", d2: 3, d3: "3545", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()+2)).toLocaleDateString(), sousTaches: [
            { lib: "Tache 2", temps: 2, d1: "...", d2: 4, d3: "dddd", etat: 0, jour:new Date().toLocaleDateString() },
            { lib: "Tache 7", temps: 12, d1: "...", d2: 12, d3: "...", etat: 2, jour:new Date().toLocaleDateString() },
          ]},
          { lib: "Tache Jalon 2", temps: 7, d1: "...", d2: 6, d3: "...", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(), sousTaches:[] }
        ]
      },
      {
        libele: "Activité 1",
        type: "FRN",
        jour: "Produits de la Mer Export",
        tab: [
          { lib: "Tache Jalon 1", temps: 5, d1: "test", d2: 3, d3: "3545", etat: 1, jour:new Date().toLocaleDateString(), sousTaches:[
            { lib: "Tache 2", temps: 2, d1: "...", d2: 4, d3: "dddd", etat: 0 , jour:new Date().toLocaleDateString()},
            {
              lib: "Tache 3",
              temps: 10,
              d1: "bzefz",
              d2: 10,
              d3: "...",
              etat: 2, jour:new Date().toLocaleDateString()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 0, d3: "...", etat: 1, jour:new Date().toLocaleDateString() },

          ] },
          { lib: "Tache Jalon 2", temps: 3, d1: "...", d2: 8, d3: "...", etat: 0, jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(),sousTaches: [
            { lib: "Tache 6", temps: 8, d1: "...", d2: 5, d3: "...", etat: 1 , jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString()},

          ] },
        ]
      },
      
      {
        libele: "Activité 1",
        type: "FRN",
        jour: "Produits de la Mer Allotie",
        tab: [
          {
            lib: "Tache Jalon 3",
            temps: 10,
            d1: "bzefz",
            d2: 10,
            d3: "...",
            etat: 2, jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(),
            sousTaches: []
          },
          { lib: "Tache Jalon 4", temps: 3, d1: "...", d2: 0, d3: "...", etat: 1, jour:new Date().toLocaleDateString(), sousTaches: [] },
          { lib: "Tache Jalon 5", temps: 3, d1: "...", d2: 6, d3: "...", etat: 0, jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(), sousTaches: [] },
          { lib: "Tache Jalon 6", temps: 8, d1: "...", d2: 5, d3: "...", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [] },
          { lib: "Tache Jalon 7", temps: 12, d1: "...", d2: 12, d3: "...", etat: 2, jour:new Date().toLocaleDateString(), sousTaches: [] },
          { lib: "Tache Jalon 8", temps: 7, d1: "...", d2: 6, d3: "...", etat: 1, jour:new Date().toLocaleDateString(), sousTaches: [] }
        ]
      },
      {
        libele: "Activité 2",
        type: "PDV",
        jour: "Boucherie Soir",
        tab: [
          { lib: "Tache Jalon 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1, jour:new Date().toLocaleDateString(), sousTaches: [
            { lib: "Tache 2", temps: 2, d1: "...", d2: 4, d3: "...", etat: 0, jour:new Date().toLocaleDateString() },
            {
              lib: "Tache 3",
              temps: 17,
              d1: "sfzef",
              d2: 20,
              d3: "...",
              etat: 0, jour:new Date().toLocaleDateString()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2, jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() },
            { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736", etat: 1, jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() }

          ] },
        ]
      },
      {
        libele: "Activité 2",
        type: "PDV",
        jour: "Boucherie Matin",
        tab: [
          { lib: "Tache Jalon 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [
            {
              lib: "Tache 3",
              temps: 17,
              d1: "sfzef",
              d2: 20,
              d3: "...",
              etat: 0,
              jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString()
            },

          ] },
          { lib: "Tache Jalon 2", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [
            { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736",  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), etat: 1 }

          ] },
        ]
      },
      {
        libele: "Activité 2",
        type: "PDV",
        jour: "Boucherie Allotie",
        tab: [
          { lib: "Tache Jalon 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1, jour:new Date().toLocaleDateString(), sousTaches: []},
          { lib: "Tache Jalon 2", temps: 2, d1: "...", d2: 4, d3: "...", etat: 0,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [
            {
              lib: "Tache 3",
              temps: 17,
              d1: "sfzef",
              d2: 20,
              d3: "...",
              etat: 0,
              jour:new Date(new Date().setDate(new Date().getDate()+2)).toLocaleDateString()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date().toLocaleDateString() },
            { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736", etat: 1,  jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString()}

          ] },
        ]
      },
      {
        libele: "Activité 2",
        type: "FRN",
        jour: "Boucherie Export",
        tab: [
          { lib: "Tache Jalon 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1,  jour:new Date().toLocaleDateString(), sousTaches: []},
          { lib: "Tache Jalon 2", temps: 2, d1: "...", d2: 4, d3: "...", etat: 0,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [
            {
              lib: "Tache 3",
              temps: 17,
              d1: "sfzef",
              d2: 20,
              d3: "...",
              etat: 0,
              jour:new Date()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() },
            { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736", etat: 1,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() }

          ] },
        ]
      },
      {
        libele: "Activité 2",
        type: "FRN",
        jour: "Boucherie Porc",
        tab: [
          { lib: "Tache Jalon 1", temps: 15, d1: "...", d2: 12, d3: "...", etat: 1,  jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(), sousTaches: []},
          { lib: "Tache Jalon 2", temps: 2, d1: "...", d2: 4, d3: "...", etat: 0,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), sousTaches: [
            {
              lib: "Tache 3",
              temps: 17,
              d1: "sfzef",
              d2: 20,
              d3: "...",
              etat: 0,
              jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString()
            },
            { lib: "Tache 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date().toLocaleDateString() },
            { lib: "Tache 5", temps: 5, d1: "...", d2: 4, d3: "68736", etat: 1,  jour:new Date().toLocaleDateString() }

          ] },
          { lib: "Tache Jalon 3", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [
            { lib: "Tache 7", temps: 5, d1: "...", d2: 4, d3: "68736",  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), etat: 1 }

          ] },
          { lib: "Tache Jalon 4", temps: 3, d1: "...", d2: 3, d3: "...", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [
            { lib: "Tache 6", temps: 5, d1: "...", d2: 4, d3: "68736",  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), etat: 1 },
            { lib: "Tache 6", temps: 5, d1: "...", d2: 4, d3: "68736",  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString(), etat: 1 }


          ] },

        ]
      },
      {
        libele: "Activité 3",
        type: "PDV",
        jour: "Fruits et Légumes soir",
        tab: [
          { lib: "Tache Jalon 1", temps: 6, d1: "...", d2: 6, d3: "555", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [
            { lib: "Tache 2", temps: 7, d1: "rzarze", d2: 6, d3: "...", etat: 1,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() },
            { lib: "Tache 3", temps: 2, d1: "...", d2: 9, d3: "...", etat: 0,  jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString() }

          ] },
        ]
      },
      {
        libele: "Activité 3",
        type: "PDV",
        jour: "Fruits et Légumes matin",
        tab: [
          { lib: "Tache Jalon 1", temps: 6, d1: "...", d2: 6, d3: "555", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [

            { lib: "Tache 3", temps: 2, d1: "...", d2: 9, d3: "...", etat: 0,  jour:new Date(new Date().setDate(new Date().getDate()+1)).toLocaleDateString() }
          ] },
        ]
      },
      {
        libele: "Activité 3",
        type: "FRN",
        jour: "Fruits et Légumes Allotie",
        tab: [
          { lib: "Tache Jalon 1", temps: 6, d1: "...", d2: 6, d3: "555", etat: 2,  jour:new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString(), sousTaches: [

            { lib: "Tache 3", temps: 2, d1: "...", d2: 9, d3: "...", etat: 0,  jour:new Date().toLocaleDateString() }
          ] },
        ]
      },
      {
        libele: "Activité 3",
        type: "FRN",
        jour: "Fruits et Légumes Export",
        tab: [
          { lib: "Tache Jalon 1", temps: 6, d1: "...", d2: 6, d3: "555", etat: 2,  jour:new Date().toLocaleDateString(), sousTaches: [

            { lib: "Tache 3", temps: 2, d1: "...", d2: 9, d3: "...", etat: 0,  jour:new Date().toLocaleDateString() }
          ] },
        ]
      },
    ],
    nomActivite: [ ],
    numeroActivite: ["Activité 1", "Activité 2", "Activité 3",],

    headers: [{ nom: "Libellé" }, { nom: "Temps Restant" }, { nom: "Etat" }],

    sidebarOpen: false,

    fields: [
      { key: "lib", sortable: true },
      { key: "temps", sortable: true },
      { key: "details", sortable: false },
      { key: "etat", sortable: true },
      { key: "jour", sortable: true},
    ]
  },

  getters: {
    sidebarOpen: state => state.sidebarOpen,

    getListeJours: state =>(activite) => {
      var listeJours = [];
      state.bigTable.forEach(element => {
        if(element.libele===activite){
          listeJours.push(element.jour);
        }
      });
      return listeJours;
    },

    getFields(state) {
      return state.fields;
    },

    // getRowData1(state) {
    //   var dataRet = state.bigTable[0].tab;
    //   dataRet.forEach(element => {
    //     if (element.etat == 0) {
    //       if(element.temps<element.d2+(element.d2/2)){
    //         element._rowVariant = "danger";
    //       }else{
    //         element._rowVariant = "warning";
    //       }
    //       element.etat = "En retard";
    //     } else if (element.etat == 1) {
    //       element.etat = "En cours";
    //     } else if (element.etat == 2) {
    //       element.etat = "A temps";
    //       element._rowVariant = "success";
    //     }
    //     element.sousTaches.forEach(elem=>{
    //       if (elem.etat == 0) {
    //         if(element.temps<element.d2+(element.d2/2)){
    //           element._rowVariant = "danger";
              
    //         }else{
    //           element._rowVariant = "warning";
    //         }
    //         // elem._rowVariant = "danger";
    //         elem.etat = "En retard";
    //       } else if (elem.etat == 1) {
    //         elem.etat = "En cours";
    //       } else if (elem.etat == 2) {
    //         elem.etat = "A temps";
    //         elem._rowVariant = "success";
    //       }
    //     });
    //   });

    //   return dataRet;
    // },
    // getRowData2(state) {
    //   var dataRet = state.bigTable[1].tab;
    //   dataRet.forEach(element => {
    //     if (element.etat == 0) {
    //       element._rowVariant = "danger";
    //       element.etat = "En retard";
    //     } else if (element.etat == 1) {
    //       element.etat = "En cours";
    //     } else if (element.etat == 2) {
    //       element.etat = "A temps";
    //       element._rowVariant = "success";
    //     }
    //     element.sousTaches.forEach(elem=>{
    //       if (elem.etat == 0) {
    //         elem._rowVariant = "danger";
    //         elem.etat = "En retard";
    //       } else if (elem.etat == 1) {
    //         elem.etat = "En cours";
    //       } else if (elem.etat == 2) {
    //         elem.etat = "A temps";
    //         elem._rowVariant = "success";
    //       }
    //     });
    //   });

    //   return dataRet;
    // },

    // getRowData3(state) {
    //   var dataRet = state.bigTable[2].tab;
    //   dataRet.forEach(element => {
    //     if (element.etat == 0) {
    //       element._rowVariant = "danger";
    //       element.etat = "En retard";
    //     } else if (element.etat == 1) {
    //       element.etat = "En cours";
    //     } else if (element.etat == 2) {
    //       element.etat = "A temps";
    //       element._rowVariant = "success";
    //     }
    //     element.sousTaches.forEach(elem=>{
    //       if (elem.etat == 0) {
    //         elem._rowVariant = "danger";
    //         elem.etat = "En retard";
    //       } else if (elem.etat == 1) {
    //         elem.etat = "En cours";
    //       } else if (elem.etat == 2) {
    //         elem.etat = "A temps";
    //         elem._rowVariant = "success";
    //       }
    //     });
    //   });

    //   return dataRet;
    // },

     maxDate: state => (activite, ligne, jour) => {
      var res = new Date();
      for(let elem of state.bigTable){
        if(elem.libele==activite && elem.jour==jour){
          for(let element of  elem.tab){
            if(element.lib==ligne){
              res=element.temps;
              break;
            }
          }
        }
      }

      return res.toLocaleDateString("en-US");
     },

     getJour: state => (activite, ligne, jour) => {
      var res = null;
      for(let elem of state.bigTable){
        if(elem.libele==activite && elem.jour==jour){
          for(let element of  elem.tab){
            if(element.lib==ligne){
              res=element.jour;
              break;
            }
          }
        }
      }

      return res;
     },

     currentDate: state => (activite, ligne, jour) => {
      var res = null;
      for(let elem of state.bigTable){
        if(elem.libele==activite && elem.jour==jour){
          for(let element of  elem.tab){
            if(element.lib==ligne){
              res=element.d2;
              break;
            }
          }
        }
      }

      return res;
     },


    // maxDate: state => (table, ligne) => {
    //   var res = null;
    //   state.bigTable[table].tab.forEach(elem => {
    //     if (elem.lib == ligne) {
    //       res = elem.temps;
    //     }
    //   });
    //   return res;
    // },

    // currentDate: state => (table, ligne) => {
    //   var res = null;
    //   state.bigTable[table].tab.forEach(elem => {
    //     if (elem.lib == ligne) {
    //       res = elem.d2;
    //     }
    //   });
    //   return res;
    // },
    getHeaders(state){
      return state.nomActivite;
    },

    getType: state => (libele, jour) =>{
      var type = "";
      state.bigTable.forEach(element => {
        if(element.libele==libele && element.jour==jour){
          type = element.type;
        }
      });
      return type;
    },

    getLibele(state){
      return state.numeroActivite;
    }, 

    getRowData: state => (libele, jour) => {
      var res = null;
      state.bigTable.forEach(element => {
        if(element.libele==libele && element.jour==jour){
          res = element.tab;
          res.forEach(element2 => {
            if (element2.etat == 0) {
              if(element2.temps*2<=element2.d2){
                  element2._rowVariant = "danger";
                }else{
                  element2._rowVariant = "warning";
                }
              // element2._rowVariant = "danger";
              element2.etat = "En retard";
            } else if (element2.etat == 1) {
              element2.etat = "En cours";
            } else if (element2.etat == 2) {
              element2.etat = "A temps";
              element2._rowVariant = "success";
            }
            element2.sousTaches.forEach(elem=>{
              if(element2.etat == "En retard"){
                elem._rowVariant = "danger";
                elem.etat = "Jalon en retard";
              }else{

                if (elem.etat == 0) {
                  if(elem.temps*2<=elem.d2){
                    elem._rowVariant = "danger";
                  }else{
                    elem._rowVariant = "warning";
                  }
                  // elem._rowVariant = "danger";
                  elem.etat = "En retard";
                } else if (elem.etat == 1) {
                  elem.etat = "En cours";
                } else if (elem.etat == 2) {
                  elem.etat = "A temps";
                  elem._rowVariant = "success";
                }
              }
            });
            
          });
        }
      });
      
      return res;
    },

    getNbTaches: state => (libele, jour) =>{
      var nbTaches = 0;
      state.bigTable.forEach(element => {
        if(element.libele==libele && element.jour==jour){
          nbTaches = element.tab.length;
          
        }
      });
      return nbTaches;
    },

    getNbRetards: state => (libele, jour) =>{
      var nbTaches = 0;
      state.bigTable.forEach(element => {
        if(element.libele==libele && element.jour==jour){
          element.tab.forEach(element2 => {
            if (element2.etat == "En retard") {
              ++nbTaches;
            }
            element2.sousTaches.forEach(elem=>{
              if(elem.etat=="En retard" || elem.etat=="Jalon en retard" ){
                ++nbTaches;
              }
            });
          });
        }
      });
      return nbTaches;
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
    },
    populate(){
      //insert d'une base/csv les données
      //pour l'instant c'est constant
      var headers = ['Produits de la Mer', 'Boucherie', 'Fruits & Légumes Frais' ]
      headers.forEach(element => {
        this.state.nomActivite.push(element);
      });
    }
  }
});
