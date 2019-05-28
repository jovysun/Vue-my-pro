<template>
  <div ref="myChart"></div>
</template>

<script>
import debounce from "lodash/debounce";
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    }
    // 深度复制，可以监听到option对象内部属性的变化，但是比较耗性能
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    // 监听dom变化，及时重新渲染eacharts实例
    addListener(this.$refs.myChart, this.resize);
  },
  beforeDestroy() {
    // 销毁eacharts实例
    removeListener(this.$refs.myChart, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      console.log("resize");
      // 重新渲染eacharts实例
      this.chart.resize();
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.myChart);
      // 绘制图表
      this.chart.setOption(this.option);
    }
  }
};
</script>

<style></style>
