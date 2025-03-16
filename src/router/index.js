import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue';
import ProjectView from '../views/Project.vue' ;
import ContactView from '../views/Contact.vue';
import Home from '../views/Home.vue';
import DashboardPage from '../views/Dashboard.vue';
import TransaccionesPage from '../views/Transacciones.vue';
import ReportesPage from '../views/Reportes.vue';
import MantenimientosPage from '../views/Mantenimiento.vue';
 
const routes = [
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/project', name: 'Project', component: ProjectView},
  { path: '/contact', name: 'Contact', component: ContactView}, 
  {path: '/home', name: 'Home', component: Home},
  {path: '/dashboard', name: 'Dashboard', component: DashboardPage},
  {path: '/transacciones', name: 'Transacciones', component: TransaccionesPage},
  {path: '/reportes', name: 'Reportes', component: ReportesPage},
  {path: '/mantenimiento', name: 'Mantenimiento', component: MantenimientosPage},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
});

export default router;
