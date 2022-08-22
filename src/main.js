import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from '../store'
import axios from 'axios'
import '../api/mock'
import {
  Button, Select, Container, Main, Header, Aside, Menu,
  Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem,
  Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  Tag, Form, FormItem, Input, Option, Switch, DatePicker, Dialog,
  Pagination, MessageBox, Message
} from 'element-ui';
// 引入样式文件
import './assets/less/index.less'

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/// 或写为
Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)


Vue.config.productionTip = false

// 挂载在原型上
Vue.prototype.$http = axios
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
