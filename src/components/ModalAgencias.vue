<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="modal-title">{{ esEdicion ? 'Editar Agencia' : 'Crear Agencia' }}</h2>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <!-- Campo: Código de Agencia -->
          <div class="form-group">
            <label for="codigoAgencia" class="form-label">Código de Agencia</label>
            <input
              id="codigoAgencia"
              v-model="localFormulario.codigoAgencia"
              type="text"
              class="form-input"
              placeholder="Ingrese el código de la agencia"
              required
            />
          </div>
  
          <!-- Campo: Nombre de Agencia -->
          <div class="form-group">
            <label for="nombreAgencia" class="form-label">Nombre de Agencia</label>
            <input
              id="nombreAgencia"
              v-model="localFormulario.nombreAgencia"
              type="text"
              class="form-input"
              placeholder="Ingrese el nombre de la agencia"
              required
            />
          </div>
  
          <!-- Campo: Dirección de Agencia -->
          <div class="form-group">
            <label for="direccionAgencia" class="form-label">Dirección de Agencia</label>
            <input
              id="direccionAgencia"
              v-model="localFormulario.direccionAgencia"
              type="text"
              class="form-input"
              placeholder="Ingrese la dirección de la agencia"
              required
            />
          </div>
  
          <!-- Campo: Teléfono de Agencia -->
          <div class="form-group">
            <label for="telefonoAgencia" class="form-label">Teléfono de Agencia</label>
            <input
              id="telefonoAgencia"
              v-model="localFormulario.telefonoAgencia"
              type="text"
              class="form-input"
              placeholder="Ingrese el teléfono de la agencia"
              required
            />
          </div>
  
          <!-- Campo: ID de Canal de Servicio -->
          <div class="form-group">
            <label for="idCanalServicio" class="form-label">ID de Canal de Servicio</label>
            <input
              id="idCanalServicio"
              v-model.number="localFormulario.idCanalServicio"
              type="number"
              class="form-input"
              placeholder="Ingrese el ID del canal de servicio"
              required
            />
          </div>
  
          <!-- Campo: ID de Usuario -->
          <div class="form-group">
            <label for="idUsuario" class="form-label">ID de Usuario</label>
            <input
              id="idUsuario"
              v-model.number="localFormulario.idUsuario"
              type="number"
              class="form-input"
              placeholder="Ingrese el ID del usuario"
              required
            />
          </div>
  
          <!-- Botones de la modal -->
          <div class="modal-actions">
            <button type="button" @click="closeModal" class="modal-button cancel-button">
              Cancelar
            </button>
            <button type="submit" class="modal-button submit-button">
              {{ esEdicion ? 'Guardar Cambios' : 'Crear Agencia' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AgenciaModal',
    props: {
      formulario: {
        type: Object,
        required: true,
      },
      esEdicion: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        localFormulario: { ...this.formulario },
      };
    },
    watch: {
      formulario: {
        handler(newVal) {
          this.localFormulario = { ...newVal };
        },
        deep: true,
      },
    },
    methods: {
      handleSubmit() {
        // Verificar que los campos obligatorios no estén vacíos
        if (
          this.localFormulario.codigoAgencia === '' ||
          this.localFormulario.nombreAgencia === '' ||
          this.localFormulario.direccionAgencia === '' ||
          this.localFormulario.telefonoAgencia === '' ||
          this.localFormulario.idCanalServicio === null ||
          this.localFormulario.idUsuario === null
        ) {
          alert('Todos los campos son obligatorios.');
          return;
        }
  
        // Convertir campos numéricos a número (si es necesario)
        this.localFormulario.idCanalServicio = Number(this.localFormulario.idCanalServicio);
        this.localFormulario.idUsuario = Number(this.localFormulario.idUsuario);
  
        // Emitir el evento para guardar el formulario
        this.$emit('update:formulario', this.localFormulario);
      },
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Fondo oscuro semi-transparente */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px); /* Efecto de desenfoque */
  }
  
  /* Contenedor de la modal */
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    animation: modalFadeIn 0.3s ease-out;
  }
  
  /* Animación de entrada */
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Título de la modal */
  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  /* Formulario dentro de la modal */
  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Grupo de campos del formulario */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  /* Etiquetas de los campos */
  .form-label {
    font-size: 0.875rem;
    color: #4a5568;
    font-weight: 500;
  }
  
  /* Campos de entrada */
  .form-input {
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #2d3748;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    outline: none;
  }
  
  /* Botones de la modal */
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  /* Estilos base para los botones */
  .modal-button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  /* Botón de cancelar */
  .cancel-button {
    background-color: #e2e8f0;
    color: #4a5568;
  }
  
  .cancel-button:hover {
    background-color: #cbd5e0;
    transform: translateY(-1px);
  }
  
  /* Botón de guardar */
  .submit-button {
    background-color: #4299e1;
    color: white;
  }
  
  .submit-button:hover {
    background-color: #3182ce;
    transform: translateY(-1px);
  }
  </style>