<template>
  <div
    :id="id"
    class="branch"
    v-bind:class="[isActive ? 'centered-branch' : '']"
  ></div>
</template>

<script>
export default {
  name: "Branch",
  props: {
    isActive: {
      default: false,
      type: Boolean,
    },
    id: String,
    generation: Number,
  },
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
.branch {
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
