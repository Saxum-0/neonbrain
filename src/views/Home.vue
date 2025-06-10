<template>
  <div class="relative w-full min-h-screen bg-black text-white font-futuristic overflow-hidden">
    <!-- NeonBrain en fond (avec dimensions explicites) -->
    <NeonBrain class="fixed top-0 left-0 w-full h-full z-0" />

    <!-- Contenu principal -->
    <NavBar />
    <section
      id="home"
      class="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 md:px-12"
    >
      <div class="max-w-3xl text-gray-100 text-sm md:text-base">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Pierre Faivre
        </h1>

        <p class="leading-relaxed mb-6">
          Développeur web full-stack passionné par les interfaces immersives et interactives.
          Je conçois des expériences numériques modernes, performantes et sur mesure.
        </p>

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
<br>

        <a
          href="/portfolio"
          class="inline-block px-6 py-2 bg-[#000000] text-white font-bold rounded custom-shadow hover:bg-[#00ff88] hover:text-black transition"
        >
          Voir mes projets
        </a>
      </div>
      <div class="mt-12 text-center">
        <p class="text-lg text-gray-300">
    Mon template Wordpress pour photographes <br />
    <a href="www.saxum.space" class="text-[#00ff88] hover:underline">A découvrir ici</a><br>
    <a href="https://saxumshop.etsy.com" class="text-[#00ff88] hover:underline">En vente ici</a>

  </p>
  <br>
  <p class="text-lg text-gray-300">
    Envie de collaborer ou d’échanger ?<br />
    <a href="/contact" class="text-[#ffffff] hover:underline">Contactez-moi ici</a>
  </p>
  <p class="mt-4 text-sm text-gray-500">
    Ou découvrez mes projets open source sur
    <a
      href="https://github.com/saxum-0"
      target="_blank"
      rel="noopener"
      class="text-[#00ff88] hover:text-white bold"
    >
      GitHub
    </a>.
  </p>
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
