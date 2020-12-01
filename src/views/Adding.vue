<template>
  <div class="history">
    <v-container class="grey lighten-5">
      <v-row justify="space-around">
        <v-col cols="10">
          <template>
            <v-data-table
              dense
              :headers="headers"
              :items="this.history.historyAdding"
              :item-key="this.getPseudoRandom()"
              class="elevation-1"
              hide-default-footer
            >
            </v-data-table>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const HistoryGetter = namespace("history", Getter);

@Component
export default class History extends Vue {
  @State("history") history: any;
  @HistoryGetter getHistory: any;

  constructor() {
    super();
  }

  data() {
    return {
      headers: [
        { text: "Id", sortable: false, value: "id" },
        {
          text: "Name",
          sortable: false,
          value: "name"
        },
        { text: "Date", value: "date", sortable: false }
      ]
    };
  }

  public getPseudoRandom(): string {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }
}
</script>
