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
      generation: 1,
      branches: [],
    };
  },
  methods: {
    buildNewNode: function (name) {
      var ComponentClass = Vue.extend(Node);
      var newNode = new ComponentClass({
        propsData: { ref: "node" + this.generation, name: name },
      });

      return newNode;
    },
    buildNewBranch: function () {
      var ComponentClass = Vue.extend(Branch);

      var newBranch = new ComponentClass({
        propsData: { ref: "branch" + this.generation },
      });

      return newBranch;
    },
    buildTree: function (self) {
      let currentBranch = this.$refs.branch0.$el;

      this.names.forEach(function (name) {
        var isPowerOfTwo =
          (Math.log(self.generation) / Math.log(2)) % 1 === 0 &&
          self.generation !== 1;

        if (isPowerOfTwo) {
          // create new branch!
          var newBranch = self.buildNewBranch();
          newBranch.$mount();
          self.$refs.container.appendChild(newBranch.$el);

          currentBranch = newBranch.$el;
        }
        var newNode = self.buildNewNode(name);
        newNode.$mount();
        currentBranch.appendChild(newNode.$el);
        self.generation += 1;
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
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
