import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ✅ Para GitHub Pages:
  // - Si publicas en tu dominio raíz: https://TUUSER.github.io/  => base: "/"
  // - Si publicas en repo:         https://TUUSER.github.io/TUREPO/ => base: "/TUREPO/"
  base: "/"
});
