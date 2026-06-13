import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 배포 시 base를 '/portfolio/'로 바꾸면 됨 (Vercel/Netlify는 '/').
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
