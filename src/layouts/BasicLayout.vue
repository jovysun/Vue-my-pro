<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout style="min-height:100vh">
      <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <div class="logo">My Pro</div>
        <SiderMenu />
      </a-layout-sider>

      <a-layout>
        <Header :collapsed="collapsed" @toggleFold="toggleFold"></Header>

        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <router-view />
        </a-layout-content>

        <Footer />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu
  },
  methods: {
    toggleFold() {
      this.collapsed = !this.collapsed;
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
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo {
  color: #ffffff;
}
</style>
