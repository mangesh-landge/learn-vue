import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//Filter can be used globally

Vue.filter("Ucase", function(val) {
  return val.toUpperCase();
});

Vue.filter("DollarToRupees", function(val) {
  return val * 75;
});

//Routing
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Form from "./components/Form.vue";
import DeleteData from "./components/DeleteData.vue";
import User from "./components/User.vue";
import Erorr404 from "./components/Erorr404.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/form", component: Form },
  { path: "/details", component: DeleteData },
  { path: "/user/:id", component: User },
  { path: "*", component: Erorr404 },
];
const router = new VueRouter({
  routes,
});

// custom Directive
Vue.directive("size", {
  bind(el, binding) {
    if (binding.value == "small") {
      el.style.fontStyle = "20px";
    } else if (binding.value == "big") {
      el.style.fontStyle = "100px";
    } else {
      el.style.fontStyle = "60px";
    }
  },
});
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
