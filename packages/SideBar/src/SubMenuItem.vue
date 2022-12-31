<template>
  <div class="submenuItem" @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
    <div class="title">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-if="isShowMenu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hg-submenuItem",
  data() {
    return {
      isShowMenu: false,
    };
  },
  methods: {
    showSubMenu() {
      this.isShowMenu = true;
    },
    hideSubMenu() {
      this.isShowMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.submenuItem {
  width: 200px;
  background: #000c17;
  padding: 10px 0;
  margin-bottom: 1px;
  border: 1px solid black;
  color: #ffffffa6;
  cursor: pointer;
  text-align: center;
  position: relative;
  z-index: 3;
}
.submenuItem:hover {
  background: #1890ff;
}
.title {
  position: relative;
}
.title .icon {
  position: absolute;
  right: 0;
  top: 0;
}
.sub-item {
  position: absolute;
  top: 0;
  right: -203px;
}
</style>
