<template>
  <div>
    <!-- 在 Vue 2.2 版本，你可以在定义组件时通过 model选项的方式来定制 prop/event： -->
    <!--
    模板中的 $event 是事件参数
    当我们传递给子组件的数据既要使用还要修改。
    传递：props
    :is-followed="article.is_followed"
              
    修改：自定义事件
        @update-is_followed="article.is_followed = $event"
            
    简写方式：在组件上使用 v-model

    value="article.is_followed"
    @input="article.is_followed = $event"
    如果需要修改 v-model 的规则名称，可以通过子组件的 model 属性来配置修改
    一个组件上只能使用一次 v-model，
    如果有多个数据需要实现类似于 v-model 的效果，咋办？
    可以使用属性的 .sync 修饰符。 
    -->
    <p>
        父组件ParentCmp02: <el-button @click="article.is_followed = !article.is_followed">点击is_followed取反</el-button>
    </p>
    <!-- v-model="article.is_followed" 或 :is-followed="article.is_followed" -->
    <follow-user
      v-model="article.is_followed"
      :user-id="article.aut_id"
      @update-is_followed="article.is_followed = $event"
    />
    <hr />

    <!-- vue2中.sync  子组件更改：this.$emit('update:title', newTitle) -->
    <!-- ok，父子组件间可相互改变 -->
    <p>父组件: <input type="text" v-model="doc.title" /></p>
    <!-- 完整写法 -->
    <!-- <text-document v-bind:title="doc.title" v-on:update:title="doc.title = $event"></text-document> -->
    <!-- 为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符，update方法就省略了： -->
    <!-- <text-document v-bind:title.sync="doc.title"></text-document> -->
    <!-- 可再简写为： -->
    <text-document :title.sync="doc.title"></text-document>
    <!-- 不想写 .sync 的话，就得把update方法写上 -->
    <!-- <text-document
      :title="doc.title"
      @update:title="doc.title = $event"
    ></text-document> -->
  </div>
</template>

<script>
/* https://imkaifan.blog.csdn.net/article/details/122144975
关于vue数据传递的思考--vue遵循的是单向数据流，谁定义谁修改：
vue数据传递：
  单向数据流原则，谁定义的谁修改；
  总结出：就是业务和数据没有搞清楚，才出现了阅读起来非常混乱的代码，一个值传来传去。
  解决： 1、业务和数据根据情况进行是在一块呢？还是分离？ 2、选择一款合适的数据传递方式，别从头到尾一把梭，合适的才是最好的。
以props传递为例（也主要就是props回传导致了很多的不规范和问题数据流是单向的）：
  在子组件中是不可以修改props的，尽管，可以跑起来，但是这是不规范的。

数据来源于父组件，业务在子组件：
  父组件将值通过props传递给了子组件，如果在子组件中发送请求直接上传数据，那么可以采取这样的业务逻辑：
  在子组件中直接定义一个本地的响应式数据，将父组件通过props传递过来的值直接赋值给子组件的响应式数据，
  这只是一个初始值，子组件本地定义的响应式数据初始值是传过来的props，后期子组件本地的响应式数据改变，
  这个props是不会改变的最终发送的将是本地的这个响应式数据。

数据在父组件，业务也在父组件：
  父组件的值通过props传递给子组件，但是牵扯到的业务也在父组件中。
  这个时候，就比较上头了，在子组件中更改props，也要通知到父组件中的响应式数据，最后是在父组件中发送请求，处理业务。

vue2中：
1、v-model
获取原生事件事件对象：如果绑定事函数 fn fn(e){ // e 就是事件对象 } 
如果绑定的是js表达式  此时提供一个默认的变量 $event 
如果绑定的是js表达式  此时 $event代表触发自定义事件的传参
父组件中事件触发的是一个表达式而非一个函数

<Son :value="msg" @input="msg=$event" />
//简写：
<Son v-model="count" />
//想要在子组件中更改子组件绑定的父组件的值
this.$emit('input', 22)

2、vue2中.sync 原理：
    在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。
    在vue2.x的时候 .sync 除去v-model实现双向数据绑定的另一种方式。
    一个组件上只能使用一次 v-model，如果有多个数据需要实现类似于 v-model 的效果
    怎么做？ 可以使用属性的 .sync 修饰符

3、vue3中：
在vue3.0中 v-model 和 .sync 已经合并成 v-model 指令，使用 v-model即可

*/
import FollowUser from "./FollowUser.vue";
import TextDocument from "./TextDocument.vue";
export default {
  name: "ParentCmp02",
  components: { FollowUser, TextDocument },
  data() {
    return {
      article: {
        is_followed: true,
        aut_id: 9,
      },
      /// vue2中.sync
      doc: {
        title: "我是标题",
      },
    };
  },
  methods: {
    ///
  },
};
</script>

<style scoped lang="less"></style>
