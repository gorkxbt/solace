import { gsap } from 'gsap'

// Matrix rain effect
export function createMatrixRain(container: HTMLElement, chars: string = '01', count: number = 50) {
  for (let i = 0; i < count; i++) {
    const char = document.createElement('div')
    char.textContent = chars[Math.floor(Math.random() * chars.length)]
    char.className = 'matrix-char absolute text-yellow-400 font-mono text-sm opacity-0'
    char.style.left = Math.random() * 100 + '%'
    char.style.animationDelay = Math.random() * 5 + 's'
    container.appendChild(char)
    
    gsap.to(char, {
      y: '100vh',
      opacity: 1,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      delay: Math.random() * 2,
      ease: 'none'
    })
  }
}

// Binary rain effect
export function createBinaryRain(container: HTMLElement, count: number = 30) {
  const binaryChars = ['0', '1']
  
  for (let i = 0; i < count; i++) {
    const binary = document.createElement('div')
    binary.textContent = binaryChars[Math.floor(Math.random() * 2)]
    binary.className = 'absolute text-yellow-400/30 font-mono text-xs'
    binary.style.left = Math.random() * 100 + '%'
    binary.style.top = Math.random() * 100 + '%'
    container.appendChild(binary)
    
    gsap.to(binary, {
      y: Math.random() * 200 - 100,
      x: Math.random() * 200 - 100,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }
}

// Glitch effect
export function createGlitchEffect(element: HTMLElement, delay: number = 3) {
  const tl = gsap.timeline({ repeat: -1, delay })
  tl.to(element, {
    x: -2,
    duration: 0.05,
    ease: "none"
  })
  .to(element, {
    x: 2,
    duration: 0.05,
    ease: "none"
  })
  .to(element, {
    x: 0,
    duration: 0.05,
    ease: "none"
  })
  .to({}, { duration: 8 }) // Wait before next glitch
}

// Mouse parallax effect
export function applyMouseParallax(element: HTMLElement, mouseX: number, mouseY: number, intensity: number = 0.01) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const deltaX = (mouseX - centerX) * intensity
  const deltaY = (mouseY - centerY) * intensity
  
  gsap.to(element, {
    rotationY: deltaX,
    rotationX: -deltaY,
    duration: 0.5,
    ease: "power2.out"
  })
} 