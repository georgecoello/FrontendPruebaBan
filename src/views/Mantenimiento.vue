<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Contenido Principal -->
      <div class="container mx-auto p-4 flex-grow">
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
          <button @click="abrirModalCrearCanal" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nuevo Canal
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">ID Canal</th>
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="canal in canalesServicio" :key="canal.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ canal.id }}</td>
                <td class="px-4 py-2 text-center">{{ canal.codigoCanalServicio }}</td>
                <td class="px-4 py-2 text-center">{{ canal.nombreCanalServicio }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="abrirModalEditarCanal(canal)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarCanal(canal.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Agencias -->
        <div v-if="tabActual === 'agencias'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Agencias</h2>
          <button @click="abrirModalCrearAgencia" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
            Crear Nueva Agencia
          </button>
          <table class="w-full">
            <thead>
              <tr class="bg-green-100">
                <th class="px-4 py-2">Código</th>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Dirección</th>
                <th class="px-4 py-2">Teléfono</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="agencia in agencias" :key="agencia.id" class="border-b">
                <td class="px-4 py-2 text-center">{{ agencia.codigoAgencia }}</td>
                <td class="px-4 py-2 text-center">{{ agencia.nombreAgencia }}</td>
                <td class="px-4 py-2 text-center">{{ agencia.direccionAgencia }}</td>
                <td class="px-4 py-2 text-center">{{ agencia.telefonoAgencia }}</td>
                <td class="px-4 py-2 text-center">
                  <button @click="abrirModalEditarAgencia(agencia)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarAgencia(agencia.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Tipos de Cliente -->
        <div v-if="tabActual === 'tiposCliente'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Tipos de Cliente</h2>
          <button @click="abrirModalCrearTipoCliente" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
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
                  <button @click="abrirModalEditarTipoCliente(tipo)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarTipoCliente(tipo.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Tabla de Tipos de Transacción -->
        <div v-if="tabActual === 'tiposTransaccion'" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-green-800 mb-4">Tipos de Transacción</h2>
          <button @click="abrirModalCrearTipoTransaccion" class="bg-green-600 text-white py-2 px-4 rounded-lg font-bold mb-4 hover:bg-green-700 transition duration-300">
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
                  <button @click="abrirModalEditarTipoTransaccion(tipo)" class="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300">Editar</button>
                  <button @click="eliminarTipoTransaccion(tipo.id)" class="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Modales -->
        <Modal
          v-if="mostrarModalCanal"
          :formulario="formularioActualCanal"
          :esEdicion="esEdicionCanal"
          @update:formulario="guardarCanal"
          @close="mostrarModalCanal = false"
        />
        <ModalAgencias
          v-if="mostrarModalAgencia"
          :formulario="formularioActualAgencia"
          :esEdicion="esEdicionAgencia"
          @update:formulario="guardarAgencia"
          @close="mostrarModalAgencia = false"
        />
        <ModalTipoCliente
          v-if="mostrarModalTipoCliente"
          :formulario="formularioActualTipoCliente"
          :esEdicion="esEdicionTipoCliente"
          @update:formulario="guardarTipoCliente"
          @close="mostrarModalTipoCliente = false"
        />
        <ModalTipoTransaccion
          v-if="mostrarModalTipoTransaccion"
          :formulario="formularioActualTipoTransaccion"
          :esEdicion="esEdicionTipoTransaccion"
          @update:formulario="guardarTipoTransaccion"
          @close="mostrarModalTipoTransaccion = false"
        />
      </div>
  
      <!-- Footer -->
      <FooterPage />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/Nav.vue';
  import FooterPage from '../components/Footer.vue';
  import Modal from '../components/Modal.vue';
  import ModalAgencias from '../components/ModalAgencias.vue';
  import ModalTipoCliente from '../components/ModalTipoCliente.vue';
  import ModalTipoTransaccion from '../components/ModalTipoTransaccion.vue';
  import axios from 'axios';
  
  export default {
    name: 'MantenimientosPage',
    components: {
      NavBar,
      FooterPage,
      Modal,
      ModalAgencias,
      ModalTipoCliente,
      ModalTipoTransaccion,
    },
    data() {
      return {
        tabActual: 'canalesServicio', // Pestaña activa
        canalesServicio: [], // Lista de canales de servicio
        agencias: [], // Lista de agencias
        tiposCliente: [], // Lista de tipos de cliente
        tiposTransaccion: [], // Lista de tipos de transacción
        mostrarModalCanal: false, // Controla la visibilidad del modal de canales
        mostrarModalAgencia: false, // Controla la visibilidad del modal de agencias
        mostrarModalTipoCliente: false, // Controla la visibilidad del modal de tipos de cliente
        mostrarModalTipoTransaccion: false, // Controla la visibilidad del modal de tipos de transacción
        esEdicionCanal: false, // Indica si el modal de canales está en modo edición
        esEdicionAgencia: false, // Indica si el modal de agencias está en modo edición
        esEdicionTipoCliente: false, // Indica si el modal de tipos de cliente está en modo edición
        esEdicionTipoTransaccion: false, // Indica si el modal de tipos de transacción está en modo edición
        formularioActualCanal: {
          id: null,
          codigoCanalServicio: '',
          nombreCanalServicio: '',
          idUsuario: null,
        },
        formularioActualAgencia: {
          id: null,
          codigoAgencia: '',
          nombreAgencia: '',
          direccionAgencia: '',
          telefonoAgencia: '',
          idCanalServicio: null,
          idUsuario: null,
        },
        formularioActualTipoCliente: {
          id: null,
          codigoTipoCliente: '',
          nombreTipoCliente: '',
          idUsuario: null,
        },
        formularioActualTipoTransaccion: {
          id: null,
          codigoTipoMovimiento: '',
          codigoTipoTransaccion: '',
          nombreTipoTransaccion: '',
          idUsuario: null,
        },
      };
    },
    async created() {
      await this.cargarDatos();
    },
    methods: {
      async cargarDatos() {
        try {
          // Cargar canales de servicio
          const responseCanales = await axios.get('http://127.0.0.1:8000/api/canales-servicio/');
          this.canalesServicio = responseCanales.data;
  
          // Cargar agencias
          const responseAgencias = await axios.get('http://127.0.0.1:8000/api/agencias/');
          this.agencias = responseAgencias.data;
  
          // Cargar tipos de cliente
          const responseTiposCliente = await axios.get('http://127.0.0.1:8000/api/tipos-cliente/');
          this.tiposCliente = responseTiposCliente.data;
  
          // Cargar tipos de transacción
          const responseTiposTransaccion = await axios.get('http://127.0.0.1:8000/api/tipos-transaccion/');
          this.tiposTransaccion = responseTiposTransaccion.data;
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      },
      abrirModalCrearCanal() {
        this.esEdicionCanal = false;
        this.formularioActualCanal = {
          id: null,
          codigoCanalServicio: '',
          nombreCanalServicio: '',
          idUsuario: null,
        };
        this.mostrarModalCanal = true;
      },
      abrirModalEditarCanal(canal) {
        this.esEdicionCanal = true;
        this.formularioActualCanal = { ...canal };
        this.mostrarModalCanal = true;
      },
      async guardarCanal(formulario) {
        try {
          if (this.esEdicionCanal) {
            // Actualizar canal existente
            await axios.put(
              `http://127.0.0.1:8000/api/canales-servicio/${formulario.id}/`,
              formulario
            );
          } else {
            // Crear nuevo canal
            await axios.post(
              'http://127.0.0.1:8000/api/canales-servicio/',
              formulario
            );
          }
  
          // Recargar los datos después de guardar
          await this.cargarDatos();
          this.mostrarModalCanal = false;
        } catch (error) {
          console.error('Error al guardar el canal:', error);
          if (error.response) {
            alert(`Error: ${JSON.stringify(error.response.data)}`);
          } else {
            alert('Ocurrió un error inesperado.');
          }
        }
      },
      async eliminarCanal(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este canal?')) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/canales-servicio/${id}/`);
            // Eliminar el canal de la lista
            this.canalesServicio = this.canalesServicio.filter(c => c.id !== id);
          } catch (error) {
            console.error('Error al eliminar el canal:', error);
          }
        }
      },
      abrirModalCrearAgencia() {
        this.esEdicionAgencia = false;
        this.formularioActualAgencia = {
          id: null,
          codigoAgencia: '',
          nombreAgencia: '',
          direccionAgencia: '',
          telefonoAgencia: '',
          idCanalServicio: null,
          idUsuario: null,
        };
        this.mostrarModalAgencia = true;
      },
      abrirModalEditarAgencia(agencia) {
        this.esEdicionAgencia = true;
        this.formularioActualAgencia = { ...agencia };
        this.mostrarModalAgencia = true;
      },
      async guardarAgencia(formulario) {
        try {
          if (this.esEdicionAgencia) {
            // Actualizar agencia existente
            await axios.put(
              `http://127.0.0.1:8000/api/agencias/${formulario.id}/`,
              formulario
            );
          } else {
            // Crear nueva agencia
            await axios.post(
              'http://127.0.0.1:8000/api/agencias/',
              formulario
            );
          }
  
          // Recargar los datos después de guardar
          await this.cargarDatos();
          this.mostrarModalAgencia = false;
        } catch (error) {
          console.error('Error al guardar la agencia:', error);
          if (error.response) {
            alert(`Error: ${JSON.stringify(error.response.data)}`);
          } else {
            alert('Ocurrió un error inesperado.');
          }
        }
      },
      async eliminarAgencia(id) {
        if (confirm('¿Estás seguro de que deseas eliminar esta agencia?')) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/agencias/${id}/`);
            // Eliminar la agencia de la lista
            this.agencias = this.agencias.filter(a => a.id !== id);
          } catch (error) {
            console.error('Error al eliminar la agencia:', error);
          }
        }
      },
      abrirModalCrearTipoCliente() {
        this.esEdicionTipoCliente = false;
        this.formularioActualTipoCliente = {
          id: null,
          codigoTipoCliente: '',
          nombreTipoCliente: '',
          idUsuario: null,
        };
        this.mostrarModalTipoCliente = true;
      },
      abrirModalEditarTipoCliente(tipo) {
        this.esEdicionTipoCliente = true;
        this.formularioActualTipoCliente = { ...tipo };
        this.mostrarModalTipoCliente = true;
      },
      async guardarTipoCliente(formulario) {
        try {
          if (this.esEdicionTipoCliente) {
            // Actualizar tipo de cliente existente
            await axios.put(
              `http://127.0.0.1:8000/api/tipos-cliente/${formulario.id}/`,
              formulario
            );
          } else {
            // Crear nuevo tipo de cliente
            await axios.post(
              'http://127.0.0.1:8000/api/tipos-cliente/',
              formulario
            );
          }
  
          // Recargar los datos después de guardar
          await this.cargarDatos();
          this.mostrarModalTipoCliente = false;
        } catch (error) {
          console.error('Error al guardar el tipo de cliente:', error);
          if (error.response) {
            alert(`Error: ${JSON.stringify(error.response.data)}`);
          } else {
            alert('Ocurrió un error inesperado.');
          }
        }
      },
      async eliminarTipoCliente(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este tipo de cliente?')) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/tipos-cliente/${id}/`);
            // Eliminar el tipo de cliente de la lista
            this.tiposCliente = this.tiposCliente.filter(t => t.id !== id);
          } catch (error) {
            console.error('Error al eliminar el tipo de cliente:', error);
          }
        }
      },
      abrirModalCrearTipoTransaccion() {
        this.esEdicionTipoTransaccion = false;
        this.formularioActualTipoTransaccion = {
          id: null,
          codigoTipoMovimiento: '',
          codigoTipoTransaccion: '',
          nombreTipoTransaccion: '',
          idUsuario: null,
        };
        this.mostrarModalTipoTransaccion = true;
      },
      abrirModalEditarTipoTransaccion(tipo) {
        this.esEdicionTipoTransaccion = true;
        this.formularioActualTipoTransaccion = { ...tipo };
        this.mostrarModalTipoTransaccion = true;
      },
      async guardarTipoTransaccion(formulario) {
        try {
          if (this.esEdicionTipoTransaccion) {
            // Actualizar tipo de transacción existente
            await axios.put(
              `http://127.0.0.1:8000/api/tipos-transaccion/${formulario.id}/`,
              formulario
            );
          } else {
            // Crear nuevo tipo de transacción
            await axios.post(
              'http://127.0.0.1:8000/api/tipos-transaccion/',
              formulario
            );
          }
  
          // Recargar los datos después de guardar
          await this.cargarDatos();
          this.mostrarModalTipoTransaccion = false;
        } catch (error) {
          console.error('Error al guardar el tipo de transacción:', error);
          if (error.response) {
            alert(`Error: ${JSON.stringify(error.response.data)}`);
          } else {
            alert('Ocurrió un error inesperado.');
          }
        }
      },
      async eliminarTipoTransaccion(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este tipo de transacción?')) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/tipos-transaccion/${id}/`);
            // Eliminar el tipo de transacción de la lista
            this.tiposTransaccion = this.tiposTransaccion.filter(t => t.id !== id);
          } catch (error) {
            console.error('Error al eliminar el tipo de transacción:', error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>