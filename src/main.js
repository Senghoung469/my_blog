import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/tailwind.css'
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-vue2';
const moment = require('moment')
moment.locale()

Vue.use(require('vue-moment'), {
  moment
})

Vue.use(Element);
Vue.use(CKEditor);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
