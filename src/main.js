import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'

// import gsap for animations
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";


Vue.config.productionTip = false

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
