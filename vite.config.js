import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Peer-Review-Assignment-ibm-reactjs/",
  plugins: [react()],
  server: {
    historyApiFallback: true, // Thêm dòng này để xử lý fallback
  },
});
