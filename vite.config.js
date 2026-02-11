import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Si on build pour le déploiement, on utilise le sous-dossier. 
    // Sinon (en local), on utilise la racine '/'.
    base: command === 'build' ? '/Portfolio-React/' : '/',
  }
})