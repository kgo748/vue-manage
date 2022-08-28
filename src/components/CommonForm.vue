<template>
  <el-form ref="from" label-width="100px" :model="form" :inline="inline">
    <el-form-item v-for="item in operateFormLabel" :key="item.label" :label="item.label">
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
    operateFormLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {
    };
  },
  computed: {
    form2: {
      get() {
        return this.form
      },
      set(val) {
        console.log(val)
      }
    }
  },
  mounted() {
    // console.log('mounted: ', this.form);
  },
  methods: {
    
  }
};
</script>

<style scoped lang="less">
</style>
