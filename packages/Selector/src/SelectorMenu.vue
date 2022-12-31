<template>
  <div class="selectorMenu">
    <template v-if="searchData.length">
      <div
        class="menu_item"
        v-for="item in searchData"
        :key="item.id"
        @click="clickItem(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <template v-else> 没有数据存在 </template>
  </div>
</template>

<script>
export default {
  name: "selectorMenu",
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            text: "vue",
            value: "vue",
          },
          {
            id: 2,
            text: "react",
            value: "react",
          },
          {
            id: 3,
            text: "aulgar",
            value: "aulgar",
          },
        ];
      },
    },
    searchValue: String,
  },
  data() {
    return {};
  },
  computed: {
    searchData() {
      if (!this.searchValue) {
        return this.data;
      }
      return this.data.filter((item) => {
        return item.text.toLowerCase().includes(this.searchValue.toLowerCase());
      });
    },
  },
  methods: {
    clickItem(val) {
      this.$emit("setItemValue", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.selectorMenu {
  display: none;
  width: 222px;
  border: 1px solid gray;
}
.menu_item {
  padding: 10px;
}
.menu_item:hover {
  background: gray;
  cursor: pointer;
}
</style>
