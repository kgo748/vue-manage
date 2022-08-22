<template>
  <el-menu
    default-active=""
    class="el-menu-vertical-demo"
    text-color="#fff"
    active-text-color="#ffd04b"
    background-color="#545c64"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
      @click="clickItem(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="item.label"
      :key="item.label"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item @click="clickItem(subItem)" :index="subIndex.toString()">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      // path值要和路由里的对应上
      menu: [
        {
          path: "/", // 这里路径可以不写成 '/home'，路由里重定向了
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "home/index",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "mall/index",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "User/index",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "other/pageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击跳转
    clickItem(item) {
      this.$router.push({
        path: item.path,
      });
      this.$store.commit('selectMenu', item)
    },
  },
  /// 这种方式，页面导航渲染的顺序无法与数据里的一致，因为这是先把无子项的获取到渲染，再获取有子项的去渲染，就把数据的顺序打乱了
  computed: {
    // 无子项
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    // 有子项
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    // 从Vuex获取
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>
