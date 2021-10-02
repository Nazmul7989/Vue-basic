import Vue from 'vue'
import App from './App.vue'
import appHeader from './Components/partial/header'

Vue.component('appHeader', appHeader)

Vue.config.productionTip = false

//custom directive
Vue.directive('customDirectiveGlobal',{
  bind(el,binding){
    // el.innerText = 'Hello global custom directive';
    el.innerText = binding.value;
    el.style.color = 'blue';

  }
})

//Global filter
Vue.filter('removeTxt',(value)=>{
  return value.slice(1)
})


new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')
