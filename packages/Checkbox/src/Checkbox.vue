<template>
  <!-- 这里用label是因为label包裹着input，点击label会自动选择input -->
  <label class="checkbox">
    <span class="checkbox-outer">
      <span class="checkbox-inner" :class="{ 'is-checked': isChecked }"></span>
      <input
        type="checkbox"
        class="checkbox-native"
        :value="label"
        v-model="cheboxValue"
      />
    </span>

    <span class="checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "hg-checkbox",
  inject: {
    checkboxGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Boolean, Number],
    },
    value: [Boolean, Array, String],
  },
  computed: {
    isChecked() {
      if (this.checkboxGroup) {
        return this.checkboxGroup.value.includes(this.label);
      } else {
        if (typeof this.value === "boolean") {
          return this.value;
        }
        return this.value.includes(this.label);
      }
    },
    cheboxValue: {
      get() {
        //当有使用group的v-model时候取得是用户传给group的值
        if (this.checkboxGroup) {
          return this.checkboxGroup.value;
        } else {
          //如果只是使用checkbox组件，则是组件传过来的v-model值
          return this.value;
        }
      },
      set(val) {
        //当有使用group的v-model时候我们必须更新最外层的v-model
        if (this.checkboxGroup) {
          this.checkboxGroup.$emit("input", val);
        } else {
          //如果不是则直接更新v-models
          this.$emit("input", val);
        }
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkbox-outer {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.checkbox-inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}

.checkbox-inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.checkbox-inner.is-checked {
  background-color: #409eff;
  border-color: #409eff;
}

.checkbox-inner.is-checked:after {
  transform: rotate(45deg) scaleY(1);
}

.checkbox-native {
  opacity: 0;
  display: none;
}

.checkbox__label {
  margin-left: 10px;
  display: inline-block;
  line-height: 19px;
  font-size: 14px;
}

.checkbox {
  color: #606266;
  /* font-weight: 500; */
  margin-right: 10px;
  cursor: pointer;
}
</style>
