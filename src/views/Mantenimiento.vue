<template>
    <div class="min-h-screen bg-gray-100">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal -->
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Mantenimientos</h1>
  
        <!-- Tabs para seleccionar la tabla a gestionar -->
        <div class="mb-4">
          <button
            @click="tabActual = 'canalesServicio'"
            :class="{
              'bg-green-600 text-white': tabActual === 'canalesServicio',
              'bg-white text-green-800': tabActual !== 'canalesServicio',
            }"
            class="px-4 py-2 rounded-t-lg font-bold"
          >
            Canales de Servicio
          </button>
          <button
            @click="tabActual = 'agencias'"
            :class="{
              'bg-green-600 text-white': tabActual === 'agencias',
              'bg-white text-green-800': tabActual !== 'agencias',
            }"
            class="px-4 py-2 rounded-t-lg font-bold"
          >
            Agencias
          </button>
          <button
            @click="tabActual = 'tiposCliente'"
            :class="{
              'bg-green-600 text-white': tabActual === 'tiposCliente',
              'bg-white text-green-800': tabActual !== 'tiposCliente',
            }"
            class="px-4 py-2 rounded-t-lg font-bold"
          >
            Tipos de Cliente
          </button>
          <button
            @click="tabActual = 'tiposTransaccion'"
            :class="{
              'bg-green-600 text-white': tabActual === 'tiposTransaccion',
              'bg-white text-green-800': tabActual !== 'tiposTransaccion',
            }"
            class="px-4 py-2 rounded-t-lg font-bold"
          >
            Tipos de Transacción
          </button>
        </div>
  
        <!-- Tabla de Canales de Servicio -->
        <div v-if="tabActual === 'canalesServicio'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Canales de Servicio</h2>
          <button @click="mostrarFormularioCrearCanal" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nuevo Canal
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="canal in canalesServicio" :key="canal.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ canal.codigoCanalServicio }}</td>
                <td class="px-4 py-2 text-center">{{ canal.nombreCanalServicio }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="editarCanal(canal)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarCanal(canal.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Agencias -->
        <div v-if="tabActual === 'agencias'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Agencias</h2>
          <button @click="mostrarFormularioCrearAgencia" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nueva Agencia
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="agencia in agencias" :key="agencia.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ agencia.codigoAgencia }}</td>
                <td class="px-4 py-2 text-center">{{ agencia.nombreAgencia }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="editarAgencia(agencia)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarAgencia(agencia.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Tipos de Cliente -->
        <div v-if="tabActual === 'tiposCliente'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Tipos de Cliente</h2>
          <button @click="mostrarFormularioCrearTipoCliente" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nuevo Tipo
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tipo in tiposCliente" :key="tipo.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ tipo.codigoTipoCliente }}</td>
                <td class="px-4 py-2 text-center">{{ tipo.nombreTipoCliente }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="editarTipoCliente(tipo)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarTipoCliente(tipo.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Tipos de Transacción -->
        <div v-if="tabActual === 'tiposTransaccion'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Tipos de Transacción</h2>
          <button @click="mostrarFormularioCrearTipoTransaccion" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nuevo Tipo
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tipo in tiposTransaccion" :key="tipo.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ tipo.codigoTipoTransaccion }}</td>
                <td class="px-4 py-2 text-center">{{ tipo.nombreTipoTransaccion }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="editarTipoTransaccion(tipo)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarTipoTransaccion(tipo.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Footer -->
      <FooterPage />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/Nav.vue';
  import FooterPage from '../components/Footer.vue';
  import axios from 'axios';
  
  export default {
    name: 'MantenimientosPage',
    components: {
      NavBar,
      FooterPage,
    },
    data() {
      return {
        tabActual: 'canalesServicio', // Pestaña activa
        canalesServicio: [], // Lista de canales de servicio
        agencias: [], // Lista de agencias
        tiposCliente: [], // Lista de tipos de cliente
        tiposTransaccion: [], // Lista de tipos de transacción
      };
    },
    async created() {
      await this.cargarDatos();
    },
    methods: {
      async cargarDatos() {
        const token = localStorage.getItem('token');
        try {
          // Cargar canales de servicio
          const responseCanales = await axios.get('http://127.0.0.1:8000/api/canales-servicio/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.canalesServicio = responseCanales.data;
  
          // Cargar agencias
          const responseAgencias = await axios.get('http://127.0.0.1:8000/api/agencias/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.agencias = responseAgencias.data;
  
          // Cargar tipos de cliente
          const responseTiposCliente = await axios.get('http://127.0.0.1:8000/api/tipos-cliente/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.tiposCliente = responseTiposCliente.data;
  
          // Cargar tipos de transacción
          const responseTiposTransaccion = await axios.get('http://127.0.0.1:8000/api/tipos-transaccion/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.tiposTransaccion = responseTiposTransaccion.data;
        } catch (error) {
          console.error('Error al cargar datos:', error);
        }
      },
      mostrarFormularioCrearCanal() {
        // Lógica para mostrar formulario de creación de canal
      },
      editarCanal(canal) {
        console.log(canal);
      },
      eliminarCanal(id) {
        console.log(id);
      },
      mostrarFormularioCrearAgencia() {
        // Lógica para mostrar formulario de creación de agencia
      },
      editarAgencia(agencia) {
        console.log(agencia);
      },
      eliminarAgencia(id) {
        console.log(id);
      },
      mostrarFormularioCrearTipoCliente() {
        // Lógica para mostrar formulario de creación de tipo de cliente
      },
      editarTipoCliente(tipo) {
        console.log(tipo);
      },
      eliminarTipoCliente(id) {
        console.log(id);
      },
      mostrarFormularioCrearTipoTransaccion() {
        // Lógica para mostrar formulario de creación de tipo de transacción
      },
      editarTipoTransaccion(tipo) {
        console.log(tipo);
      },
      eliminarTipoTransaccion(id) {
        console.log(id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>