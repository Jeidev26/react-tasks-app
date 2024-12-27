import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Escucha en la red local (0.0.0.0)
    port: 5173, // Mantén el puerto que prefieras
  }
});
