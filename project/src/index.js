import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import { VJstree } from 'vue-jstree-extended'

Vue.use(VJstree,{});

import App from './App.vue'
new Vue({
    el: '#app',
    render: h => h(App)
})