<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- NavBar -->
      <NavBarHome />
  
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4 mt-10">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Bienvenido al Banco de Occidente</h1>
        <p class="text-gray-700 mb-4">
          Este es el sistema de gestión de transacciones del Banco de Occidente. Aquí puedes gestionar tus transacciones, ver reportes y más.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <router-link to="/login" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Iniciar Sesión</h2>
            <p class="text-gray-700">Accede a tu cuenta para gestionar transacciones.</p>
          </router-link>
          <router-link to="/project" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Proyecto</h2>
            <p class="text-gray-700">Conoce más sobre nuestro proyecto.</p>
          </router-link>
          <router-link to="/contact" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Contacto</h2>
            <p class="text-gray-700">Contáctanos para más información.</p>
          </router-link>
        </div>
      </main>
  
      <!-- Footer -->
      <FooterPage />
    </div>
  </template>
  
  <script>
  import NavBarHome from '../components/Nav.vue';  
  import FooterPage from '../components/Footer.vue';  
  
  export default {
    name: 'HomePage',
    components: {
      NavBarHome,
      FooterPage,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>