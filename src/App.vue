<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<style></style>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";
import moment from "moment";
import "moment/locale/zh-cn";
export default {
  data() {
    return {
      locale: {
        type: Object,
        default: en_US
      }
    };
  },
  watch: {
    "$route.query.locale": function(val) {
      this.locale = val === "en_US" ? en_US : zh_CN;
      moment.locale(val === "en_US" ? "en" : "zh-cn");
    }
  }
};
</script>
