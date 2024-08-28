import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
// https:
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
});
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://estate.hotcode.kz",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, "/v1"),
//       },
//     },
//   },
// });
