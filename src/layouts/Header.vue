<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        v-auth="['admin']"
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="foldHandler"
      />
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
