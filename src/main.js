import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import naver from 'vue-naver-maps';

Vue.use(naver, {
  clientID: 'zzi5p5w63h',
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  subModules: '' // 서브모듈 (선택)
});

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, {})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
