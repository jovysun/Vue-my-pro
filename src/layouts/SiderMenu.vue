<template>
  <div style="width: 256px">
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      theme="dark"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from "./SubMenu";
import { check } from "../utils/auth";
export default {
  components: {
    "sub-menu": SubMenu
  },
  data() {
    this.openKeysMap = {};
    this.selectedKeysMap = {};
    let menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      list: [],
      menuData,
      selectedKeys: [],
      openKeys: []
    };
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    }
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      let menuData = [];
      for (let element of routes) {
        if (
          element.meta &&
          element.meta.authority &&
          !check(element.meta.authority)
        ) {
          break;
        }
        if (element.name && !element.hideInMenu) {
          this.openKeysMap[element.path] = parentKeys;
          this.selectedKeysMap[element.path] = [selectedKey || element.path];
          const newItem = { ...element };
          delete newItem.children;
          if (element.children && !element.hideChildrenInMenu) {
            newItem.children = this.getMenuData(element.children, [
              ...parentKeys,
              element.path
            ]);
          } else {
            this.getMenuData(
              element.children,
              selectedKey ? parentKeys : [...parentKeys, element.path],
              selectedKey || element.path
            );
          }
          menuData.push(newItem);
        } else if (
          !element.hideInMenu &&
          !element.hideChildrenInMenu &&
          element.children
        ) {
          menuData.push(
            ...this.getMenuData(element.children, [...parentKeys, element.path])
          );
        }
      }
      return menuData;
    }
  }
};
</script>
