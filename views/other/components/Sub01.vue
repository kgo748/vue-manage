<template>
  <div>
    <!-- 方式1：先定义一个当前组件的属性 twoWayValue02 去接收 twoWayValue，然后监听 twoWayValue 的变化 -->
    <p>01.子组件: <input type="text" v-model="twoWayValue02" @input="childDataChange" /></p>
    <!-- 方式2：直接使用传过来的值，然后调用childDataChange2改值，推荐 -->
    <p>02.子组件: <input type="text" :value="twoWayValue" @input="childDataChange2($event)" /></p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sub01",
  props: {
    twoWayValue: {
        type: String,
        default: ''
    }
  },
  data() {
    return {
      // 关联值
      twoWayValue02: this.twoWayValue
    }
  },
  watch: {
    // 监听
    twoWayValue(){
      this.twoWayValue02 = this.twoWayValue
    }
  },
  methods: {
    // ok 和父组件父子间该值关联了
    childDataChange(){
      // 调用方法改值
      this.$emit('update:twoWayValue', this.twoWayValue02) // 触发update:twoWayValue将子组件值传递给父组件
    },
    // ok 和父组件父子间该值关联了
    childDataChange2($event){
        this.$emit('update:twoWayValue', $event.target.value) // 触发update:twoWayValue将子组件值传递给父组件
    }
  }
};
</script>

<style scoped lang="less"></style>
