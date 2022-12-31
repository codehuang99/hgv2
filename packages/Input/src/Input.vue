<template>
  <div class="Input">
    <input
      class="input_inner"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
      :class="className"
      :disabled="disabled"
    />
    <span
      class="iconfont icon-clear_circle"
      v-if="clearable && value"
      @click="handleClear"
    ></span>
    <span
      class="iconfont icon-eye"
      v-else-if="type === 'password' && showPassword && value"
      @click="handleShowPassword"
    ></span>
  </div>
</template>

<script>
export default {
  name: "hg-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: String,
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "middle",
    },
  },
  data() {
    return {};
  },
  computed: {
    className() {
      return {
        [`input-disabled`]: this.disabled,
        [`input-${this.size}`]: this.size,
      };
    },
  },
  methods: {
    //改变input输入框值同时改变父组件值
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    //清空方法
    handleClear() {
      this.$emit("input", "");
    },
    //显示密码
    handleShowPassword(e) {
      e.path[1].children[0].type =
        e.path[1].children[0].type === "text" ? "password" : "text";
    },
  },
};
</script>

<style lang="scss" scoped>
.Input {
  position: relative;
  width: 300px;
  margin-bottom: 10px;
}
.input_inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  cursor: pointer;
}

.input_inner:focus {
  outline: none;
  border-color: #409eff;
}
.input-disabled,
.input-disabled:focus {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.input-small {
  height: 32px;
  line-height: 32px;
}
.input-mini {
  height: 28px;
  line-height: 28px;
}
.iconfont {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  cursor: pointer;
}
</style>
