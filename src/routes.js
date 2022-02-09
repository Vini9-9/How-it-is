import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path: '/', component: Home , titulo: 'Home'},
    { path: '/cadastro', component: Cadastro , titulo: 'Cadastro'},
    { path: '/sobre-nos' , titulo: 'Sobre nós'}
];
