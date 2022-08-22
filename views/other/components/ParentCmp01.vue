<template>
  <div>
    <p>父组件: <input type="text" v-model="twoWayValue" /></p>
    <Sub01 :twoWayValue.sync="twoWayValue"></Sub01>
  </div>
</template>

<script>

import Sub01 from "./Sub01.vue";
export default {
  name: "ParentCmp01",
  components: { Sub01 },
  data() {
    return {
      twoWayValue: "参数值",
    };
  },
};
</script>

<style scoped lang="less"></style>
