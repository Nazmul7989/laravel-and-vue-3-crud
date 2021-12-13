require('./bootstrap');

import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes/routes";


// import master from './components/master'

//Sweet alert notification
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})
window.Toast = Toast;



//Creating vue router
const router = createRouter({
    history: createWebHistory(),
    routes
})

//Creating vue instance
const app = createApp({})

//Pagination component
// app.component('pagination', require('laravel-vue-pagination').default);

//Globally registering component
app.component('master-app',require('./components/master').default)
// app.component('master-app',master)

//Using vue router globally
app.use(router)

app.mount('#app')
