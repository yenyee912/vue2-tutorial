import Vue from "vue";
import VueRouter from "vue-router"

import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"

Vue.use(VueRouter);

const routes= [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;




