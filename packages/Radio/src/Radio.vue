<template>
  <label class="radio">
    <span class="radio--outer">
      <span class="radio--inner" :class="{ 'is-checked': isChecked }"></span>
      <input
        class="radio-native"
        type="radio"
        :value="label"
        v-model="radioValue"
      />
    </span>
    <span class="radio--label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "hg-radio",
  props: {
    label: {
      type: [String, Boolean, Number],
    },
    value: [String, Boolean, Number],
  },
  inject: {
    groupValue: {
      default: "",
    },
  },

  data() {
    return {};
  },
  computed: {
    radioValue: {
      get() {
        if (this.groupValue) {
          return this.groupValue.value;
        } else {
          return this.value;
        }
      },
      set(val) {
        if (this.groupValue) {
          this.groupValue.$emit("input", val);
          this.groupValue.$emit("changes", val);
        } else {
          this.$emit("input", val);
        }
      },
    },
    isChecked() {
      return this.radioValue === this.label;
    },
  },
};
</script>

<style lang="scss" scoped>
.radio--outer {
  white-space: nowrap;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.radio--inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: bordebox;
}

.radio--inner.is-checked {
  border-color: #409eff;
  background: #409eff;
}

.radio--inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}

.radio--inner.is-checked::after {
  transform: translate(-50%, -50%) scale(1);
}

.radio--label {
  margin-left: 4px;
  font-size: 14px;
}

.radio {
  margin-right: 20px;
  cursor: pointer;
}

.radio:last-child {
  margin-right: 0;
}

.radio-native {
  opacity: 0;
  display: none;
}
</style>
