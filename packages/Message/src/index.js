import MessageComp from "./Message.vue";
import Vue from "vue";
import { watch } from "vue";

let ve = new Vue({
  data() {
    return {
      messageArr: [],
    };
  },
});

// let messageArr = [];

const map = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
  INFO: "info",
};

const Message = (options) => {
  console.log();
  //将组件挂载到body
  const messageConstructor = Vue.extend(MessageComp);
  const messageApp = new messageConstructor({
    propsData: {
      // 使用propsData向子组件传参，这里是关键!
      ...options,
    },
  });

  showMessage(messageApp);
};

//两种调用方法，一个是message({type}),一种是message.success({})
Object.values(map).forEach((type) => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  };
});

//显示---挂载到body
function showMessage(app) {
  //这里可以获取到组件暴露出来的方法
  const vm = app.$mount();
  ve.$data.messageArr.push(vm);
  document.body.appendChild(vm.$el);
  setTops(vm);
  vm.changeShow();
  ve.$watch("messageArr", function () {
    setTops(vm);
  });

  hideMessage(app, vm);
}

//隐藏--取消挂载
function hideMessage(app, vm, duration) {
  vm.timer = setTimeout(async () => {
    await vm.changeShow();
    app.$destroy(); //取消挂载
    ve.$data.messageArr = ve.$data.messageArr.filter((item) => item !== vm);

    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration || 3000);
}

//计算top
function setTops(vm) {
  const { height, margin, setTop } = vm;
  const currentIndex = ve.$data.messageArr.findIndex((item) => item === vm);
  setTop(margin * (currentIndex + 1) + height * currentIndex);
}

export default Message;
