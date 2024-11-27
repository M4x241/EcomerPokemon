import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBarp from "@/components/NavBarp.vue"
import ShopProds from "@/components/ShopProds.vue"
import ViewProds from "@/components/ViewProds.vue"
import ViewVentas from "@/components/ViewVentas.vue"
import SessionComp from '@/components/SessionComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: NavBarp,
    children: [
        {

            path: '',
            name: "shop",
            component: ViewProds
          },
          {
            path: 'log',
            name: "loggin",
            component: ViewVentas
          },
          {
            path: 'shop',
            name: 'shop',
            component: ShopProds
          }
    ]
  },
  {
    path: '/session',
    component: SessionComp
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router