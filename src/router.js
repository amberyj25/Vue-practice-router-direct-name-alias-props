import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import about from "./about.vue"
import aboutall from "./aboutall.vue"
import aboutus from "./aboutus.vue"
import aboutyou from "./aboutyou.vue"
import products from "./products.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "about",
          name: "about",
          component: about,
          children: [
            {
              path: "aboutall",
              name: "aboutall",
              component: aboutall,
            }, {
              path: "aboutus",
              name: "aboutus",
              component: aboutus
            }, {
              path: "aboutyou",
              name: "aboutyou",
              component: aboutyou
            }, {
              path: "aboutboth",
              name: "aboutboth",
              components: {
                default: aboutus,
                others: aboutyou,
              },
            }
          ]
        }, {
          path: "products",
          name: "products",
          component: products,
        }
      ]
    }
  ]
})