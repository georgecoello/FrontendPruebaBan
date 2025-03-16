<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Transacciones</h1>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Lista de Transacciones</h2>
  
          <!-- Tabla de Transacciones -->
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Fecha</th>
                <th class="px-4 py-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaccion in transacciones" :key="transaccion.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ formatFecha(transaccion.fechaTransaccion) }}</td>
                <td class="px-4 py-2 text-center">${{ transaccion.montoTransaccion }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
  
      <!-- Footer (Siempre en la parte inferior) -->
      <FooterPage />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/Nav.vue';
  import FooterPage from '../components/Footer.vue';
  import axios from 'axios';
  
  export default {
    name: 'TransaccionesPage',
    components: {
      NavBar,
      FooterPage,
    },
    data() {
      return {
        transacciones: [],
      };
    },
    async created() {
      await this.cargarTransacciones();
    },
    methods: {
      async cargarTransacciones() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://127.0.0.1:8000/api/transacciones/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.transacciones = response.data;
        } catch (error) {
          console.error('Error al cargar transacciones:', error);
        }
      },
      formatFecha(fecha) {
        // Formatear la fecha para que sea más legible
        return new Date(fecha).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>