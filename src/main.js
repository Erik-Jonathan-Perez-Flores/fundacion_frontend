import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import CKEditor from '@ckeditor/ckeditor5-vue';

window.toastr=require('toastr');
window.toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://localhost:7777/'
    })

  }

})
Vue.prototype.$eventbus = new Vue()
Vue.use( CKEditor );


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
