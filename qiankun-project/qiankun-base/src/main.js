import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import {registerMicroApps, start} from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000/',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000/',
    container: '#react',
    activeRule: '/react'
  }
]
registerMicroApps(apps);
start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
