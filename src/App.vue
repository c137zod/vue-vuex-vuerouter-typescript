<template>
  <v-app>
    <div id="nav">
      <v-container class="grey lighten-5">
        <v-row justify="space-around">
          <v-col cols="10">
            <router-link to="/">
              <v-btn depressed color="primary">
                Home
              </v-btn>
            </router-link>
            |
            <router-link to="/history">
              <v-btn depressed color="primary">
                History
              </v-btn>
            </router-link>
            |
            <router-link to="/adding">
              <v-btn depressed color="primary">
                History Adding
              </v-btn>
            </router-link>
            |
            <router-link to="/deleting">
              <v-btn depressed color="primary">
                History Deleting
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
