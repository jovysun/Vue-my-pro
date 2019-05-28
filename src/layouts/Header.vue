<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        v-auth="['admin']"
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="foldHandler"
      />
      <a-dropdown style="float:right;margin-right:30px;">
        <a class="ant-dropdown-link" href="javascript:void(0)">
          <a-icon type="global" />
        </a>
        <a-menu slot="overlay" @click="onClick">
          <a-menu-item key="zh_CN">中文</a-menu-item>
          <a-menu-item key="en_US">English</a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    foldHandler() {
      this.$emit("toggleFold");
    },
    onClick({ key }) {
      this.$router.push({ query: { locale: key } });
      this.$i18n.locale = key;
    }
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background: #eeeeee;
}
</style>
