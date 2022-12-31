<template>
  <div class="hg-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hg-radio-group",
  props: {
    value: [String, Number, Boolean],
  },
  provide() {
    return {
      groupValue: this,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
