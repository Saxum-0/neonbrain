<template>
  <section id="contact" class="min-h-screen bg-[#0f172a] text-white py-20 px-4 font-futuristic">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-[#FFFFFF] font-futuristic">Me contacter</h2>

      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-xl mb-1 font-futuristic">Nom</label>
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            placeholder="Votre nom"
            required
            class="w-full px-4 py-2 bg-white bg-opacity-70 border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
          />
        </div>

        <div>
          <label for="email" class="block text-xl mb-1 font-futuristic">Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            placeholder="Votre email"
            required
            class="w-full px-4 py-2 bg-white bg-opacity-70 border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
          />
        </div>

        <div>
          <label for="message" class="block text-xl mb-1 font-futuristic">Message</label>
          <textarea
            v-model="message"
            name="message"
            id="message"
            rows="5"
            placeholder="Votre message..."
            required
            class="w-full px-4 py-2 bg-opacity-70 bg-white border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            :disabled="isSending"
            class="px-6 py-2 bg-[#00ff88] text-black font-bold rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
            :class="{ 'animate-pulse': isSending }"
          >
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const buttonText = ref('Envoyer')
const isSending = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()

  if (isSending.value) return
  playClickSound()
  isSending.value = true
  buttonText.value = 'Envoi...'

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)

  try {
    const res = await fetch('https://formspree.io/f/xkgrlobn', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })

    if (res.ok) {
      buttonText.value = 'Message envoyé ✔️'
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      buttonText.value = 'Erreur ❌'
    }
  } catch (err) {
    buttonText.value = 'Erreur ❌'
  } finally {
    setTimeout(() => {
      buttonText.value = 'Envoyer'
      isSending.value = false
    }, 3000)
  }
}
const playClickSound = () => {
  const audio = new Audio('/sounds/sound.wav')
  audio.volume = 0.3 // Ajuste le volume si besoin
  audio.play()
}

</script>
