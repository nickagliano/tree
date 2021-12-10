<template>
  <div
    class="node"
    v-bind:class="[isActive ? 'centered-node' : '']"
    v-bind:style="{ transform: 'scale(' + 1 / generation + ')' }"
  >
    <!-- <svg>
      <circle
        id="circle"
        cx="28"
        cy="28"
        r="25"
        stroke="#2c3e50"
        fill="none"
        stroke-width="4"
      />
    </svg> -->
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Node",
  props: {
    name: {
      default: "Nick",
      type: String,
    },
    isActive: {
      default: false,
      type: Boolean,
    },
    generation: Number,
  },
  computed: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered-node {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
svg {
  height: 104px;
  width: 104px;
  position: absolute;
  right: 8%;
  bottom: 20%;
}
.node {
  transform: scale(v-bind(1 / generation));
}
</style>
