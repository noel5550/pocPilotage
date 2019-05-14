<template>
	<b-container fluid>

    <div id="gridPrincipal" class="wholePage">
	
        <div id="Entete" ref="Entete" >
            <EnteteApp :hauteurImages="45"/>
        </div>
		<div >
			<!-- <csvImporter></csvImporter> -->
		<!-- <div v-on:changeTitle="updateTitle($event)"> -->
		<b-tabs content-class="mt-3" align="center">
			<b-tab title="Tous" active>
			<b-container fluid style="padding : 0 !important; ">
				<!-- <div id="blanc" ref= "blanc"/> -->
				<div class="row">

					<b-col sm="4" id="PDM" style="padding: 3px !important">
					<TableGrid :libActiv="libActiv[0]" :typeGrid= 1 :gridLib="titles[0]" :activite="activites[0]"></TableGrid>       
					</b-col>

					<b-col sm="4" id="BOU" style="padding: 3px !important">
					<TableGrid :libActiv="libActiv[1]" :typeGrid= 2 :gridLib="titles[1]" :activite="activites[1]"></TableGrid>
					</b-col>


					<b-col sm="4" id="FLF" style="padding: 3px !important">
					<TableGrid :libActiv="libActiv[2]" :typeGrid= 3 :gridLib="titles[2]" :activite="activites[2]"></TableGrid>
					</b-col>
				</div>
			</b-container>
			</b-tab>
			<b-tab :title="titles[0]">
				<!-- <div id="blanc" ref= "blanc"/> -->
				<TableGrid :libActiv="libActiv[0]" :typeGrid= 1 :gridLib="titles[0]" :activite="activites[0]"></TableGrid>
			</b-tab>
    		<b-tab :title="titles[1]">
				<!-- <div id="blanc" ref= "blanc"/> -->
				<TableGrid :libActiv="libActiv[1]" :typeGrid= 2 :gridLib="titles[1]" :activite="activites[1]"></TableGrid>
			</b-tab>
    		<b-tab :title="titles[2]">
				<!-- <div id="blanc" ref= "blanc"/> -->
				<TableGrid :libActiv="libActiv[2]" :typeGrid= 3 :gridLib="titles[2]" :activite="activites[2]"></TableGrid>
			</b-tab>

			

			
		</b-tabs>
		<!-- </div> -->
       
		 <b-container fluid>
			<div id="MenuSlideDroite" ref="MenuSlideDroite">

				<SlideMenu/>
			</div>
			<div id="SliderDroite" ref="SliderDroite">
				<img :src='placeholderD' @click="slideMenuDroite()">
			</div>
		</b-container>
		
			
		 <b-container fluid>
			<div id="MenuSlideGauche" ref="MenuSlideGauche">
				<historisation>

				</historisation>
			</div>
			<div id="SliderGauche" ref="SliderGauche">
				<img :src='placeholderG' @click="slideMenuGauche()">
			</div>
		 </b-container>
		</div>
		

    </div>
	</b-container>
</template>

<script>
import EnteteApp from './components/Entete.vue';
import SlideMenu from './components/SlideMenu.vue';
import TableGrid from './components/TableGrid.vue';
import csvImporter from './components/csvImporter.vue';
import historisation from './components/Historisation.vue';

export default {
	name: "gridPrincipal",
    data(){
        return{
            placeholderD: require('./assets/sliderOpen.png'),
            menuButtonEtatD: false,

            placeholderG: require('./assets/sliderOpenG.png'),
			menuButtonEtatG: false,
			
			titles: [],
			activites: [],
			libActiv: [],
        }
    },
    
    components:{
        EnteteApp,
		SlideMenu,
		TableGrid,
		csvImporter,
		historisation,
    },

    methods: {
	  updateTitle: function(updatedTitle){
        this.titles = updatedTitle;
      },
        activerMenuDroite: async function() {
			this.$refs.MenuSlideDroite.style.right = "0px";
			this.$refs.MenuSlideDroite.style.boxShadow = "-25px 0px 20px -20px #333333"
			this.$refs.SliderDroite.style.right = "300px";
			this.placeholderD = require("./assets/sliderClose.png");
        },
        fermerMenuDroite: function() {
			this.$refs.MenuSlideDroite.style.right = "-300px";
			this.$refs.MenuSlideDroite.style.boxShadow = "0 0 0 0 #333333"
			this.$refs.SliderDroite.style.right = "0px";
			this.placeholderD = require("./assets/sliderOpen.png");
        },
        slideMenuDroite: function() {
			if(this.menuButtonEtatD) {
				this.fermerMenuDroite();
			} else {
				this.activerMenuDroite();
			}
			this.menuButtonEtatD = !this.menuButtonEtatD;
        },
        

        activerMenuGauche: async function() {
			this.$refs.MenuSlideGauche.style.left = "0px";
			this.$refs.MenuSlideGauche.style.boxShadow = "25px 0px 20px -20px #333333"
			this.$refs.SliderGauche.style.left = "300px";
			this.placeholderG = require("./assets/sliderCloseG.png");
        },
        fermerMenuGauche: function() {
			this.$refs.MenuSlideGauche.style.left = "-300px";
			this.$refs.MenuSlideGauche.style.boxShadow = "0 0 0 0 #333333"
			this.$refs.SliderGauche.style.left = "0px";
			this.placeholderG = require("./assets/sliderOpenG.png");
        },
        slideMenuGauche: function() {
			if(this.menuButtonEtatG) {
				this.fermerMenuGauche();
			} else {
				this.activerMenuGauche();
			}
			this.menuButtonEtatG = !this.menuButtonEtatG;
		}
	},
	created(){
		this.titles = this.$store.getters.getHeaders;
		this.activites = this.$store.getters.getLibele;
		this.libActiv = this.$store.getters.getLibActiv;
	},

};
</script>


<style lang="scss">
  $ag-icons-path: "../node_modules/ag-grid-community/src/styles/ag-theme-balham/icons/";
  $odd-row-background-color: #CFD8DC;
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

	body{
		overflow-x: hidden;
	}

	#gridPrincipal {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.wholePage{
		width: 100%;
	}

	#blanc {
		border: 0px;
		width: 100%;
		height: 5px;
		background: #FFFFFF;
		position: fixed;
		top: 25px;
		left: 0px;
		display: none;
		z-index: 1;
	}

	#MenuSlideDroite {
		background: #FFFFFF;
		position: fixed;
		text-align: center;
		margin-left: 8px;
		margin-right: 0px;
		top: 0px;
		padding-top: 60px;
		right: -300px;
		width: 300px;
		height: 100%;
		box-shadow: 0 0 0 0 #333333;
		transition: all .7s ease-out;
		z-index: 4;
	}

	#SliderDroite {
		position: fixed;
		bottom: 30px;
		right: 0px;
		-webkit-filter: drop-shadow(-20px 0px 15px #333333);
		filter: drop-shadow(-20px 0px 15px #333333);
		transition: all .7s ease-out;
		z-index: 4;
		cursor: pointer;
	}


	#MenuSlideGauche {
		background: #FFFFFF;
		position: fixed;
		text-align: center;
		margin-left: 0px;
		margin-right: 8px;
		top: 0px;
		padding-top: 60px;
		left: -300px;
		width: 300px;
		height: 100%;
		box-shadow: 0 0 0 0 #333333;
		transition: all .7s ease-out;
		z-index: 4;
	}

	#SliderGauche {
		position: fixed;
		bottom: 30px;
		left: 0px;
		-webkit-filter: drop-shadow(-20px 0px 15px #333333);
		filter: drop-shadow(20px 0px 15px #333333);
		transition: all .7s ease-out;
		z-index: 4;
		cursor: pointer;
	}

	// #BOU {

	// overflow-y:scroll; 
    // position:relative;
    // height: 100vh;
	// }

	// #PDM {
	// overflow-y:scroll; 
    // position:relative;
    // height: 100vh;
	// }

	// #FLF {
	// overflow-y:scroll; 
    // position:relative;
    // height: 100vh;
	// }
</style>
