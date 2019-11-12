import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JSJiChu from '@/views/JSJiChu'
import DDD from '@/components/ddd'

Vue.use(Router)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'JSJiChu',
      component: JSJiChu
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ddd',
      name: 'DDD',
      component: DDD,
      meta:{
        keepAlive:true,
        title:111
      }
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
