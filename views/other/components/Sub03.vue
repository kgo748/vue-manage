<template>
  <div>
    子组件: <input type="text" v-model="childValue" @input="childInputChange" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sub03",
  model: {
    // 定义model
    // 父组件v-model绑定的值传递给props中的fatherValue
    prop: "fatherValue",
    // 通过emit触发childValueChange将内部值传递给父组件v-model绑定的值
    event: "childValueChange",
  },
  props: {
    fatherValue: String, // 接受父组件传递的值
  },
  data() {
    return {
      childValue: this.fatherValue, // 关联值
    };
  },
  watch: {
    fatherValue() {
      this.childValue = this.fatherValue
    }
  },
  methods: {
    childInputChange() {
      // 通过$emit触发childValueChange（model内定义）事件，将内部值传递给给父组件
      this.$emit("childValueChange", this.childValue);
    },
  },
};
</script>

<style scoped lang="less"></style>
