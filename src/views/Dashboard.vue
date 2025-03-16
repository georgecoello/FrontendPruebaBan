<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4">
        <h1 class="text-3xl font-bold text-green-800 mb-4 mt-10">Panel de Control</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <router-link to="/transacciones" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Transacciones</h2>
            <p class="text-gray-700">Gestiona tus transacciones.</p>
          </router-link>
          <router-link to="/reportes" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Reportes</h2>
            <p class="text-gray-700">Ver reportes de transacciones.</p>
          </router-link>
          <router-link to="/mantenimientos" class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-bold text-green-800 mb-2">Mantenimientos</h2>
            <p class="text-gray-700">Gestiona tablas de parámetros.</p>
          </router-link>
        </div>
      </main>
  
      <!-- Footer (Siempre en la parte inferior) -->
      <FooterPage />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/Nav.vue';
  import FooterPage from '../components/Footer.vue';
  
  export default {
    name: 'DashboardPage',
    components: {
      NavBar,
      FooterPage,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>