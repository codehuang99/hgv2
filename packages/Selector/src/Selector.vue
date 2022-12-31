<template>
  <div class="hg-selector" v-focus>
    <SelectorInput
      :label="this.$attrs.label"
      :value="inputValue"
      @searchOptions="searchOptions"
    ></SelectorInput>
    <SelectorMenu
      :data="this.$attrs.data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    ></SelectorMenu>
  </div>
</template>

<script>
import SelectorInput from "../src/SelectorInput.vue";
import SelectorMenu from "../src/SelectorMenu.vue";
import focus from "./directives/focus";
export default {
  name: "hg-selector",
  components: { SelectorInput, SelectorMenu },
  directives: {
    focus: focus,
  },
  data() {
    return {
      inputValue: "",
      searchValue: "",
    };
  },
  methods: {
    setItemValue(item) {
      this.inputValue = item.text;
      this.$emit("change", item.value);
    },
    searchOptions(val) {
      this.searchValue = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
