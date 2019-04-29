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

        }
    },

    methods: {

    },

    components: {

    },

    props: {
        hauteurImages: Number,
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