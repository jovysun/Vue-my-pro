<template>
  <div>
    <ul>
      <li>
        <h1>Unicode 引用</h1>
        <i class="iconfont">&#xe61c;</i>
      </li>
      <li>
        <h1>font-class 引用</h1>
        <i class="iconfont iconyunshu"></i>
      </li>
      <li>
        <h1>symbol 引用</h1>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icontixingshixiang"></use>
        </svg>
      </li>
      <li>
        <h1>ant-design-vue 中使用</h1>
        <IconFont404 type="icon-404" class="icon-404" />
      </li>
      <li>
        <h1>直接使用 svg 图标文件</h1>
        <Logo />
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "@/assets/logo.svg";
export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_1212356_01bv0xpc70ab.css);
@font-face {
  font-family: "iconfont"; /* project id 1212356 */
  src: url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.eot");
  src: url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.woff") format("woff"),
    url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1212356_01bv0xpc70ab.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-404 {
  font-size: 80px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
