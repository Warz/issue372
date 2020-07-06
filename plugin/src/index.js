import VJstree from './tree.vue'
import useMultiTree from "./useMultiTree";
import useTreeActions from "./useTreeActions";
// Plugin install
VJstree.install = function(Vue,options = {}){
  Vue.component(VJstree.name, VJstree);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VJstree);
}

export { VJstree, useMultiTree, useTreeActions }