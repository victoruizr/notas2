import Vue from 'vue'
import App from './App.vue'
/* import { firestorePlugin } from 'vuefire' */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import './registerServiceWorker'



/* Firebase */

import login from './components/login.vue'
import privado from './components/privado.vue'
import register from './components/register.vue'

Vue.use(VueRouter)

Vue.use(firebase)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(firestorePlugin)

/* Firebase ui */


const routes = [
  { path: '/', component: register },
  {
    path: '/privado', component: privado,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/register', component: register },
  { path: '/login', component: login },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	firebase.auth().onAuthStateChanged((user) => {
		const currentUser = user;
		const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

		if(requiresAuth && !currentUser) next('login');
		else next()
	});
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

