<template>
  <div class="main">
    <v-container class="grey lighten-5">
      <v-row justify="space-around">
        <v-col cols="4">
          <v-card class="pa-2" outlined tile>
            <v-card-title>
              Left Users
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchLeft"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="this.main.leftUsers"
              :search="searchLeft"
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn fab dark small color="primary">
                  <v-icon small @click="editUsersLeft(item)">
                    mdi-plus
                  </v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-2" outlined tile>
            <v-card-title>
              Right Users
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchRight"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="this.main.rightUsers"
              :search="searchRight"
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn fab dark small color="primary">
                  <v-icon small @click="editRightLeft(item)">
                    mdi-minus
                  </v-icon>
                </v-btn>
              </template></v-data-table
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
// import { MainState, User } from "../store/main/types";

const MainAction = namespace("main", Action);
const HistoryAction = namespace("history", Action);
const MainGetter = namespace("main", Getter);
const HistoryGetter = namespace("history", Getter);

@Component
export default class Main extends Vue {
  @State("main") main: any;
  @State("history") history: any;
  @MainGetter getNames: any;
  @HistoryGetter getHistory: any;
  @MainAction fetchData: any;
  @MainAction usersLeftEdit: any;
  @MainAction usersRightEdit: any;
  @HistoryAction setHistoryAllData: any;
  @HistoryAction addingHistoryAllData: any;
  @HistoryAction deletingHistoryAllData: any;

  constructor() {
    super();
  }

  data() {
    return {
      searchLeft: "",
      searchRight: "",
      headers: [
        {
          text: "Names",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "", value: "actions", align: 'right', sortable: false }
      ]
    };
  }

  created() {
    if (this.main.leftUsers.length === 0) {
      this.fetchData();
    }
  }

  public editUsersLeft(item: any): void {
    const leftUsers = this.main.leftUsers;
    const rightUsers = this.main.rightUsers;
    const editedIndex = this.main.leftUsers.indexOf(item);

    leftUsers.splice(editedIndex, 1);
    rightUsers.indexOf(item) === -1
      ? rightUsers.push(item)
      : console.log("This user already exists");

    this.usersLeftEdit(leftUsers, leftUsers);
    this.usersRightEdit(rightUsers, rightUsers);

    const d: Date = new Date();
    item.date = d;
    item.action = "Adding";

    this.history.historyAll.push(item);
    this.history.historyAdding.push(item);
    
    this.setHistoryAllData(this.history, item);
    this.addingHistoryAllData(this.history, item);
  }

  public editRightLeft(item: any): void {
    const leftUsers = this.main.leftUsers;
    const rightUsers = this.main.rightUsers;
    const editedIndex = this.main.rightUsers.indexOf(item);

    rightUsers.splice(editedIndex, 1);
    leftUsers.indexOf(item) === -1
      ? leftUsers.push(item)
      : console.log("This user already exists");

    this.usersLeftEdit(leftUsers, leftUsers);
    this.usersRightEdit(rightUsers, rightUsers);

    const d: Date = new Date();
    item.date = d;
    item.action = "Deleting";

    this.history.historyAll.push(item);
    this.history.historyDeleting.push(item);
    
    this.setHistoryAllData(this.history, item);
    this.deletingHistoryAllData(this.history, item);
  }
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
