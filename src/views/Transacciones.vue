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
                <th class="px-4 py-2">Cliente</th>
                <th class="px-4 py-2">Agencia</th>
                <th class="px-4 py-2">Motivo</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaccion in transacciones" :key="transaccion.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ formatFecha(transaccion.fechaTransaccion) }}</td>
                <td class="px-4 py-2 text-center">L. {{ transaccion.montoTransaccion }}</td>
                <td class="px-4 py-2 text-center">{{ transaccion.nombre_cliente }}</td>
                <td class="px-4 py-2 text-center">{{ transaccion.nombre_agencia }}</td>
                <td class="px-4 py-2 text-center">{{ transaccion.nombre_motivo_transaccion }}</td>
                <td class="px-4 py-2 text-center">
                  <button
                    @click="eliminarTransaccion(transaccion.id)"
                    class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Eliminar
                  </button>
                </td>
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
      async eliminarTransaccion(id) {
        if (confirm('¿Estás seguro de que deseas eliminar esta transacción?')) {
          try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://127.0.0.1:8000/api/transacciones/${id}/`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            await this.cargarTransacciones(); // Recargar la lista de transacciones
          } catch (error) {
            console.error('Error al eliminar la transacción:', error);
            alert('Ocurrió un error al eliminar la transacción.');
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>