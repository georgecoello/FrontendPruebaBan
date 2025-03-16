<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Reportes</h1>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Transacciones por Día</h2>
  
          <!-- Filtro de fecha -->
          <div class="mb-4">
            <label class="block text-green-800 font-bold mb-2">Seleccione una fecha:</label>
            <input
              v-model="fecha"
              type="date"
              class="w-full p-2 border rounded-lg focus:outline-none focus:border-green-700"
            />
          </div>
  
          <!-- Botón para cargar el reporte -->
          <button
            @click="cargarReporte"
            class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-700 transition duration-300"
          >
            Cargar Reporte
          </button>
  
          <!-- Tabla de Reportes -->
          <table class="w-full mt-4">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Fecha</th>
                <th class="px-4 py-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reporte in reportes" :key="reporte.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ formatFecha(reporte.fechaTransaccion) }}</td>
                <td class="px-4 py-2 text-center">${{ reporte.montoTransaccion }}</td>
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
    name: 'ReportesPage',
    components: {
      NavBar,
      FooterPage,
    },
    data() {
      return {
        fecha: new Date().toISOString().split('T')[0], // Fecha actual por defecto
        reportes: [], // Lista de reportes
      };
    },
    methods: {
      async cargarReporte() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://127.0.0.1:8000/api/transacciones/?fecha=${this.fecha}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.reportes = response.data;
        } catch (error) {
          console.error('Error al cargar el reporte:', error);
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