<template>
  <el-form ref="from" label-width="100px" :model="form" :inline="inline">
    <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
        <el-input v-if="item.type === 'input'" :placeholder="'请输入' + item.label" v-model="form2[item.model]"></el-input>
        <el-switch v-if="item.type === 'switch'" v-model="form2[item.model]"></el-switch>
        <el-date-picker v-if="item.type === 'date'" type="date" value-format="yyyy-MM-dd" placeholder="请选择日期" v-model="form2[item.model]"></el-date-picker>
        <el-select v-if="item.type === 'select'" placeholder="请选择" v-model="form2[item.model]">
          <el-option v-for="subItem in item.opts" :key="subItem.value" :label="subItem.label" :value="subItem.value"></el-option>
        </el-select>
    </el-form-item>
    <!-- 都不满足就使用自定义的放在插槽里 -->
    <el-form-item>
        <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommonForm",
  // formLabel 是标签数据
  // form是表单数据
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {
      // 在本地定义一个双向绑定的数据，将prop传过来的值，赋值给本地的一个双向绑定数据。
      // 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用；
      // 在这种情况下，最好定义一个本地的data prop 并将这个本地 prop 当作其初始值：
      // form2: this.form
    };
  },
  methods: {
    
  }
};
</script>

<style scoped lang="less">
</style>
