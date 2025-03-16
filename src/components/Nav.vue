<template>
  <nav class="bg-white-600 text-green shadow-lg text-green-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/home" class="block w-20 h-10">
            <img
              class="object-contain w-full h-full"
              src="../../public/banccoci.png"
              alt="Logo"
            />
          </router-link>
        </div>


        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-4">
          <router-link to="/project" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent"> Proyecto </router-link>
          <router-link to="/dashboard" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent">Dashboard</router-link>
          <router-link to="/transacciones" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent">Transacciones</router-link>
          <router-link to="/reportes" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent">Reportes</router-link>
          <router-link to="/mantenimiento" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent">Mantenimiento</router-link>
          <router-link to="/home" class="font-bold px-3 py-2 rounded hover:border hover:border-green-700 hover:bg-transparent">Log out</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white-600 text-green px-2 space-y-2"
    >
      <router-link to="/project" class="text-center block px-3 py-2 font-bold hover:border-green-700">Proyecto</router-link>
      <router-link to="/dashboard" class="text-center block px-3 py-2 font-bold hover:border-green-700">Dashboard</router-link>
      <router-link to="/transacciones" class="text-center block px-3 py-2 font-bold hover:border-green-700">Transacciones</router-link>
      <router-link to="/reportes" class="text-center block px-3 py-2 font-bold hover:border-green-700">Reportes</router-link>
      <router-link to="/mantenimiento" class="text-center block px-3 py-2 font-bold hover:border-green-700">Mantenimiento</router-link>
      <router-link to="/home" class="text-center block px-3 py-2 font-bold hover:border-green-700">Log out</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false, // Controla la visibilidad del menú móvil
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados si es necesario */
</style>