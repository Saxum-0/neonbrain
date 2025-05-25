<template>
  <div class="relative bg-black text-white font-futuristic overflow-hidden">
    <NeonBrain :animated="isHome" />
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import NeonBrain from './components/NeonBrain.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

</script>
