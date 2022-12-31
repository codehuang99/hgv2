<template>
  <div class="dialog" v-if="value">
    <div class="mask" @click="handleMask"></div>
    <div class="ui-dialog">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="bottom">
        <button class="close" @click="handleClose">取消</button>
        <button class="comfirm" @click="handleComfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hg-dialog",
  props: {
    title: {
      type: String,
      default: "Basic Modal",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit("input", false);
      this.$emit("cancel");
    },
    handleComfirm() {
      this.$emit("confirm");
    },
    handleMask() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.mask {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
}
.ui-dialog {
  width: 500px;
  background: #fff;
  border: 1px solid black;
  position: fixed;
  left: 400px;
  top: 60px;
  color: black;
}
.title {
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  border-bottom: 1px solid gray;
}
.content {
  padding: 30px;
  border-bottom: 1px solid gray;
}
.bottom {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
