import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Feature from '@/components/feature'
import Screenshots from '@/components/screenshots'
import Team from '@/components/team'
import Price from '@/components/price'
import Testimonial from '@/components/testimonial'
import ContactUs from '@/components/contact_us'
import Map from '@/components/map'
import Tile from '@/components/tile'
import Footer from '@/components/footer'
import PageNotFound from '@/components/pagenotfound'
import js from '@/components/js'
import Signin from '@/pages/sign_in'
import Signup from '@/pages/sign_up'
import ForgetPassword from '@/pages/forget_password'

Vue.use(Router)
Vue.component('Navbar', Navbar)
Vue.component('About', About)
Vue.component('Feature', Feature)
Vue.component('Screenshots', Screenshots)
Vue.component('Team', Team)
Vue.component('Price', Price)
Vue.component('Testimonial', Testimonial)
Vue.component('Contact_us', ContactUs)
Vue.component('Map', Map)
Vue.component('Footer', Footer)
Vue.component('Signin', Signin)
Vue.component('Signup', Signup)
Vue.component('ForgetPassword', ForgetPassword)
Vue.component('js', js)
Vue.component('Tile', Tile)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        navbar: Navbar,
      }

    },
    {
      path: '/404',
      name: 'pagenotfound',
      component: PageNotFound
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/forget-Password',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '*',
      redirect: '/404'
    }]
})
