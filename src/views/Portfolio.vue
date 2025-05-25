<template>
  <section class="min-h-screen bg-black text-white py-20 px-4 font-futuristic">
    <div class="max-w-5xl mx-auto">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        navigation
        class="mySwiper"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(site, index) in sites" :key="index">
          <div class="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-lg">
            <!-- Vidéo -->
            <video
  v-if="site.video"
  :src="site.video"
  autoplay muted loop playsinline
  class="w-full h-full object-contain"
/>


            <!-- Images -->
<div v-else class="relative w-full h-full">
  <Swiper
    :modules="[Pagination]"
    :pagination="false"
    class="h-full"
    @swiper="(swiper) => imageSwipers[index] = swiper"
    @slideChange="() => currentImageIndex[index] = imageSwipers[index]?.realIndex || 0"
  >
    <SwiperSlide v-for="(img, i) in site.images" :key="i">
      <img :src="img" class="w-full h-full object-cover" />
    </SwiperSlide>
  </Swiper>

  <!-- Compteur personnalisé -->
  <div class="absolute top-2 right-4 bg-black/60 text-[#00ff88] text-sm px-3 py-1 rounded z-20">
    {{ currentImageIndex[index] + 1 }} / {{ site.images.length }}
  </div>
</div>


            <!-- Texte overlay -->
            <div class="absolute bottom-0 bg-black/70 w-full p-4 z-10">
              <h3 class="text-2xl font-bold">{{ site.title }}</h3>
              <p class="text-sm">{{ site.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Pagination principale -->
      <div class="main-pagination mt-8 flex justify-center gap-4">
        <span
          v-for="(dot, i) in sites.length"
          :key="i"
          class="w-4 h-4 rounded-full transition duration-300"
          :class="{
            'bg-[#ffffff] shadow-lg shadow-[#00ff88]/50': i === activeIndex,
            'bg-white/20': i !== activeIndex
          }"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref } from 'vue'

// 1. D'abord définir `sites`
const sites = [
  {
    title: 'Port de Plaisance Russell',
    description: 'API Rest/CRUD Catways, Réservations et utilisateurs',
    video: '/CAPITAINERIEbackfront/demo.mov'
  },
  {
    title: 'Stubborn Shop',
    description: 'PHP/Symfony/Stripe - Site e-commerce de sweats',
    images: ['/STUBBORN/1.png', '/STUBBORN/2.png', '/STUBBORN/3.png','/STUBBORN/4.png','/STUBBORN/5.png','/STUBBORN/6.png','/STUBBORN/7.png','/STUBBORN/8.png']
  },
  {
    title: 'La Vie des Plantes',
    description: 'WordPress/WooCommerce - Vente de kits de graines',
    images: ['/PLANTES/About1.png', '/PLANTES/About2.png','/PLANTES/contact1.png','/PLANTES/contact2.png','/PLANTES/Home1.png',
'/PLANTES/Home2.png','/PLANTES/Home3.png','/PLANTES/Panier1.png','/PLANTES/Panier2.png','/PLANTES/Shop.png']
  }
]

// 2. Ensuite déclarer les refs qui dépendent de `sites`
const imageSwipers = ref([])
const currentImageIndex = ref(sites.map(() => 0))
const activeIndex = ref(0)
let swiperInstance = null

const onSwiper = (swiper) => {
  swiperInstance = swiper
}
const onSlideChange = () => {
  if (swiperInstance) {
    activeIndex.value = swiperInstance.realIndex
  }
}
</script>
<style>
/* Flèches personnalisées avec effet néon */
.swiper-button-next,
.swiper-button-prev {
  color: transparent !important; /* Cache le texte */
  position: absolute;
  z-index: 10;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 24px;
  color: #00ff88 !important;
  text-shadow: 0 0 8px #00ff88;
  transition: transform 0.2s ease, text-shadow 0.2s ease;
}

.swiper-button-next:hover::after,
.swiper-button-prev:hover::after {
  transform: scale(1.2);
  text-shadow: 0 0 12px #00ff88;
}

</style>



<style scoped>
.swiper-pagination {
  display: none;
}


.swiper-pagination {
  top: 1rem !important;
  bottom: auto !important;
  z-index: 20;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Petits points des images */
.swiper-pagination-bullet {
  background: #000000 !important;
  opacity: 0.4;
}

.swiper-pagination-bullet-active {
  background: #00ff88 !important;
  opacity: 1;
  box-shadow: 0 0 6px #00ff88;
}
</style>
