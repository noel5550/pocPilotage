<template>
    <div>
		<table id='tableEntete'>
		<tr>
			<td>
                <img alt="Ulog logo" 
                    src="../assets/ulog_logo.png" 
                    v-bind:style="{height:hauteurImages+'px'}"
                >
            </td>
			<td>
				<div>
				<b-navbar type="light" variant="light">
					<b-nav-form>
					<b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
					<b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>
				</b-navbar>
				</div>
			</td>
			<!-- <td v-if="avecPicker"><DatePicker /></td> -->
			<!-- <td><BoutonGoogle /></td> -->
		</tr>
		</table>

		<hr>
	</div>
</template>

<script>

export default {
    name: "Entete",
    data(){
        return{
					header : ""
        }
    },

    methods: {
		myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			} else {
				header.classList.remove("sticky");
			}
		}
    },

    components: {

    },

    props: {
        hauteurImages: Number,
	},
	
	computed: {

	},
}

</script>

<style>
table {
	border-collapse: collapse;
	width: 100%;
}

table, th, td {
	background-color: #FFFFFF;
	border: 0px;
}

#tableEntete {
	table-layout: fixed;
}

hr {
	border: none;
	width: 100%;
	height: 50px;
	border-bottom: 0px;
	box-shadow: 0 25px 20px -20px #333;
	margin: -50px auto 10px;
}
</style>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}
.content {
  padding: 16px;
}
.sticky + .content {
  padding-top: 102px;
}
</style>