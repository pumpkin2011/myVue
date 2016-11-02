import FirstView from './components/menu/First.vue'
import HelloView from './components/Hello.vue'

// Routes
const routes = [
  {
    path: '/',
    component: FirstView,
    children: [
      {
        path: '/first',
        component: FirstView,
        name: 'First',
        description: 'This is a test view'
      }
    ]
  }, {
    path: '*',
    component: HelloView
  }
]

export default routes
