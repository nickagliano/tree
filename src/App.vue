<template>
  <div id="app" ref="container">
    <branch ref="branch0"> </branch>
  </div>
</template>

<script>
import Node from "./components/Node.vue";
import Branch from "./components/Branch.vue";
// import names from "./assets/names.json";
import names from "./assets/shorter_names.json";
import Vue from "vue";

export default {
  name: "App",
  components: {
    Branch,
  },
  props: {},
  data() {
    return {
      names: names,
      count: 1,
      generation: 1,
      branches: [],
    };
  },
  methods: {
    buildNewNode: function (name) {
      var ComponentClass = Vue.extend(Node);
      var newNode = new ComponentClass({
        propsData: {
          ref: "node" + this.count,
          name: name,
          generation: this.generation,
        },
      });

      return newNode;
    },
    buildNewBranch: function () {
      var ComponentClass = Vue.extend(Branch);

      var newBranch = new ComponentClass({
        propsData: {
          ref: "branch" + this.generation,
          generation: this.generation,
        },
      });

      return newBranch;
    },
    buildTree: function (self) {
      let currentBranch = this.$refs.branch0.$el;

      this.names.forEach(function (name) {
        var isPowerOfTwo =
          (Math.log(self.count) / Math.log(2)) % 1 === 0 && self.count !== 1;

        if (isPowerOfTwo) {
          self.generation += 1;
          // create new branch!
          var newBranch = self.buildNewBranch();
          newBranch.$mount();
          self.$refs.container.appendChild(newBranch.$el);

          currentBranch = newBranch.$el;
        }
        var newNode = self.buildNewNode(name);
        newNode.$mount();
        currentBranch.appendChild(newNode.$el);
        self.count += 1;
      });
    },
  },
  mounted() {
    var self = this;

    this.buildTree(self);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: hidden; /* Hide vertical scrollbar */
}
li {
  list-style: none;
}
</style>
