<template>
  <header class="bg-black bg-opacity-30 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur font-futuristic">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <div class="text-2xl font-bold tracking-widest">SAXUM</div>

      <!-- Bouton burger (visible sur petit écran) -->
      <!-- Bouton burger -->
<button
  class="md:hidden focus:outline-none transition-all duration-300"
  :class="isOpen ? 'text-[#00ff88] rotate-90' : 'text-white rotate-0'"
  @click="isOpen = !isOpen"
>
  <svg
    v-if="!isOpen"
    class="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>

  <svg
    v-else
    class="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>


      <!-- Menu principal -->
      <ul
        class="hidden md:flex gap-8 text-lg font-light"
      >
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="transition duration-300 ease-in-out neon-hover" >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Menu mobile (visible quand isOpen est true) -->
    <div
      v-if="isOpen"
      class="md:hidden bg-black bg-opacity-90 backdrop-blur px-6 pb-6"
    >
      <ul class="flex flex-col gap-4 text-lg font-light">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="transition duration-300 ease-in-out neon-hover block"
            @click="isOpen = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' }
]
</script>

<style scoped>
.neon-hover {
  color: white;
  transition: 0,3s ease;}
.neon-hover:hover {
  color: #000000;
  text-shadow:
    0 0 5px #00ff88,
    0 0 10px #00ff88,
    0 0 20px #00ff88,
    0 0 40px #00ff88;
}


</style>
