<template>
    <div id="app">
    <div class="container">
        <div class="panel panel-sm">
        <!-- <div class="panel-heading"> 
            <h4>CSV Import</h4>
        </div> -->
        <div class="panel-body">
            <div class="form-group">
            <!-- <label for="csv_file" class="control-label col-sm-3 text-right">CSV file to import</label> -->
            <div class="col-sm-9">
                <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
            </div>
            </div>
            <div class="col-sm-offset-3 col-sm-9">
            <!-- <div class="checkbox-inline">
                <label for="header_rows"><input type="checkbox" id="header_rows"> File contains header row?</label>
            </div> -->
            </div>
            
            <div class="col-sm-offset-3 col-sm-9">
            <a href="#" class="btn btn-primary" >Parse CSV</a>
            </div>
            <!-- <table v-if="parse_csv">
            <thead>
                <tr>
                <th v-bind:key="index"
                    v-for="(key2,index) in parse_header"
                    @click="sortBy(key2)"
                    :class="{ active: sortKey == key2 }">
                    {{ key2 | capitalize }}
                    <span class="arrow" :class="sortOrders[key2] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
                </tr>
            </thead> 
            <tr v-bind:key="index"
                v-for="(csv, index) in parse_csv">
                <td v-bind:key="index2" v-for="(key2, index2) in parse_header">
                {{csv[key2]}}
                </td>
            </tr>
            
            </table> -->
        </div>
        </div>
        
    </div>
    </div>
</template>

<script>

import eventBus from '../main'

export default {
      data() {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders:{},
      sortKey: '',
      titles:'',
    };
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    changeTitle: function(){
    // this.$emit('changeTitle', 'Vue Ninjas');
    
    },
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv){
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",") 
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      
      lines.map(function(line, indexLine){
        if (indexLine < 1) return // Jump header line
        
        var obj = {}
        var currentline = line.split(",")
        
        headers.map(function(header, indexHeader){
          obj[header] = currentline[indexHeader]
        })
        
        result.push(obj)
      })
      
      result.pop() // remove the last item because undefined values
      
      return result // JavaScript object
    },
    loadCSV(e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv)
          eventBus.$emit('titleChanged', csv);
        };
        reader.onerror = function(evt) {
          if(evt.target.error.name == "NotReadableError") {
            alert("Canno't read file !");
          }
        };
       
      } else {
        alert('FileReader are not supported in this browser.');
      }
    }
  },

//   computed :{
//       parse_csv2(){
//         var e = '../assets/dataSql.csv'
//         var reader = new FileReader();
//         var csv = null;
//         reader.readAsText('../assets/dataSql');
//         // Handle errors load
//         reader.onload = function(event) {
//         csv = event.target.result;
//         // vm.parse_csv = vm.csvJSON(csv)
//       }
//       parse_csv = cvv;
//       eventBus.$emit();
//       return csv;
//     },
//   },
}
</script>

<style>
    html, body {
  margin: 0;
  padding: 0;
}
body {
  margin: 32px auto;
}
.panel {
  border: 2px solid #dfdfdf;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 0 0;
  margin: 10px;
} 
.panel.panel-sm {
  max-width: 700px;
  margin: 10px auto;
}
.panel-heading {
  border-bottom: 2px solid #dfdfdf;
}
.panel-heading h1, .panel-heading h2, .panel-heading h3, .panel-heading h4, .panel-heading h5, .panel-heading h6 {
  margin: 0;
  padding: 0;
}
.panel-body .checkbox-inline {
  padding: 15px 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>