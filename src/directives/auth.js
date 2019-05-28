import { check } from "../utils/auth";
// 提供install方法（语法）
function install(Vue, options = {}) {
  // 定义指令
  Vue.directive(options.name || "auth", {
    // 钩子函数
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
