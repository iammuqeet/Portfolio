import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   allowedHosts: [
  //     '8a40-14-1-106-41.ngrok-free.app', // Your current ngrok URL
  //     '.ngrok-free.app' // Wildcard for all ngrok URLs (recommended)
  //   ]
  // }
});
