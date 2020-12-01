<template>
  <div class="hello">
    <template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
    <div v-for="user in this.main.users" :key="user.id">
      <h3>{{ user.id }} {{ user.name }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { MainState } from "../store/main/types";

const namespace = "main";

@Component
export default class Main extends Vue {
  @State("main") main: any;
  @Action("fetchData", { namespace }) fetchData: any;
  @Getter("getNames", { namespace }) getNames: any;

  constructor() {
    super();
  }
  mounted() {
    // fetching data as soon as the component's been mounted
    this.fetchData();
    // console.log(this.$http.get('http://jsonplaceholder.typicode.com/posts'));
  }
  // computed variable based on user's email
  // get email() {
  //   users = this.main && this.main.users;
  //   return users;
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
