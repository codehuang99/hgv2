<template>
  <div class="hg-menuItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hg-menuItem",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hg-menuItem {
  width: 200px;
  background: #000c17;
  margin-bottom: 1px;
  padding: 10px 0;
  border: 1px solid black;
  color: #ffffffa6;
  cursor: pointer;
  text-align: center;
  z-index: 3;
}
.hg-menuItem:hover {
  background: #1890ff;
}
</style>
