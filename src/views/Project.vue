<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Sobre el Proyecto</h1>
        <p class="text-gray-700 mb-4">
          Este proyecto fue desarrollado para gestionar las transacciones de los clientes del Banco de Occidente. Utiliza tecnologías modernas como Django para el BackEnd y Vue.js para el FrontEnd.
        </p>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-2">Tecnologías Utilizadas</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Django (BackEnd)</li>
            <li>Vue.js (FrontEnd)</li>
            <li>Tailwind CSS (Estilos)</li>
            <li>PostgreSQL (Base de Datos)</li>
          </ul>
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
    name: 'ProjectPage',
    components: {
      NavBar,
      FooterPage,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>