<template>
  <div class="hg-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hg-checkbox-group",
  props: {
    value: [Array],
  },
  provide() {
    return {
      checkboxGroup: this,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
