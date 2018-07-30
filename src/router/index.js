import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import course from '@/views/course'
import mentor from '@/views/mentor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // 课程
    {
      path:'/course',
      component:course
    },
    // 导师
    {
      path:'/mentor',
      component:mentor
    }
  ]
})
