<template>
  <div class="hg-sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hg-sidebar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hg-sidebar {
  margin-top: 40px;
  width: 200px;
  background: #fff;
}
</style>
