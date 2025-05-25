<template>
  <header class="bg-black bg-opacity-30 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur font-futuristic">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <div class="text-2xl font-bold tracking-widest">SAXUM</div>
      <ul class="flex gap-8 text-lg font-light">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="transition duration-300 ease-in-out neon-hover"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/Contact' }
]
</script>

<style scoped>
.neon-hover {
  color: white;
  transition: all 0.3s ease;
}
.neon-hover:hover {
  color: #000000;
  text-shadow:
    0 0 5px #00ff88,
    0 0 10px #00ff88,
    0 0 20px #00ff88,
    0 0 40px #00ff88;
}
</style>
