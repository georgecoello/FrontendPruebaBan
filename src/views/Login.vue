<template>
    <NavBar class="fixed bg-white shadow-lg w-full z-50" />
    
    <div class="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div class="bg-white p-8 w-full max-w-md text-center border-4 border-green-600 rounded-xl shadow-2xl">
        <h1 class="text-2xl font-bold mb-4 text-green-600">Iniciar sesión</h1>
        <p class="text-gray-700">Ingresa tus credenciales para continuar</p>
        
        <form @submit.prevent="login" class="mt-6 space-y-4">
          <input 
            v-model="email" 
            type="email" 
            placeholder="Correo electrónico" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input 
            v-model="password" 
            type="password" 
            placeholder="Contraseña" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <button 
            type="submit" 
            class="bg-bancocci hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 w-full"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
    
    <FooterPage/>
  </template>
  
  <script>
  import NavBar from '../components/NavHome.vue';
  import FooterPage from "../components/Footer.vue";
  
  export default {
    name: 'LoginView',
    components: {
      NavBar,
      FooterPage,
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Intentando iniciar sesión con:', this.email, this.password);
        // Aquí puedes agregar la lógica de autenticación
      },
    },
  };
  </script>
  