<template>
  <div id="app">
    <!-- 按钮 -->
    <h1>按钮组件：</h1>
    <h5>参数:type、disabled、size、circle</h5>
    <hg-button type="default">default</hg-button>
    <hg-button type="primary">primary</hg-button>
    <hg-button type="success">success</hg-button>
    <hg-button type="info">info</hg-button>
    <hg-button type="warning">warning</hg-button>
    <hg-button type="danger">danger</hg-button>
    <hg-button type="primary" disabled>disabled</hg-button>
    <hg-button type="primary" size="small">small</hg-button>
    <hg-button type="primary" size="mini">mini</hg-button>
    <hg-button type="primary" circle>circle</hg-button>
    <div class="br" />

    <!-- 下拉菜单 -->
    <h1>下拉菜单组件:</h1>
    <h5>参数:data</h5>
    <hg-selector label="下拉菜单" :data="menuData" @change="handleChange" />
    <div class="br" />

    <!-- 菜单栏 -->
    <h1>菜单栏组件:</h1>
    <h5>参数:menuItem一级菜单、submenuItem二级菜单、reSubMenu多级菜单</h5>
    <hg-sidebar>
      <template v-for="item in sidebarData">
        <template v-if="!item.children">
          <hg-menuItem :key="item.id">{{ item.title }}</hg-menuItem>
        </template>

        <!-- 二级菜单 -->
        <!-- <hg-submenuItem v-else>
          <template #title>{{ item.title }}</template>
          <hg-menuItem v-for="item2 in item.children" :key="item2.id">{{
            item2.title
          }}</hg-menuItem>
        </hg-submenuItem> -->
        <!-- 递归菜单 -->
        <hg-reSubMenu v-else :data="item" :key="item.id"></hg-reSubMenu>
      </template>
    </hg-sidebar>
    <div class="br" />

    <!-- 输入框组件 -->
    <h1>输入框组件:</h1>
    <h5>参数:v-model、clearable、showPassword、type、size</h5>
    输入框文字：{{ inputValue }}
    <hg-input v-model="inputValue" clearable></hg-input>
    <hg-input
      v-model="inputValue2"
      size="small"
      type="password"
      showPassword
    ></hg-input>
    <div class="br" />

    <!-- 单选框组件 -->
    <h1>单选框组件:</h1>
    <h5>参数:label、v-model、radio-group单选框组</h5>
    <div>单选框选择了: {{ radioValue1 }}</div>
    <div>单选框组选择了: {{ radioValue2 }}</div>
    <hg-radio label="1" v-model="radioValue1">选项1</hg-radio>
    <hg-radio label="2" v-model="radioValue1">选项2</hg-radio>
    <hg-radio-group v-model="radioValue2" @changes="RadioChange">
      <hg-radio label="a">选项1-1</hg-radio>
      <hg-radio label="b">选项2-2</hg-radio>
    </hg-radio-group>
    <div class="br" />

    <!-- 多选框 -->
    <h1>多选框组件:</h1>
    <h5>参数:label、v-model、checkbox-group单选框组</h5>
    <div>多选框选择了: {{ checkboxValue1 }}</div>
    <div>多选框组选择了: {{ checkboxValue2 }}</div>
    <hg-checkbox v-model="checkboxValue1" label="1">1111</hg-checkbox>
    <hg-checkbox v-model="checkboxValue1" label="2">222</hg-checkbox>
    <hg-checkbox v-model="checkboxValue1" label="3">33</hg-checkbox>
    <hg-checkbox-group v-model="checkboxValue2">
      <hg-checkbox label="1-1">1-1</hg-checkbox>
      <hg-checkbox label="2-2">2-2</hg-checkbox>
      <hg-checkbox label="3-3">3-3</hg-checkbox>
    </hg-checkbox-group>
    <div class="br" />

    <!-- 对话框 -->
    <h1>对话框组件:</h1>
    <h5>参数:v-model、title、cancel方法、confirm方法</h5>
    <hg-button type="primary" @click="handleOpen">打开/关闭对话框</hg-button>
    <hg-dialog
      v-model="show"
      title="对话框"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <template #content> 和大数据等哈叫大环境大会世界大会决定 </template>
    </hg-dialog>
    <div class="br" />

    <!-- 消息组件 -->
    <h1>message消息组件:</h1>
    <h5>参数:Message方法</h5>
    <hg-button
      type="success"
      @click="() => this.$message({ type: 'success', message: 'success' })"
      >success按钮</hg-button
    >
    <hg-button
      type="info"
      @click="() => this.$message({ type: 'info', message: 'info' })"
      >info按钮</hg-button
    >
    <hg-button
      type="warning"
      @click="() => this.$message({ type: 'warning', message: 'warning' })"
      >warning按钮</hg-button
    >
    <hg-button
      type="danger"
      @click="() => this.$message({ type: 'danger', message: 'danger' })"
      >danger按钮</hg-button
    >
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuData: [
        {
          id: 1,
          text: "第一个1",
          value: "第一个1",
        },
        {
          id: 2,
          text: "第二个2",
          value: "第二个2",
        },
        {
          id: 3,
          text: "第三个3",
          value: "第三个3",
        },
      ],
      sidebarData: [
        {
          id: 1,
          title: "菜单1",
        },
        {
          id: 2,
          title: "菜单2",
        },
        {
          id: 3,
          title: "菜单3",
          children: [
            {
              id: 31,
              title: "菜单3-1",
              children: [
                {
                  id: 311,
                  title: "菜单3-1-1",
                  children: [
                    {
                      id: 3111,
                      title: "菜单3-1-1-1",
                    },
                  ],
                },
              ],
            },
            {
              id: 32,
              title: "菜单3-2",
            },
            {
              id: 33,
              title: "菜单3-3",
            },
          ],
        },
        {
          id: 4,
          title: "菜单4",
        },
        {
          id: 5,
          title: "菜单5",
          children: [
            {
              id: 51,
              title: "菜单5-1",
            },
            {
              id: 52,
              title: "菜单5-2",
            },
            {
              id: 53,
              title: "菜单5-3",
            },
          ],
        },
      ],
      inputValue: "",
      inputValue2: "",
      radioValue1: "2",
      radioValue2: "b",
      checkboxValue1: ["1"],
      checkboxValue2: ["1-1"],
      show: false,
    };
  },
  methods: {
    handleChange(val) {
      console.log("当前value值为", val);
    },
    RadioChange(val) {
      console.log(val);
    },
    handleOpen() {
      this.show = !this.show;
    },
    handleCancel() {
      console.log("取消");
    },
    handleConfirm() {
      console.log("点击确定");
    },
  },
};
</script>

<style lang="scss">
.br {
  width: 100%;

  /* background: black; */
  border: 1px dotted black;
  margin: 30px 0;
}
</style>
