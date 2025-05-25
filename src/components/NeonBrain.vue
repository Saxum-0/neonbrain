
<template>
  <canvas
    ref="canvas"
    class="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
  ></canvas>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  animated: {
    type: Boolean,
    default: true
  }
})

const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.position.z = 5

  const mouse = new THREE.Vector2(0, 0)
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  })

  const particleCount = 150
  const geometry = new THREE.BufferGeometry()
  const positions = []
  const velocities = []
  const phases = []

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 6
    const y = (Math.random() - 0.5) * 6
    const z = (Math.random() - 0.5) * 6
    positions.push(x, y, z)
    velocities.push((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01)
    phases.push(Math.random() * Math.PI * 2)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

  const canvasTex = document.createElement('canvas')
  canvasTex.width = canvasTex.height = 64
  const ctx = canvasTex.getContext('2d')
  ctx.beginPath()
  ctx.arc(32, 32, 32, 0, Math.PI * 2)
  ctx.fillStyle = '#00ff88'
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvasTex)

  const material = new THREE.PointsMaterial({
    map: texture,
    alphaTest: 0.5,
    transparent: true,
    size: 0.06,
    depthWrite: false
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  const maxLines = particleCount * 6
  const lineGeometry = new THREE.BufferGeometry()
  const linePositions = new Float32Array(maxLines * 3)
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.3
  })

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
  scene.add(lines)

  const waves = []
  const waveMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.12,
    side: THREE.DoubleSide,
    wireframe: true
  })

  function createWave() {
    const geo = new THREE.RingGeometry(0.2, 0.3, 64)
    const mesh = new THREE.Mesh(geo, waveMaterial.clone())
    mesh.rotation.x = Math.PI / 2
    scene.add(mesh)
    waves.push({ mesh, scale: 0.1 })
  }

  setInterval(() => {
    if (props.animated) createWave()
  }, 1500)

  const labels = ['Δ CODE', 'ÆON', '0x3A7F', 'SYS-LOC', 'Φ-GATE']
  labels.forEach((text, i) => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    ctx.font = '28px monospace'
    ctx.fillStyle = '#00ff88'
    ctx.fillText(text, 10, 40)

    const tex = new THREE.CanvasTexture(canvas)
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.4 })
    const sprite = new THREE.Sprite(mat)
    sprite.position.set(Math.cos(i * 2) * 3.5, Math.sin(i * 2) * 2, -1 + Math.random() * 2)
    sprite.scale.set(2, 0.5, 1)
    sprite.userData.phase = Math.random() * Math.PI * 2
    scene.add(sprite)
  })

  function animate(time) {
    requestAnimationFrame(animate)

    const pos = geometry.attributes.position.array
    const linePos = lines.geometry.attributes.position.array

    let idx = 0

    if (props.animated) {
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 0] += velocities[i * 3 + 0]
        pos[i * 3 + 1] += velocities[i * 3 + 1]
        pos[i * 3 + 2] += velocities[i * 3 + 2]
        for (let j = 0; j < 3; j++) {
          if (pos[i * 3 + j] > 3 || pos[i * 3 + j] < -3) velocities[i * 3 + j] *= -1
        }
      }

      for (let wave of waves) {
        wave.scale += 0.06
        wave.mesh.scale.set(wave.scale, wave.scale, wave.scale)
        wave.mesh.material.opacity = 0.15 * (1 - wave.scale / 12)
      }

      waves.filter((w, i) => {
        if (w.scale > 12) {
          scene.remove(w.mesh)
          waves.splice(i, 1)
        }
      })

      scene.children.forEach(child => {
        if (child.type === 'Sprite' && child.material) {
          const pulse = 0.4 + 0.2 * Math.sin(time * 0.001 + child.userData.phase)
          child.material.opacity = pulse
        }
      })
    }

    for (let i = 0; i < particleCount; i++) {
      const xi = pos[i * 3 + 0]
      const yi = pos[i * 3 + 1]
      const zi = pos[i * 3 + 2]
      for (let j = i + 1; j < particleCount; j++) {
        const xj = pos[j * 3 + 0]
        const yj = pos[j * 3 + 1]
        const zj = pos[j * 3 + 2]
        const dx = xi - xj
        const dy = yi - yj
        const dz = zi - zj
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 1.3 && idx < maxLines) {
          linePos[idx * 6 + 0] = xi
          linePos[idx * 6 + 1] = yi
          linePos[idx * 6 + 2] = zi
          linePos[idx * 6 + 3] = xj
          linePos[idx * 6 + 4] = yj
          linePos[idx * 6 + 5] = zj
          idx++
        }
      }
    }

    scene.scale.set(1.2, 1.2, 1.2)
    scene.rotation.y = mouse.x * 0.1
    scene.rotation.x = mouse.y * 0.1
    lines.geometry.setDrawRange(0, idx * 2)
    geometry.attributes.position.needsUpdate = true
    lines.geometry.attributes.position.needsUpdate = true
    renderer.render(scene, camera)
  }

  animate()
})
</script>
