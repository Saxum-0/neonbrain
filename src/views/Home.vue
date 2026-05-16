<template>
  <div class="relative w-full min-h-screen bg-black text-white font-futuristic overflow-hidden">
    <NeonBrain class="fixed top-0 left-0 w-full h-full z-0" />
    <NavBar />
    <section
      id="home"
      class="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 md:px-12 pt-20 md:pt-24"
    >
      <div class="max-w-3xl text-gray-100 text-sm md:text-base">

        <!-- Accroche avant le nom -->
        <p class="text-[#00ff88] text-sm tracking-widest uppercase mb-3 font-medium">
          Développeur Full-Stack · Nice, France
        </p>

        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Pierre Faivre
        </h1>

        <p class="leading-relaxed mb-6">
          Développeur web full-stack passionné par les interfaces immersives et interactives.
          Je conçois des expériences numériques modernes, performantes et sur mesure.
        </p>

        <!-- Badge diplôme -->
        <div class="inline-flex items-center gap-2 mb-6 bg-white/10 border border-[#00ff8833] px-4 py-2 rounded-full text-sm">
          <span class="text-[#00ff88]">⬡</span>
          <span class="text-white font-medium">Diplômé RNCP Niv. 5 — DWWM</span>
          <span class="text-gray-400">· Nov. 2025</span>
        </div>

        <!-- Technos -->
        <p class="mt-6 text-sm text-gray-400">Technos maîtrisées :</p>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-white text-sm tracking-wide">
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">PHP</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">Node.js</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">Three.js</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">Vue.js</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">Angular</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">Python</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">TailwindCSS</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">MongoDB</li>
          <li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition">MySQL</li>
        </ul>

        <!-- CTAs côte à côte -->
        <div class="flex gap-4 mt-8 flex-wrap">
          <a href="/portfolio"
            class="px-6 py-2 bg-black text-white font-bold rounded custom-shadow hover:bg-[#00ff88] hover:text-black transition">
            Voir mes projets
          </a>
          <a href="/contact"
            class="px-6 py-2 border border-[#00ff88] text-[#00ff88] font-bold rounded custom-shadow hover:bg-[#00ff88] hover:text-black transition">
            Me contacter
          </a>
        </div>
      </div>

      <!-- Bloc secondaire -->
      <div class="mt-12 max-w-3xl w-full">
        <p class="text-lg text-gray-300">
          Mon template Wordpress pour photographes<br />
          <a href="https://saxum.space" target="_blank" rel="noopener" class="text-[#00ff88] hover:underline">À découvrir ici</a>
          &nbsp;·&nbsp;
          <a href="https://saxumshop.etsy.com" target="_blank" rel="noopener" class="text-[#00ff88] hover:underline">En vente sur Etsy</a>
        </p>

        <div class="border-t border-white/10 mt-8 pt-8">
          <p class="mt-4 text-sm text-gray-500">
            Projets open source sur
            <a href="https://github.com/saxum-0" target="_blank" rel="noopener"
              class="text-[#00ff88] hover:text-white font-bold">
              GitHub
            </a>.
          </p>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import NeonBrain from '../components/NeonBrain.vue'
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 0 12px #00ff88;
  border-radius: 10px;
}
</style>
