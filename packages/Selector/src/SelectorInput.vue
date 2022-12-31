<template>
  <div class="selectorInput">
    <label class="label" for="inputs">{{ label }}</label>
    <input
      type="text"
      class="input"
      :value="value"
      id="inputs"
      @input="handleSearch"
    />
    <span class="iconfont icon-xiala"></span>
  </div>
</template>

<script>
export default {
  name: "selectorInput",
  props: {
    label: {
      type: String,
      default: "请选择",
    },
    value: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSearch(e) {
      this.$emit("searchOptions", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.selectorInput {
  position: relative;
  width: 200px;
  box-sizing: border-box;
}
.label {
  position: absolute;
  top: 11px;
  left: 13px;

  color: gray;
}
span {
  position: absolute;
  top: 15px;
  right: -15px;
}
.input {
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #d9d9d9;
  padding-left: 18px;
}
</style>
